import React from "react";
import { Accordion, Nav, ListGroup } from "react-bootstrap";

const SubMenu = (props) => {
  return (
    <Accordion>

    </Accordion>
  );
};

const SideNavItem = ({index, caption, onNavigate, ...props}) => {
  const onClick = () => onNavigate(index);
  return (
    <ListGroup.Item action onClick={onClick} eventKey={index+1} {...props}>{caption}</ListGroup.Item>
  );
}

const SideNav = (props)  => {
  const items = props.items.map((item, index) => (
    <SideNavItem key={index} index={index} variant={props.itemVariant} onNavigate={props.onNavigate} {...item} />
  ));
  return (
    <ListGroup variant={props.variant} className="flex-column side-nav" activeKey="1" style={props.style}>
        {items}
    </ListGroup>
  );
}

export default SideNav;
