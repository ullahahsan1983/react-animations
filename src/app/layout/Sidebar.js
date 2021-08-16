import React from "react";
import SideNav from "../../libs/widgets/SideNav/SideNav";
import ExampleCollection from "../examples/ExampleCollection";

const Sidebar = (props)  => {
  const items = Object.keys(ExampleCollection).map((key, index) =>
  {
    return { navKey: key, caption: `${key} Example` };
  });

  const onNavigate = (idx) => props.onNavigate(items[idx].navKey);

  return (
    <div className="sidebar">
      <SideNav items={items} variant="flush" itemVariant="light" onNavigate={onNavigate}></SideNav>
    </div>
  );
}

export default Sidebar;
