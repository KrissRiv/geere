import React from "react";
import Navbar from "react-bootstrap/Navbar";

import Logo from "../atoms/Icon";
import sourceLogo from "../../img/geere-logo.png";

function Header() {
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
