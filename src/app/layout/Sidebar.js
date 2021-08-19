import React from "react";
import { Card } from "react-bootstrap";
import SideNav from "../../libs/widgets/SideNav/SideNav";
import ExampleCollection from "../examples/ExampleCollection";

const Sidebar = (props)  => {
  const items = Object.keys(ExampleCollection).map((key, index) =>
  {
    return { navKey: key, caption: `${key}` };
  });

  const onNavigate = (idx) => props.onNavigate(items[idx].navKey);

  const className = `sidebar ${props.right ? 'right' : 'left'}`;
  return (
    <div className={className}>
      <Card bg="secondary" text="light">
        <Card.Header>Examples</Card.Header>
        <SideNav items={items} variant="flush" itemVariant="dark" onNavigate={onNavigate}></SideNav>
      </Card>
    </div>
  );
}

export default Sidebar;
