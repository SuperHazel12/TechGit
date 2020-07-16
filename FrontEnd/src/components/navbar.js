import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  NavDropdown,
  Navbar,
  FormControl,
  Form,
} from "react-bootstrap";
import logo from "../assets/logo.png";

function navbar() {
  return (
    <>
      <Navbar style={navbarstyle}>
        <Navbar sticky="top" />
        <img alt="" src={logo} style={techlogo} />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ul class="nav nav-pills nav-fill">
          <li className="nav-item">
            <a className="nav-link active" href="#latest" style={selected}>
              Latest
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#browse" style={notselected}>
              Browse
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact" style={notselected}>
              Contact
            </a>
          </li>
        </ul>
        <Navbar.Collapse className="justify-content-center">
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              style={search}
            />
          </Form>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <NavDropdown title="Dropdown">
            <NavDropdown.Item href="#action/3.1">View Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Edit Profile
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Log Out</NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
          <Navbar.Text></Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default navbar;

const navbarstyle = {
  backgroundColor: "#00A037",
};

const selected = {
  fontWeight: "bold",
  color: "black",
  backgroundColor: "white",
  borderWidth: 1,
  borderColor: "#000",
  borderRadius: 14,
};

const notselected = {
  fontWeight: "bold",
  color: "white",
};

const techlogo = {
  backgroundColor: "white",
  borderRadius: 300,
  width: "4%",
  height: "4%",
  marginRight: 20,
};

const search = {
  width: 500,
};