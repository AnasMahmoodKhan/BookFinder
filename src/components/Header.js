import React from "react";
import Navbar from "react-bootstrap/Navbar";

const Header = () => (
  <header id="app-header" data-test="Header">
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/" data-test="Brand">Book Finder</Navbar.Brand>
    </Navbar>
  </header>
);
export default Header;
