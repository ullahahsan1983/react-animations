import React, { useState, useImperativeHandle } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import * as utils from "../../utils";
import { useInterval } from "../../hooks";
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

const OCarouselNavigator = ({ 
  onBackward, 
  onForward, 
  mode, 
  off,
  orientation 
}) => {  
  const [run, setRun] = useState(mode === OCarouselNavigatorMode.Auto && !off);

  useInterval(() =>
  {
    onForward(1);
  }, run ? 2000 : null);

  return (
    <div className="ocarousel-navigator">
    {(mode === OCarouselNavigatorMode.Manual) && 
      <ButtonGroup aria-label="Previous/Next">
        <Button variant="secondary" onClick={() => onBackward(Number.MAX_VALUE)} title="First">|&lt;</Button>
        <Button variant="secondary" onClick={() => onBackward(1)} title="Previous">&lt;</Button>
        <Button variant="secondary" onClick={() => onForward(1)} title="Next">&gt;</Button>
        <Button variant="secondary" onClick={() => onForward(Number.MAX_VALUE)} title="Last">&gt;|</Button>
      </ButtonGroup>
    }
    {(mode === OCarouselNavigatorMode.Auto) && 
      <OToggleSwitch onSwitch={(on) => setRun(on)} initialState={run} labelOn="Auto" labelOff="Paused" style={{width: "90px"}} />
    }
    </div>
  );  
}

OCarouselNavigator.defaultProps = {
  mode: OCarouselNavigatorMode.Manual, 
  orientation: OCarouselOrientation.Horizontal,
  off: false, // Used only in auto mode 
};

class OCarouselDynamics {
  constructor(
    slotCount, 
    slotGap,
    slot3dOffset, 
    slotWidth, 
    slotHeight, 
    plane = 'xz'
  ){
    this._slotCount = slotCount;
    this._slotGap = slotGap;
    this._slotWidth = slotWidth;
    this._slotHeight = slotHeight;
    this._slot3dOffset = slot3dOffset;
    this._plane = plane;

    this._spaceWidth = Number.parseInt(slotWidth) + Number.parseInt(slotGap);
    this._spaceHeight = Number.parseInt(slotHeight) + Number.parseInt(slot3dOffset);
    this._rotateFn = plane === 'xy' ? 'rotateZ' : (plane === 'yz' ? 'rotateX' : 'rotateY');
    this._translateFn = plane === 'xy' ? 'translateX' : (plane === 'yz' ? 'translateZ' : 'translateZ');

    this._translationDist = Math.round(( this._spaceWidth / 2 ) /  Math.tan(Math.PI / slotCount));
    this._rotationUnit = 360 / slotCount;
  }

  getSpaceWidth = () => this._spaceWidth + 'px';

  getSpaceHeight = () => this._spaceHeight + 'px';

  getTranslationDist = () => this._translationDist;

  getRotationAngle = () => this._rotationUnit;

  initialSpaceTransform = () => `${this._translateFn}(-${this._translationDist}px)`;

  initialSlotTransform = (slotNo) => `${this._rotateFn}(${this._rotationUnit * (slotNo - 1)}deg) ${this._translateFn}(${this._translationDist}px)`;

  calculateRelativeRotation = (slotPosition, slotCountInGap) => (slotPosition + slotCountInGap - 1) / this._slotCount * -360;

  calculateRelativeTransform(slotPosition, slotCountInGap) {
    const deg = this.calculateRelativeRotation(slotPosition, slotCountInGap);
    return `${this._translateFn}(-${this._translationDist}px) ${this._rotateFn}(${deg}deg)`;
  };

  calculateClosestGap(slotPosition, destinationSlotNo) {
    const currentSlotNo = slotPosition % this._slotCount;
    let targetAhead, targetBehind, distAhead, distBehind = 0;

    targetAhead = slotPosition + destinationSlotNo - currentSlotNo;
    if (targetAhead > slotPosition)
      targetBehind = targetAhead - this._slotCount;
    else {
      targetBehind = targetAhead;
      targetAhead = targetBehind + this._slotCount;
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
  frame,
  slotGap,
  slot3dOffset, 
  slotWidth, 
  slotHeight, 
  ...props
}, ref) => {
    const rootClass = utils.classJoin(`${props.className || ''} ocarousel ocarousel-${variant} ${(!frame || frame === "none") ? '' : ("frame frame-" + frame)}`);
    const orientation = (variant === OCarouselOrientation.Vertical) ? variant : OCarouselOrientation.Horizontal;
    const slotCount = (children && children.length) || 1;

    const dynamics = new OCarouselDynamics(
      slotCount, 
      slotGap,
      slot3dOffset,
      slotWidth,
      slotHeight, 
      variant === OCarouselOrientation.Vertical ? 'yz' : 'xz'
    );

    // Navigator setup
    const navigatorOpts = navigator.split(" ");
    const allowManual = navigatorOpts.some(e => e === OCarouselNavigatorMode.Manual);
    const allowAuto = navigatorOpts.some(e => e === OCarouselNavigatorMode.Auto); 
    const manualNavigator = allowManual ? { 
      mode: OCarouselNavigatorMode.Manual,
      orientation: orientation
    } : null;

    const autoNavigator = allowAuto ? { 
      mode: OCarouselNavigatorMode.Auto,
      orientation: orientation,
      off: navigatorOpts.some(e => e === "off")
    } : null;

    // States    
    const [position, setPosition] = useState(1);
    const [transform, setTransform] = useState(dynamics.initialSpaceTransform);

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
    const moveBack = (step = 1) => step === Number.MAX_VALUE ? moveFirst() : rotateBy(0 - step);
    const moveNext = (step = 1) => step === Number.MAX_VALUE ? moveLast() : rotateBy(step);

    useImperativeHandle(ref, () => ({
      first: moveFirst,
      prev: moveBack,
      next: moveNext,
      last: moveLast,
    }));

    const slots = children.map((item, idx) => (
      <div className="ocarousel-slot" key={idx} 
        style={{ width: slotWidth, height: slotHeight, transform: dynamics.initialSlotTransform(idx + 1) }}
      >
        {item}
      </div>
    ));

    return (
      <div className={rootClass}>
        {autoNavigator && <OCarouselNavigator {...autoNavigator} onBackward={moveBack} onForward={moveNext} />}
        <div className="ocarousel-inner" style={{ transform: transform, height: dynamics.getSpaceHeight(), width: dynamics.getSpaceWidth() }}>
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
  frame: "square", //false, "none", "square", "rounded", "circle"
}

export {
  OCarousel,
  OCarouselNavigatorMode,
  OCarouselOrientation,
}