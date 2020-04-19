import React from "react";
import { Button as Option } from "react-bootstrap";

function Button({ label, onClickAction, variant }) {
  return (
    <Option variant={variant} onClick={onClickAction}>
      {label}
    </Option>
  );
}

export default Button;
