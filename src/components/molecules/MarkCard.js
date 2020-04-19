import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import styled from "styled-components";

import Button from "../atoms/Button";
import Pin from "../atoms/Icon";
import Mark from "../atoms/Mark";

import newLocation from "../../assets/img/new-location.png";

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;

  .card {
    top: -85px;
  }

  .pin {
    position: relative;
    width: 40px;
    margin: 0;
    top: -105px;
  }
`;

const MarkCard = (props) => {
  return (
    <Container>
      <Mark {...props} />
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>New Location</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>Form</Card.Text>
          <Card.Link href="#">
            <Row>
              <Col md={4}>
                <Button label="Save" variant="primary" />
              </Col>
              <Col md={{ span: 4, offset: 4 }}>
                <Button label="Cancel" />
              </Col>
            </Row>
          </Card.Link>
        </Card.Body>
      </Card>
      <Pin img={newLocation} alt={"New Location"} className="pin" />
    </Container>
  );
};

export default MarkCard;
