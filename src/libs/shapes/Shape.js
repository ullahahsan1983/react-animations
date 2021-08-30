import React from "react";
import '../shapes.scss';
import * as utils from "../utils";

const CompositeShape = ({children, ...props}) => {
  return (
    <div {...props}>
      {children}
    </div>
  );
}

const Shape = ({children, shadow, ...props})  => {
  const className = utils.classJoin(`shape shape-${props.form} ${children ? 'shape-composite': ''} ${shadow ? 'shadowy': ''}`);

  return (
    <figure>
      <figcaption className="text-muted">{props.title || props.form.toUpperCase()}</figcaption>
      {children && <CompositeShape className={className} {...props}>{children}</CompositeShape>}
      {!children && <span className={className} {...props}></span>}
    </figure>
  );
}

Shape.defaultProps = {
  form: 'square' // possible values: 'circle', 'oval' etc
};

export default Shape;
