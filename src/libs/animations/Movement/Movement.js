import React from "react";
import './Style.css';

const Movement = ({className, style, children, ...props})  => {
  const classState = `movement ${props.play ? 'running' : 'paused'} ${props.direction} ${className ? className : ''}`;

  return (
    <div className={classState} style={style}>
        {children}
    </div>
  );
}

Movement.defaultProps = {
  play: true,
  direction: 'vertical', // possible values: 'vertical', 'horizontal', 'diagonal', 'orthogonal', 'box', 'circle'
};

export default Movement;
