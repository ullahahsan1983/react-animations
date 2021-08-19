import React from "react";
import * as utils from "../../utils";
import "./Style.css";

const SectionTitle = (props) => {
  return (
    <div className="split-section-title">
      <span>{props.children}</span>
    </div>
  );
}

const LeftSection = ({ children, className, ...props}) => {
  const classes = `split-section left ` + (className ? className : '');
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

const RightSection = ({ children, className, ...props}) => {
  const classes = `split-section right ${className ? className : ''}`;
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

const SplitPanel = ({ children, className, ...props }) => {
  const classes = `split-panel ${className ? className : ''}`;
  const left = utils.findChildrenByType(children, "LeftSection");
  const right = utils.findChildrenByType(children, "RightSection");
  return (
    <>
      <div className={classes} {...props}>
        {left}
        {right}
        {!left && !right && children}
      </div>
    </>
  );
}

export default Object.assign(SplitPanel, {
  Left: LeftSection,
  Right: RightSection,
  SectionTitle: SectionTitle
});
