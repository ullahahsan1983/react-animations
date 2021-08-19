import React, { useState } from "react";
import './Style.css';

const PopIn = ({className, style, children, ...props})  => {
  
  const initialClassName = `popin-container ${props.position} ${props.event} ${className ? className : ''}`;

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
      <div className="popin-container-inner">
        {children}
      </div>
    </div>
  );
}

PopIn.defaultProps = {
  position: 'bottom', // possible values: 'top', 'left', 'bottom', 'right'
  event: 'hover' // possible values are 'click', 'hover'
};

export default PopIn;
