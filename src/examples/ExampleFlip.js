import React from "react";
import { Image, Row, Col, Figure } from "react-bootstrap";
import Flip from "../components/transitions/Flip/Flip";
import Male from "./images/male-avatar.png";
import Female from "./images/female-avatar.png";
import FigureCaption from "react-bootstrap/esm/FigureCaption";

const ExampleFlip = ()  => {
  return (
    <Row style={{display: 'flex'}}>
      <Col>
        <Figure style={{width: '200px'}}>
          <Flip  style={{width: '200px', height: '200px'}} >
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
        <Figure style={{width: '300px'}}>
          <Flip swing style={{width: '300px', height: '300px'}}>
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
    </Row>
  );
}

export default ExampleFlip;
