import React from "react";
import "./Style.scss";

const ClassicLayout = (props)  => {    
  const className = `layout classic ${props.className}`;
  return (
    <div className={className}>
      <div className="header-section">
        {props.header}
      </div>
      <div className="mid-section">
         <div className="left-section">{props.left}</div>
         <div className="main-section">{props.main}</div>
         <div className="right-section">{props.right}</div>
      </div>
      <div className="footer-section">
        {props.footer}
      </div>
    </div>
  );
}

export default ClassicLayout;