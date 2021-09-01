import React, { forwardRef, useState, useImperativeHandle, useEffect } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import * as utils from "../../utils";
import OToggleSwitch from "../ToggleSwitch/OToggleSwitch";
import "./ocarousel.scss";

const OCarouselNavigatorMode = {
  None: "none",
  Auto: "auto",
  Manual: "manual",
  Both: "auto manual"
}

const OCarouselOrientation = {
  Horizontal: "horizontal",
  Vertical: "vertical"
}

const OCarouselNavigator = ({ onBackward, onForward, mode, orientation }) => {  
  const [duration, setDuration] = useState(0);
  const [run, setRun] = useState(mode == OCarouselNavigatorMode.Auto);

  useEffect(() => {
    if (mode != OCarouselNavigatorMode.Auto || !run)
    {
      setDuration(0);
      return false;
    }
    const timer = setTimeout(() => {
      onForward(1);
      setDuration(duration + 1);
    }, 2000);
    return () => clearTimeout(timer);
  }, [duration, run, mode]);

  return (
    <div className="ocarousel-navigator">
    {(mode == OCarouselNavigatorMode.Manual) && 
      <ButtonGroup aria-label="Previous/Next">
        <Button variant="secondary" onClick={() => onBackward(Number.MAX_VALUE)} title="First">|&lt;</Button>
        <Button variant="secondary" onClick={() => onBackward(1)} title="Previous">&lt;</Button>
        <Button variant="secondary" onClick={() => onForward(1)} title="Next">&gt;</Button>
        <Button variant="secondary" onClick={() => onForward(Number.MAX_VALUE)} title="Last">&gt;|</Button>
      </ButtonGroup>
    }
    {(mode == OCarouselNavigatorMode.Auto) && 
      <OToggleSwitch onSwitch={(on) => setRun(on)} initialState={run} labelOn="Auto" labelOff="Paused" style={{width: "90px"}} />
    }
    </div>
  );  
}

OCarouselNavigator.defaultProps = {
  mode: OCarouselNavigatorMode.Manual, 
  orientation: OCarouselOrientation.Horizontal
};

class OCarouselDynamicsXZ {
  constructor(slotCount, spaceWidth){
    this.slotCount = slotCount;
    this.spaceWidth = spaceWidth;

    this.distZ = Math.round(( spaceWidth / 2 ) /  Math.tan(Math.PI / slotCount));
    this.rotationY = 360 / slotCount;
  }

  getDistanceZ = () => this.distZ;

  getRotationY = () => this.rotationY;

  initialSlotTransform = (slotNo) => `rotateY(${this.rotationY * (slotNo - 1)}deg) translateZ(${this.distZ}px)`;

  calculateRelativeRotation = (slotPosition, slotCountInGap) => (slotPosition + slotCountInGap - 1) / this.slotCount * -360;

  calculateRelativeTransform(slotPosition, slotCountInGap) {
    const deg = this.calculateRelativeRotation(slotPosition, slotCountInGap);
    return `translateZ(-${this.distZ}px) rotateY(${deg}deg)`;
  };

  calculateClosestGap(slotPosition, destinationSlotNo) {
    const currentSlotNo = slotPosition % this.slotCount;
    let targetAhead, targetBehind, distAhead, distBehind = 0;

    targetAhead = slotPosition + destinationSlotNo - currentSlotNo;
    if (targetAhead > slotPosition)
      targetBehind = targetAhead - this.slotCount;
    else {
      targetBehind = targetAhead;
      targetAhead = targetBehind + this.slotCount;
    }

    distAhead = targetAhead - slotPosition;
    distBehind = slotPosition - targetBehind;  
        
    return (distAhead <= distBehind) ? distAhead : (0 - distBehind);
  };

}

const OCarousel = React.forwardRef(({
  children, 
  navigator, 
  variant, 
  noframe,
  slotGap,
  slot3dOffset, 
  slotWidth, 
  slotHeight, 
  ...props
}, ref) => {
    const rootClass = utils.classJoin(`ocarousel ocarousel-${variant} ${noframe ? '' : 'frame'}`);
    const orientation = variant == OCarouselOrientation.Vertical ? variant : OCarouselOrientation.Horizontal;

    const spaceWidth = Number.parseInt(slotWidth) + Number.parseInt(slotGap);
    const spaceHeight = Number.parseInt(slotHeight) + Number.parseInt(slot3dOffset);

    const dynamics = new OCarouselDynamicsXZ(children && children.length || 1, spaceWidth);

    // Navigator setup
    const allowManual = navigator == OCarouselNavigatorMode.Manual || navigator == OCarouselNavigatorMode.Both;
    const allowAuto = navigator == OCarouselNavigatorMode.Auto || navigator == OCarouselNavigatorMode.Both; 
    const manualNavigator = allowManual ? { 
      mode: OCarouselNavigatorMode.Manual,
      orientation: orientation
    } : null;

    const autoNavigator = allowAuto ? { 
      mode: OCarouselNavigatorMode.Auto,
      orientation: orientation
    } : null;

    // 3D space calculation
    const slotCount = children && children.length || 1;
    
    const [position, setPosition] = useState(1);
    const [transform, setTransform] = useState(`translateZ(-${dynamics.getDistanceZ()}px)`);

    // Rotate functions
    const rotateBy = (slotCountInGap) => {
      setPosition(position + slotCountInGap);
      setTransform(dynamics.calculateRelativeTransform(position, slotCountInGap));
    };

    const rotateNearest = (destinationSlotNo) => {
      rotateBy(dynamics.calculateClosestGap(position, destinationSlotNo));
    };    

    const moveFirst = () => rotateNearest(1);
    const moveLast = () => rotateNearest(slotCount);
    const moveBack = (step = 1) => step == Number.MAX_VALUE ? moveFirst() : rotateBy(0 - step);
    const moveNext = (step = 1) => step == Number.MAX_VALUE ? moveLast() : rotateBy(step);

    useImperativeHandle(ref, () => ({
      first: moveFirst,
      prev: moveBack,
      next: moveNext,
      last: moveLast,
    }), [position, transform]);

    const slots = children.map((item, idx) => (
      <div className="ocarousel-slot" key={idx} 
        style={{ width: slotWidth, height: slotHeight, transform: dynamics.initialSlotTransform(idx + 1) }}
      >
        {item}
      </div>
    ));
    
    return (
      <div className={rootClass} style={{width: `${spaceWidth}px`}}>
        {autoNavigator && <OCarouselNavigator {...autoNavigator} onBackward={moveBack} onForward={moveNext} />}
        <div className="ocarousel-inner" style={{ transform: transform, height: `${spaceHeight}px` }}>
          {slots}
        </div>
        {manualNavigator && <OCarouselNavigator {...manualNavigator} onBackward={moveBack} onForward={moveNext} />}
      </div>
    );
});

OCarousel.defaultProps = {
  navigator: OCarouselNavigatorMode.Manual,
  variant: "horizontal",
  slotGap: "20px",
  slot3dOffset: "20px",
  slotWidth: "190px",
  slotHeight: "120px",
  noframe: false
}

export {
  OCarousel,
  OCarouselNavigatorMode,
  OCarouselOrientation,
}