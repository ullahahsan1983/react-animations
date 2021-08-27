import React from "react";
import '../shapes.scss';

const CompositeShape = ({children, ...props}) => {
  return (
    <div {...props}>
      {children}
    </div>
  );
}

const Shape = ({children, ...props})  => {
  const className = `shape shape-${props.form} ${children ? 'shape-composite': ''} ${props.shadow ? 'shadowy': ''}`;

  return (
    <figure>
      <figcaption className="text-muted">{props.title || props.form.toUpperCase()}</figcaption>
      {children && <CompositeShape className={className} {...props}>{children}</CompositeShape>}
      {!children && <span className={className} {...props}></span>}
    </figure>
  );
}

Shape.defaultProps = {
  form: 'square', // possible values: 'circle', 'oval' etc
  shadow: false
};

export default Shape;
