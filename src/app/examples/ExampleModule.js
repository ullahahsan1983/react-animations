import React from "react";
import * as utils from "../../libs/utils";
import { Row, Col, Card, CardGroup } from "react-bootstrap";
import WorkInProgress from "../../favorites/WorkInProgress/WorkInProgress";
import SplitPanel from "../../libs/widgets/SplitPanel/SplitPanel";

const Demonstration = (props) => {
  return (
    <>
      {props.children}
    </>
  );
}

const TryIt = (props) => {
  return (
    <>
      {props.children}
    </>
  );
}

const ExampleItem = ({children, ...props}) => {  
  const demo1 = utils.findChildrenByType(children, "Demonstration", 1);
  const demo2 = utils.findChildrenByType(children, "Demonstration", 2);
  const tryIt = utils.findChildrenByType(children, "TryIt");

  //console.log(demo1, demo2, tryIt);
  const mode = demo1 && demo2 ? 'compare' : (demo1 && tryIt ? 'tryit' : 'single');

  let template;
  switch(mode)
  {
    case 'compare':
      template = 
      <SplitPanel>
        <SplitPanel.Left className="demo-content">
          {demo1}            
        </SplitPanel.Left>
        <SplitPanel.Right className="demo-content">
          {demo2}
        </SplitPanel.Right>
      </SplitPanel>;
      break;
    case 'tryit':
      template = 
      <SplitPanel>
        <SplitPanel.Left className="demo-content">
          {demo1 || <div>No content provided</div>}            
        </SplitPanel.Left>
        <SplitPanel.Right className="tryit">
          {tryIt || <WorkInProgress />}
        </SplitPanel.Right>
      </SplitPanel>;
      break;
    case 'single':
    default:
      template = <SplitPanel className="demo-content">{demo1}</SplitPanel>;
      break;    
  }
  
  return (
    <Row>
      <Col> 
        <Card>
          <Card.Header as="h5">{props.title}</Card.Header>
          <Card.Body>
            {props.description && <Card.Subtitle className="text-muted">{props.description}</Card.Subtitle>}
            {template}
          </Card.Body>
        </Card>     
      </Col>
    </Row>
  );
}

const ExampleModule = (props)  => {
  return (
    <>
        {props.children}
    </>
  );
}

export default Object.assign(ExampleModule, {
  Item: Object.assign(ExampleItem, {
    Demo: Demonstration,
    TryIt: TryIt
  })
});
