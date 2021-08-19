import React from "react";
import * as utils from "../../utils";
import "./Style.css";

const LeftSection = ({ children, name, className, ...props}) => {
  const classes = `split-section ${name} ` + (className ? className : '');
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

LeftSection.defaultProps = {
  name: 'left'
};

const RightSection = ({ children, name, className, ...props}) => {
  const classes = `split-section ${name} ` + (className ? className : '');
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

RightSection.defaultProps = {
  name: 'right'
};

const SplitPanel = ({ children, className, ...props }) => {
  const classes = `split-panel ` + (className ? className : '');
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
  Right: RightSection
});
