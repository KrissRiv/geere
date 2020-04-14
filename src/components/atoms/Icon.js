import React from "react";

function Icon(props) {
  const { img, alt, className } = props;
  return <img src={img} alt={alt} className={className} />;
}

export default Icon;
