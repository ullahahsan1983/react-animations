import React from "react";
import '../animations.scss';

const Motion = ({className, style, children, ...props})  => {
  const classState = `motion ${props.play ? 'running' : 'paused'} ${props.direction} ${className ? className : ''}`;

  return (
    <div className={classState} style={style}>
        {children}
    </div>
  );
}

Motion.defaultProps = {
  play: true,
  direction: 'vertical', // possible values: 'vertical', 'horizontal', 'diagonal', 'orthogonal', 'box', 'circle'
};

export default Motion;