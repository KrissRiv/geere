import React from "react";
import { Button as Option } from "react-bootstrap";

const Button = ({ disabled, label, onClickAction, type, variant }) => {
  return (
    <Option variant={variant} onClick={onClickAction} type={type} disabled={disabled} >
      {label}
    </Option>
  );
}

export default Button;
