import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import {
  GoogleLoginButton,
  GithubLoginButton,
  LinkedInLoginButton,
} from "react-social-login-buttons";
import access from "../assets/undraw_unlock_24mb.png";
import "./login.css";

function login() {
  return (
    <>
      {/*holding both the image and the text in a container*/}
      <Container fluid>
        <Row>
          {/*to able to make a grid*/}
          <Col>
            <img src={access} className="accesspic" />
          </Col>
          <Col className="column">
            <h2 className="title">LOGIN</h2>
            <p>Welcome back, TechOpper!</p>
            <Row>
              <GithubLoginButton
                onClick={() => alert("Hello")}
                style={{
                  borderRadius: "4px",
                  marginLeft: "2%",
                  width: "40%",
                }}
              />
            </Row>
            <Row>
              <GoogleLoginButton
                onClick={() => alert("Hello")}
                style={{
                  borderRadius: "4px",
                  marginLeft: "2%",
                  width: "40%",
                }}
              />
            </Row>
            <Row>
              <LinkedInLoginButton
                onClick={() => alert("Hello")}
                style={{
                  borderRadius: "4px",
                  marginLeft: "2%",
                  width: "40%",
                }}
              />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default login;
