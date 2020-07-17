import React from "react";
import { Row, Col } from "react-bootstrap";
function footer() {
  return (
    <footer style={footercontainer}>
      2020 TechOpps Forum
      <Row>
        <Col>Facebook</Col>
        <Col>Facebook</Col>
      </Row>
      <Row>
        <Col>Facebook</Col>
        <Col></Col>
      </Row>
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
  textAlign: "center",
  justifyContent: "center",
  padding: "20px",
  position: "absolute",
  width: "100%",
  height: "80px",
  marginTop: 100,
  bottom: 0,
  color: "white",
};

const row = {
  flexDirection: "row",
};

const techlogo = {
  backgroundColor: "white",
  borderRadius: 300,
  width: "4%",
  height: "4%",
  marginRight: 20,
};
