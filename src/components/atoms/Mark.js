import React from "react";
import { Marker } from "google-maps-react";

const Mark = (props) => {
  console.log(props)
  return <Marker id={props.id} {...props} />;
};

export default Mark;
