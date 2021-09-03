import React from "react";
import { Card } from "react-bootstrap";
import SideNav from "../../libs/widgets/SideNav/SideNav";
import { getExampleTree } from "../examples/ExampleCollection";

const tree = getExampleTree();

const Sidebar = ({navigate, ...props})  => {
  const onNavigate = (seq) => navigate(tree.find(e => e.order === seq).path);

  const className = `sidebar ${props.right ? 'right' : 'left'}`;
  return (
    <div className={className}>
      <Card bg="secondary" text="light">
        <Card.Header>Examples</Card.Header>
        <SideNav items={tree} variant="flush" itemVariant="dark" defaultItem="2" navigate={onNavigate}></SideNav>
      </Card>
    </div>
  );
}

export default Sidebar;
