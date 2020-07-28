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
  InputGroup,
} from "react-bootstrap";
import pic from "../assets/logo.png";
import "../components/editprofile.css";

function editprofile() {
  return (
    <>
      {/*holding both the image and the text in a container*/}
      <Container fluid className="contain">
        <Row>
          <Col xs={10} md={9}>
            <span className="inline">
              <img src={pic} className="pics"/>
              <h1 className="space">
                Toma Red <br /> <p className="size">@redtomades01</p>
              </h1>
            </span>
          </Col>
        </Row>

        <Form className="move">
          <Row>
            <Col xs={8} md={6}>
              <FormLabel className="style">FIRST NAME</FormLabel>
              <FormControl type="firstname" className="width"></FormControl>
            </Col>
            <Col>
              <FormLabel className="styke">BIRTHDAY</FormLabel>
              <InputGroup>
                <FormControl
                  type="birthday"
                  className="width"
                  placeholder="mm/dd/yyyy"
                ></FormControl>
              </InputGroup>
            </Col>
          </Row>

          <Row>
            <Col>
              <FormLabel className="style">GENDER</FormLabel>

              <FormControl as="select" className="select">
                <option>Select</option>
                <option disabled>------------------</option>
                <option>Male</option>
                <option>Female</option>
                <option>Prefer not to say</option>
              </FormControl>
            </Col>
          </Row>
          <br />

          <Row>
            <Col>
              <FormLabel className="style">SOCIAL MEDIA</FormLabel>
            </Col>
          </Row>
          <Row>
            <Col>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>facebook.com/</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  type="username"
                  placeholder="username"
                ></FormControl>
              </InputGroup>
            </Col>
            <Col>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>twitter.com/</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  type="username"
                  placeholder="username"
                ></FormControl>
              </InputGroup>
            </Col>
            <Col>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>linkedin.com/in/</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  type="username"
                  placeholder="username"
                ></FormControl>
              </InputGroup>
            </Col>
            <Col>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>instagram.com/</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  type="username"
                  placeholder="username"
                ></FormControl>
              </InputGroup>
            </Col>
          </Row>

          <Button variant="success" className="bspaces">
            SAVE CHANGES
          </Button>
          <Button variant="success" className="bspaces">
            CANCEL
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default editprofile;
