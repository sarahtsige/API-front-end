import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

class Header extends Component {
  render() {
    return (
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Country API</Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/home">
            <Button>Home</Button>
          </Link>
          <Link to="/countries">
            <Button>Countries</Button>
          </Link>
          <Link to="/regions">
            <Button>Regions</Button>
          </Link>
          <Link to="/create">
            <Button>Create</Button>
          </Link>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
