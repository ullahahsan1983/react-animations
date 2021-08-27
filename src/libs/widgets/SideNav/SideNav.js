import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";

/*const SubMenu = (props) => {
  return (
    <Accordion>

    </Accordion>
  );
};*/

const SideNavItem = ({itemkey, caption, onNavigate, ...props}) => {
  const onClick = () => onNavigate(itemkey);
  return (
    <ListGroup.Item action onClick={onClick} eventKey={itemkey} {...props}>{caption}</ListGroup.Item>
  );
}

const SideNav = (props)  => {
  const [activeKey, setActiveKey] = useState(0);
  const onNavigate = (index) => { 
    setActiveKey(index);
    props.onNavigate(index);
  };
  const items = props.items.map((item, index) => (
    <SideNavItem key={index} variant={props.itemVariant} itemkey={index} caption={item.caption} onNavigate={onNavigate} />
  ));
  return (
    <ListGroup variant={props.variant} className="flex-column side-nav" activeKey={activeKey} style={props.style}>
        {items}
    </ListGroup>
  );
}

export default SideNav;
