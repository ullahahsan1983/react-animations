import React from "react";
import "./Style.scss";

const ModernLayout = (props)  => {    
  const className = `layout modern ${props.className}`;
  return (
    <div className={className}>
      <div className="left-section">
        {props.left}
      </div>
      <div className="mid-section">
         <header className="header-section">{props.header}</header>
         <div className="main-section">{props.main}</div>
         <footer className="footer-section">{props.footer}</footer>
      </div>
      <div className="right-section">
        {props.right}
      </div>
    </div>
  );
}

export default ModernLayout;