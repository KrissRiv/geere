import React from "react";
import styled from "styled-components";

import Map from "../../assets/img/map.gif";

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;

  img {
    position: absolute;
    top: calc(50% - 30px);
  }
`;

function Loading() {
  return (
    <Container>
      <img src={Map} alt="Loading Map" />
    </Container>
  );
}

export default Loading;
