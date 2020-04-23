import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Accordion, Button, Card, ListGroup } from "react-bootstrap";
import styled from "styled-components";

import { GetAllLocations } from "../../redux/actions/actions";

const Container = styled.section`
  width: 250px;
  position: fixed;
  right: 60px;
  bottom: 10px;

  .card{
    max-height: 394px;
  }

  .collapse {
    overflow: auto;
  }

  .card-header {
    padding: 0.15rem 0;
  }

  .card-body {
    padding: 0.25rem;
  }
`;

const MarkList = ({ locations }) => {
  const dispatch = useDispatch();
  const [textList, setTextList] = useState("Expand");
  const [isExpanded, setExpanded] = useState(false);

  useEffect(() => {
    dispatch(GetAllLocations());
  }, []);

  const handleTextList = () => {
    setTextList(isExpanded ? "Expand" : "Collapse");
    setExpanded(!isExpanded);
  };

  const getMarkForList = () => {
    return locations.map((element, index) => {
      return <ListGroup.Item key={index}>{element.name}</ListGroup.Item>;
    });
  };

  return (
    <Container>
      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              variant="link"
              eventKey="0"
              onClick={handleTextList}
            >
              {textList} List
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <ListGroup variant="flush">
                {locations && locations.length > 0 && getMarkForList()}
              </ListGroup>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Container>
  );
};

export default MarkList;
