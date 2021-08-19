import React, { useState } from "react";
import './Style.css';

const FlipFront = (props) => {
  return (
    <div className='flip-front'>
      {props.children}
    </div>
  );
}

const FlipBack = (props) => {
  return (
    <div className='flip-back'>
      {props.children}
    </div>
  );
}

const Flip = (props)  => {
  const style = {
    width: props.width,
    height: props.height
  };

  const initialClassName = `flip ${props.variant} ${props.event}${props.vertical ? ' vertical': ' horizontal'}`;

  const [classState, setClass] = useState(initialClassName);
  const [isClicked, setClicked] = useState(false);

  const onClick = () => {
    const clicked = !isClicked;
    setClicked(clicked);
    if (props.event === "click") {
      setClass(clicked ? (initialClassName + " clicked") : initialClassName);
    }
  }
  
  return (
    <div className={classState} style={style} onClick={onClick}>
      <div className="flip-inner">
        {props.children}
      </div>
    </div>
  );
}

Flip.defaultProps = {
  variant: 'swing', // possible values are 'flat', 'swing', 'slide'
  vertical: false,
  event: 'hover' // possible values are 'click', 'hover'
};

export default Object.assign(Flip, {
  Front: FlipFront,
  Back: FlipBack
});
