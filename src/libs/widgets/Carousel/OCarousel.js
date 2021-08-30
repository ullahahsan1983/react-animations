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

const OCarouselNavigator = ({ onBackward, onForward, options }) => {  
  const [duration, setDuration] = useState(0);
  const [run, setRun] = useState(options.mode == OCarouselNavigatorMode.Auto);

  useEffect(() => {
    if (options.mode != OCarouselNavigatorMode.Auto || !run)
    {
      setDuration(0);
      return false;
    }
    const timer = setTimeout(() => {
      onForward();
      setDuration(duration + 1);
    }, 2000);
    return () => clearTimeout(timer);
  }, [duration, run, options.mode]);

  return (
    <>
    {(options.mode == OCarouselNavigatorMode.Manual) && 
      <ButtonGroup aria-label="Previous/Next">
        <Button variant="secondary" onClick={onBackward}>&lt;</Button>
        <Button variant="secondary" onClick={onForward}>&gt;</Button>
      </ButtonGroup>
    }
    {(options.mode == OCarouselNavigatorMode.Auto) && 
      <OToggleSwitch onSwitch={(on) => setRun(on)} initialState={run} labelOn="Auto" labelOff="Paused" style={{width: "90px"}} />
    }
    </>
  );  
}

OCarouselNavigator.defaultProps = {
  options: { 
    mode: OCarouselNavigatorMode.Manual, 
    orientation: OCarouselOrientation.Horizontal
  }
};

const OCarousel = React.forwardRef(({children, navigator, variant, ...props}, ref) => {
    const rootClass = utils.classJoin(`ocarousel ocarousel-${variant}`);
    const orientation = variant == OCarouselOrientation.Vertical ? variant : OCarouselOrientation.Horizontal;

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

    const [position, setPosition] = useState(1);
    const [transform, setTransform] = useState("translateZ(-288px)");

    const rotateBy = (unit) => {
      let i = position + unit;
      const deg = (i - 1) / 9 * -360;
      setPosition(i);
      setTransform(`translateZ(-288px) rotateY(${deg}deg)`);
    };

    const rotateNearest = (destinationSlot) => {
      const currentSlot = position % 9;
      let targetAhead, targetBehind, distAhead, distBehind = 0;

      targetAhead = position + destinationSlot - currentSlot;
      if (targetAhead > position)
        targetBehind = targetAhead - 9;
      else {
        targetBehind = targetAhead;
        targetAhead = targetBehind + 9;
      }

      distAhead = targetAhead - position;
      distBehind = position - targetBehind;  
      
      if(distAhead <= distBehind)
        rotateBy(distAhead);
      else
        rotateBy(0 - distBehind);
    };

    useImperativeHandle(ref, () => ({
      first() { rotateNearest(1); },
      prev(unit) { rotateBy(0 - (unit || 1)); },
      next(unit) { rotateBy(unit || 1); },
      last() { rotateNearest(9); },
    }), [position, transform]);
    
    return (
      <div className={rootClass}>
        {autoNavigator && <OCarouselNavigator options={autoNavigator} onBackward={() => rotateBy(-1)} onForward={() => rotateBy(1)} />}
        <div className="ocarousel-inner" style={{ transform: transform }}>
          <div className="ocarousel-slot">1</div>
          <div className="ocarousel-slot">2</div>
          <div className="ocarousel-slot">3</div>
          <div className="ocarousel-slot">4</div>
          <div className="ocarousel-slot">5</div>
          <div className="ocarousel-slot">6</div>
          <div className="ocarousel-slot">7</div>
          <div className="ocarousel-slot">8</div>
          <div className="ocarousel-slot">9</div>
        </div>
        {manualNavigator && <OCarouselNavigator options={manualNavigator} onBackward={() => rotateBy(-1)} onForward={() => rotateBy(1)} />}
      </div>
    );
});

OCarousel.defaultProps = {
  navigator: OCarouselNavigatorMode.Manual,
  variant: "horizontal"
}

export {
  OCarousel,
  OCarouselNavigatorMode,
  OCarouselOrientation,
}