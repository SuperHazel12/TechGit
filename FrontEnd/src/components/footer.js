import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Logo from "../assets/logo.png";
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import LinkedIn from "../assets/linkedin.png";
import Twitter from "../assets/twitter.png";
function footer() {
  return (
    <footer style={footercontainer}>
      <Container>
        <Row className="justify-content-md-center">
          <Col sm>
            <img src={Logo} alt="TechOppsLogo" style={logo} />
          </Col>
          <Col style={column2}>
            <ul className="list-unstyled">
              <li style={list}>Who We Are</li>
              <li style={list}>Executive Board</li>
              <li style={list}>Mission & Vision</li>
              <li style={list}>Our Partners</li>
            </ul>
          </Col>
          <Col sm style={column3}>
            <ul className="list-unstyled">
              <li style={list}>Works</li>
              <li style={list}>Engage</li>
              <li style={list}>Contact</li>
              <li style={list}>Careers</li>
            </ul>
          </Col>
          <Col sm={4}>
            <img src={Facebook} alt="facebook" style={socmed} />
            <img src={Instagram} alt="instagram" style={socmed} />
            <img src={LinkedIn} alt="linkedin" style={socmed} />
            <img src={Twitter} alt="twitter" style={socmed} />
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default footer;

const footercontainer = {
  borderTop: "1px solid #00A037",
  backgroundColor: "#00A037",
  flexShrink: 0,
  float: "none",
  display: "block",
  width: "100%",
  height: "35%",
  marginTop: 100,
  position: "absolute",
  color: "white",
};

const logo = {
  width: "80%",
  alignItems: "start",
  position: "absolute",
  backgroundColor: "white",
  marginTop: "30%",
  marginBottom: "1%",
  borderRadius: "50%",
};

const column2 = {
  marginLeft: "8%",
  marginTop: "5%",
};

const list = {
  marginBottom: "5%",
};

const column3 = {
  marginLeft: "1%",
  marginTop: "5%",
};

const socmed = {
  width: "15%",
  marginLeft: "5%",
  marginTop: "10%",
  marginBottom: "3%",
};
