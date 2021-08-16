import React, { useState } from "react";
import SideNav from "../../libs/widgets/SideNav/SideNav";
import ExampleFlip from "../examples/ExampleFlip";

const Sidebar = (props)  => {
  const [items] = useState([
    { caption: "Flip Example", content: <ExampleFlip /> },
    { caption: "Example 2", content: <div /> },
    { caption: "Example 3", content: <div /> },
  ]);

  const onNavigate = (idx) => props.onNavigate(items[idx].content);

  return (
    <div className="sidebar">
      <SideNav items={items} variant="flush" itemVariant="light" onNavigate={onNavigate}></SideNav>
    </div>
  );
}

export default Sidebar;
