import React from "react";
import { Button as Option } from "react-bootstrap";

const Button = ({ label, onClickAction, variant }) => {
  return (
    <Option variant={variant} onClick={onClickAction}>
      {label}
    </Option>
  );
}

export default Button;
