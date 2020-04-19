import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Map from "../../assets/img/map.gif";

function Loading() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <img src={Map} alt="Loading Map" />
        </Col>
      </Row>
    </Container>
  );
}

export default Loading;
