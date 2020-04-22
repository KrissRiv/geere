import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Card, Col, Form, Image } from "react-bootstrap";
import styled from "styled-components";

import Button from "../atoms/Button";
import Pin from "../atoms/Icon";
import Mark from "../atoms/Mark";
import { SetNewLocation } from "../../redux/actions/actions";

import PinNewLocation from "../../assets/img/new-location.png";

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;

  .row {
    padding-right: 20px;
  }

  .card {
    bottom: calc(50% - 308px);
  }

  .form-control {
    margin: 15px 0;
  }

  .form-group {
    margin-bottom: 0;
  }

  .pin {
    position: relative;
    width: 40px;
    margin: 0;
    bottom: calc(50% - 292px);
  }
`;

const MarkCard = (props) => {
  const photoLocation = `https://maps.googleapis.com/maps/api/streetview?location=${props.position.lat()},${props.position.lng()}&size=256x256&key=AIzaSyD30_JunAh0N7lBhJKpbeLDdF7FhyvuUxY&signature=21fXPzD-w52lHVVrDgB0IBEm8hQ=`;
  const dispatch = useDispatch();
  const [newLocation, setNewLocation] = useState({});
  const [nameLocation, setNameLocation] = useState("");
  const [validated, setValidated] = useState(false);

  const handleSaveSubmit = (e) => {
    e.preventDefault();
    dispatch(
      SetNewLocation({
        name: nameLocation,
        position: { lat: props.position.lat(), lng: props.position.lng() },
        photo: photoLocation,
      })
    );
  };

  const validatedForm = () => {
    setValidated(nameLocation.length >= 3 && true);
  };

  useEffect(() => {
    validatedForm();
  }, [nameLocation]);

  return (
    <Container>
      <Mark {...props} />
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Form noValidate validated={validated} onSubmit={handleSaveSubmit}>
            <Form.Group controlId="formNewLocation">
              <Card.Title>New Location</Card.Title>
              <Image src={photoLocation} thumbnail />
              <Form.Text className="text-muted">
                Coordinates: lat: {props.position.lat()}, lng:{" "}
                {props.position.lng()}
              </Form.Text>
              <Form.Control
                required
                placeholder="Enter location name"
                value={nameLocation}
                onChange={(e) => setNameLocation(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a location name, minimun 3 characters
              </Form.Control.Feedback>
              <Form.Row>
                <Col md={4}>
                  <Button
                    label="Save"
                    variant="primary"
                    type="submit"
                    disabled={!validated}
                  />
                </Col>
                <Col md={{ span: 4, offset: 4 }}>
                  <Button label="Cancel" type="reset" variant="secondary" />
                </Col>
              </Form.Row>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
      <Pin img={PinNewLocation} alt={"New Location"} className="pin" />
    </Container>
  );
};

export default MarkCard;
