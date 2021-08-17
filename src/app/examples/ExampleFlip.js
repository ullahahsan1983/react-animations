import React from "react";
import { Image, Row, Col, Figure } from "react-bootstrap";
import Flip from "../../libs/transitions/Flip/Flip";
import Male from "./images/male-avatar.png";
import Female from "./images/female-avatar.png";

const ExampleFlip = ()  => {
  return (
    <>
    <Row>
      <Col>
        <Figure style={{width: '200px'}}>
          <Flip width='200px' height='200px'>
            <Flip.Front>
              <Image src={Male} thumbnail />
            </Flip.Front>
            <Flip.Back>
              <Image src={Female} thumbnail /> 
            </Flip.Back>
          </Flip>
          <Figure.Caption>
            Quick Flip        
          </Figure.Caption>
        </Figure>
      </Col>
      <Col>
        <code>
          Coming soon
        </code>
      </Col>
    </Row>
    <Row>
      <Col>
        <Figure style={{width: '300px'}}>
          <Flip swing width='300px' height='300px'>
            <Flip.Front>
              <Image src={Female} thumbnail /> 
            </Flip.Front>
            <Flip.Back>
              <Image src={Male} thumbnail /> 
            </Flip.Back>
          </Flip>
          <Figure.Caption>
            Swing Flip        
          </Figure.Caption>
        </Figure>
      </Col>
      <Col>
        <code>
          Coming soon
        </code>
      </Col>
    </Row>
    </>
  );
}

export default ExampleFlip;