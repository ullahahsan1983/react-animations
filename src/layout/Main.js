import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import Sidebar from '../layout/Sidebar';

const Main = (props)  => {
  const [example, selectExample] = useState();
  return (
    <Container fluid style={{display: "flex"}}>
      <Sidebar onNavigate={(e) => selectExample(e)} />
      <Container fluid>
        <Row>
          <Col>{example}</Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Main;
