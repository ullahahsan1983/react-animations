import React from "react";
import '../shapes.scss';

const Shape = (props)  => {
  const className = `shape shape-${props.form}`;

  return (
    <figure style={{minWidth: '220px', minHeight: '220px'}}>
      <figcaption className="text-muted">{props.title || props.form.toUpperCase()}</figcaption>
      <span className={className} {...props}></span>
    </figure>
  );
}

Shape.defaultProps = {
  fill: 'false', // possible values: false, any color code
  form: 'square', // possible values: 'circle', 'oval'
};

export default Shape;
