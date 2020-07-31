import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  FormControl,
  FormLabel,
  Form,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import messaging from "../assets/undraw_messaging_uok8.png";
import './contact.css';
function contact() {
  return (
    <>
      {/*holding both the image and the text in a container*/}
      <Container fluid>
        <Row>
          {/*to able to make a grid*/}
          <Col xs={8} md={5}>
            <img src={messaging} className='message' />
          </Col>
          <Col xs={8} md={6}>
            <Form className='form'>
              <h2 className='title'>SEND US A MESSAGE</h2>
              <p>We love to help you, techopper!</p>
              <Row>
                <Col>
                  {/*able to input name and message in the form*/}
                  <FormLabel className="text-muted">First Name</FormLabel>
                  <FormControl type="first name" className='adjust'></FormControl>
                </Col>
                <Col>
                  <FormLabel className="text-muted">Last Name</FormLabel>
                  <FormControl type="last name"></FormControl>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormLabel className="text-muted">Email Address</FormLabel>
                  <FormControl type="email address"></FormControl>
                </Col>
                <Col></Col>
              </Row>
              <FormLabel className="text-muted">Message</FormLabel>
              <FormControl as="textarea" rows="4"></FormControl>
              <br />
              <button type="submit" className="submit">
                Submit
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default contact;


