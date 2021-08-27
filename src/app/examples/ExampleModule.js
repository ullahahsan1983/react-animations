import React from "react";
import * as utils from "../../libs/utils";
import { Row, Col, Card } from "react-bootstrap";
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

const ActionBlock = (props) => {
  return <>{props.children}</>;
}

const ExampleItem = ({children, className, ...props}) => {  
  const demo1 = utils.findChildrenByType(children, Demonstration.name, 1);
  const demo2 = utils.findChildrenByType(children, Demonstration.name, 2);
  const tryIt = utils.findChildrenByType(children, TryIt.name);
  const actionBlock1 = utils.findChildrenByType(children, ActionBlock.name, 1);
  const actionBlock2 = utils.findChildrenByType(children, ActionBlock.name, 2);

  const mode = demo1 && demo2 ? 'compare' : (demo1 && tryIt ? 'tryit' : 'single');

  let panelClassName = `${className || ''}`;

  let template;
  switch(mode)
  {
    case 'compare':
      template = 
      <SplitPanel className={panelClassName}>
        <SplitPanel.Left className="demo-content">
          {demo1.props && demo1.props.title &&
            <SplitPanel.SectionTitle>{demo1.props.title}</SplitPanel.SectionTitle>
          }
          {demo1}            
        </SplitPanel.Left>
        <SplitPanel.Right className="demo-content">
          {demo2.props && demo2.props.title &&
            <SplitPanel.SectionTitle>{demo2.props.title}</SplitPanel.SectionTitle>
          }
          {demo2}
        </SplitPanel.Right>
      </SplitPanel>;
      break;
    case 'tryit':
      template = 
      <SplitPanel className={panelClassName}>
        <SplitPanel.Left className="demo-content">
          {demo1.props && demo1.props.title &&
            <SplitPanel.SectionTitle>{demo1.props.title}</SplitPanel.SectionTitle>
          }
          {demo1 || <div>No content provided</div>}            
        </SplitPanel.Left>
        <SplitPanel.Right className="tryit">
          {tryIt.props && tryIt.props.title &&
            <SplitPanel.SectionTitle>{tryIt.props.title}</SplitPanel.SectionTitle>
          }
          {tryIt || <WorkInProgress />}
        </SplitPanel.Right>
      </SplitPanel>;
      break;
    case 'single':
    default:
      panelClassName += " demo-content";
      template = <SplitPanel className={panelClassName}>{demo1}</SplitPanel>;
      break;    
  }

  const headerClass = `flex-r ${actionBlock1 || actionBlock2 ? 'justify-content-between' : 'justify-content-center'}`;
  
  return (
    <Row>
      <Col> 
        <Card>
          <Card.Header className={headerClass}>
            {actionBlock1 && 
            <span className='example-actions left'>
              {actionBlock1}     
            </span>
            }
            <h5>{props.title}</h5>
            {actionBlock2 && 
            <span className='example-actions right'>
              {actionBlock2}     
            </span>
            }
          </Card.Header>
          <Card.Body>
            {props.description && <Card.Subtitle className="text-muted">{props.description}</Card.Subtitle>}
            {template}
          </Card.Body>
        </Card>     
      </Col>
    </Row>
  );
}

const ExampleModule = ({children, className, description, ...props})  => {
  const classes = `example-module ${className || ''}`;
  return (
    <div className={classes} {...props}>
      {description && <div className="text-muted description sticky">{description}</div>}
      {children}
    </div>
  );
}

export default Object.assign(ExampleModule, {
  Item: Object.assign(ExampleItem, {
    Demo: Demonstration,
    TryIt: TryIt,
    Actions: ActionBlock
  })
});
