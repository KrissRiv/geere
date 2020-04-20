import React from "react";
import Navbar from "react-bootstrap/Navbar";

import Logo from "../atoms/Icon";
import sourceLogo from "../../assets/img/geere-logo.png";

const Header = () => {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="#home">
        <Logo img={sourceLogo} alt={"Geere Locations"} className="logo" />{" "}
      </Navbar.Brand>
      <h2 className="title">Geere</h2>
    </Navbar>
  );
}

export default Header;
