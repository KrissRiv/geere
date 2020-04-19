import React from "react";
import { Marker } from "google-maps-react";

import markPin from "../../assets/img/1854573111578889029-128.png";

const Mark = ({ google, position }) => {
  return (
    <Marker
      name={"Dolores park"}
      id={1}
      icon={{
        url: markPin,
        anchor: new google.maps.Point(32, 32),
        scaledSize: new google.maps.Size(64, 64),
      }}
      position={position}
    />
  );
};

export default Mark;
