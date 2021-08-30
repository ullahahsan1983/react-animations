import React from "react";
import * as utils from "../../utils";
import "./osplitpanel.scss";

const SectionTitle = (props) => {
  return (
    <div className="osplit-section-title">
      <span>{props.children}</span>
    </div>
  );
}

const LeftSection = ({ children, className, ...props}) => {
  const classes = `osplit-section left ` + (className ? className : '');
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

const RightSection = ({ children, className, ...props}) => {
  const classes = `osplit-section right ${className ? className : ''}`;
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

const OSplitPanel = ({ children, className, ...props }) => {
  const classes = `osplit-panel ${className ? className : ''}`;
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

export default Object.assign(OSplitPanel, {
  Left: LeftSection,
  Right: RightSection,
  SectionTitle: SectionTitle
});
