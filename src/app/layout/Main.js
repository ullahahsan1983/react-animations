import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import Sidebar from './Sidebar';
import ExampleContainer from './ExampleContainer';
import About from "../../favorites/About/About";

const Main = (props)  => {
  const [example, selectExample] = useState();
  return (
    <Container fluid className="main">
      <Sidebar onNavigate={(e) => selectExample(e)} />
      <ExampleContainer>
        <Row>
          <Col>{example}</Col>
        </Row>
      </ExampleContainer>
      <About />
    </Container>
  );
}

export default Main;
