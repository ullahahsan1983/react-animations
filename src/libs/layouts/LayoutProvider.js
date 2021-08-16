import React from "react";
import LayoutCollection from "./LayoutCollection";

const Section = (props)  => {  
  return (
    <>
        {props.children}
    </>
  );
}

const LayoutProvider = ({children, ...props})  => {
  let sections = {};
  children.forEach(item => {
    if(item.props && item.props.name && item.props.children)
      sections[item.props.name] = item.props.children;
  });

  const MissingLayout = () => <div className="text-danger">
    No layout registered for {props.variant}
  </div>;

  const Layout = LayoutCollection[props.variant || 'classic'] || MissingLayout;

  return (
    <Layout {...sections} {...props} />
  );
}

export default Object.assign(LayoutProvider, {
  Section: Section
});
