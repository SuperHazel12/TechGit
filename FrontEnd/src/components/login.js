import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import {
  GoogleLoginButton,
  GithubLoginButton,
  LinkedInLoginButton,
} from "react-social-login-buttons";
import access from "../assets/undraw_unlock_24mb.png";

function login() {
  return (
    <>
      {/*holding both the image and the text in a container*/}
      <Container fluid>
        <Row>
          {/*to able to make a grid*/}
          <Col>
            <img src={access} style={accesspic}/>
          </Col>
          <Col style={column}>
            <h2 style={title}>LOGIN</h2>
            <p>Welcome back, TechOpper!</p>
            <Row>
              <GithubLoginButton onClick={() => alert("Hello")} style={button}/>
            </Row>
            <Row>
              <GoogleLoginButton
                onClick={() => alert("Hello")}
                style={button}
              />
            </Row>
            <Row>
              <LinkedInLoginButton onClick={() => alert("Hello")} style={button}/>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default login;

const accesspic = {
  width: "100%",
  height: "100%",
  marginTop: 50,
};

const title = {
  fontWeight: "bold",
};

const button = {
  marginTop: 5,
  marginBottom: 5,
  width: "41%",
  borderRadius: 8,
  marginLeft: "2%",
};

const column = {
  marginTop: "8%",
};
