import React, { useState } from "react";
import { ListGroup, Accordion } from "react-bootstrap";

const SideNav = ({items, variant, itemVariant, defaultItem, navigate, ...props})  => {
  const [activeKey, setActiveKey] = useState(defaultItem);
  const onNavigate = (seq) => { 
    setActiveKey(seq);
    navigate(seq);
  };
  
  let list = [];
  let defaultAccordionKey = null;
  for(const index in items) {
    const { groupName, order, header, caption, ...item } = items[index];
    
    if(!groupName) {
      list.push
      (
      <ListGroup.Item variant={itemVariant} key={order} action onClick={() => onNavigate(order)} eventKey={order} {...item} style={{padding: 0}}>
        {caption}
      </ListGroup.Item>
      );
    } else if (header) {
      const childs = items
        .filter(e => e.groupName == groupName && !e.header)
        .map((value, idx) => 
        {
          const { groupName: group, order: sequence, ...child} = value;
          if (sequence == defaultItem) {
            defaultAccordionKey = order;
          }
          return (
            <ListGroup.Item variant={itemVariant} key={sequence} action onClick={() => onNavigate(sequence)} eventKey={sequence} {...child}>
              {child.caption}
            </ListGroup.Item>
          );
        });
      list.push
      (
        <ListGroup.Item key={order} style={{padding: 0}}>
          <Accordion defaultActiveKey={defaultAccordionKey} flush> 
            <Accordion.Item eventKey={order}>
              <Accordion.Header>{caption}</Accordion.Header>
              <Accordion.Body style={{padding: 0}}>
                {childs}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </ListGroup.Item>
      );
    }
  }
  
  return (
    <ListGroup variant={variant} className="flex-column side-nav" activeKey={activeKey} {...props}>
        {list}
    </ListGroup>
  );
}

export default SideNav;
