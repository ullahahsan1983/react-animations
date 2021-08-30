import React from "react";
import '../animations.scss';

const Motion = ({className, style, children, ...props})  => {
  const classState = `motion ${props.play ? 'motion-running' : 'motion-paused'} ${props.track} ${className ? className : ''}`;

  return (
    <div className={classState} style={style}>
        {children}
    </div>
  );
}

Motion.defaultProps = {
  play: true,
  track: 'vertical', // possible values: 'vertical', 'horizontal', 'diagonal', 'orthogonal', 'box', 'circle'
};

export default Motion;