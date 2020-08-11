import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import messaging from "../assets/undraw_messaging_uok8.png";
import "./contact.css";
function Contact() {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      emailaddress: "",
      textarea: "",
    },
    onSubmit: (values) => {
      console.log("Form data", values);
    },
    validate: values =>{
      let errors ={}
      
      if(!values.name){
        errors.name ='Required'
      }

      
      return errors
    }
  });

  //console.log("Form values", formik.values);
  return (
    <>
      {/*holding both the image and the text in a container*/}
      <Container fluid>
        <Row>
          {/*to able to make a grid*/}
          <Col xs={8} md={5}>
            <img src={messaging} className="message" />
          </Col>
          <Col xs={8} md={6}>
            <form className="form" onSubmit={formik.handleSubmit}>
              <h2 className="title">SEND US A MESSAGE</h2>
              <p>We love to help you, techopper!</p>
              <Row>
                <Col>
                  {/*able to input name and message in the form*/}
                  <label htmlFor="First Name" className="text-muted">
                    First Name
                  </label>
                  <br />
                  <input
                    type="text"
                    name="firstname"
                    className="adjust"
                    onChange={formik.handleChange}
                    values={formik.values.firstname}
                  />
                </Col>
                <Col>
                  <label htmlFor="Last Name" className="text-muted">
                    Last Name
                  </label>
                  <br />
                  <input
                    type="text"
                    name="lastname"
                    className="adjust"
                    onChange={formik.handleChange}
                    values={formik.values.lastname}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <label className="text-muted">Email Address</label>
                  <br />
                  <input
                    type="email"
                    name="email"
                    className="adjust"
                    onChange={formik.handleChange}
                    values={formik.values.email}
                  />
                </Col>
                <Col></Col>
              </Row>
              <label className="text-muted">Message</label>
              <br />
              <input
                as="textarea"
                name="textarea"
                rows="4"
                onChange={formik.handleChange}
                values={formik.values.textarea}
              />
              <br />
              <br />
              <button type="submit" border-radius="7px">
                Submit
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
