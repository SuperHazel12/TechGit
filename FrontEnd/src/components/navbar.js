import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, Navbar, FormControl, Form } from "react-bootstrap";
import logo from "../assets/Picture1.png";

function navbar() {
  return (
    <>
    <Navbar fixed="top" />
      <Navbar style={navbarstyle}>
        <Navbar sticky="top" />
        <img alt="" src={logo} style={techlogo} />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ul class="nav nav-pills nav-fill">
          <li className="nav-item">
            <a className="nav-link active" href="#latest" style={selected}>
              LATEST
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#browse" style={notselected}>
              BROWSE
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./contact.js" style={notselected}>
              CONTACT
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

        <Dropdown style={dropdown}>
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
            style={dropdownone}
          >
            Hi, Toma Red
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#viewprofile">View Profile</Dropdown.Item>
            <Dropdown.Item href="#editprofile">Edit Profile</Dropdown.Item>
            <Dropdown.Item href="#logout">Log Out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
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

const dropdown = {
  backgroundColor: "#00A037",
  borderColor: "#00A037",
};

const dropdownone = {
  backgroundColor: "#00A037",
  borderColor: "#00A037",
  FontWeight: "bold",
};
