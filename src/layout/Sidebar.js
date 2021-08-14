import React, { useState } from "react";
import SideNav from "../components/SideNav/SideNav";
import ExampleFlip from "../examples/ExampleFlip";

const Sidebar = (props)  => {
  const [items, setItems] = useState([
    { caption: "Flip Example", content: <ExampleFlip /> },
    { caption: "Example 2", content: <ExampleFlip /> },
    { caption: "Example 3", content: <ExampleFlip /> },
  ]);

  const onNavigate = (idx) => props.onNavigate(items[idx].content);
  return (
    <SideNav items={items} variant="dark" onNavigate={onNavigate} style={{width: "300px"}}></SideNav>
  );
}

export default Sidebar;
