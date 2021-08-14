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
    <ListGroup.Item action onClick={onClick} eventKey={index} {...props}>{caption}</ListGroup.Item>
  );
}

const SideNav = (props)  => {
  const items = props.items.map((item, index) => (
    <SideNavItem key={index} index={index} variant={props.variant} onNavigate={props.onNavigate} {...item} />
  ));
  return (
    <ListGroup className="flex-column" activeKey="0" style={props.style}>
        {items}
    </ListGroup>
  );
}

export default SideNav;
