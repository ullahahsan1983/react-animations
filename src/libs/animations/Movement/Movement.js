import React from "react";
import './Style.css';

const Movement = ({className, style, children, ...props})  => {
  const classState = `movement ${props.direction} ${className ? className : ''}`;

  return (
    <div className={classState} style={style}>
        {children}
    </div>
  );
}

Movement.defaultProps = {
  direction: 'vertical', // possible values: 'vertical', 'horizontal', 'diagonal', 'orthogonal'
};

export default Movement;
