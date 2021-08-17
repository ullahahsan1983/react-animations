import React from "react";
import "./Style.css";

const WorkInProgress = (props)  => {  
  const className = `${props.variant} ${props.vertical ? 'vertical' : ''}`;
  return (
    <div className="work-in-progress"> 
        <span className={className}></span>
    </div>
  );
}

WorkInProgress.defaultProps = {
  vertical: false,
  variant: 'coming-soon' // possible values: under-construction, coming-soon
};

export default WorkInProgress;
