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
import Birthday from "./birthday";

function editprofile() {
  return (
    <>
      {/*holding both the image and the text in a container*/}
      <Container fluid style={contain}>
        <Row>
          <Col xs={10} md={9}>
            <span style={inline}>
              <img src={pic} style={pics} />
              <h1 style={space}>
                Toma Red <br /> <p style={size}>@redtomades01</p>
              </h1>
            </span>
          </Col>
        </Row>

        <Form style={move}>
          <Row>
            <Col xs={8} md={6}>
              <FormLabel style={style}>FIRST NAME</FormLabel>
              <FormControl type="firstname" style={width}></FormControl>
            </Col>
            <Col>
              <FormLabel style={style}>BIRTHDAY</FormLabel>
              <br />
              <Birthday style={width} />
            </Col>
          </Row>

          <Row>
            <Col>
              <FormLabel style={style}>GENDER</FormLabel>

              <FormControl as="select" style={select}>
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
              <FormLabel style={style}>SOCIAL MEDIA</FormLabel>
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
          <br />
          <br />
          <Button variant="success" style={bspaces}>
            SAVE CHANGES
          </Button>
          <Button variant="success" style={bspaces}>
            CANCEL
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default editprofile;
const pics = {
  width: "30%",
  height: "70%",
  marginTop: 50,
  marginRight: 0,
};

const contain = {
  paddingLeft: 150,
  paddingRight: 150,
};

const inline = {
  display: "flex",
};

const space = {
  marginTop: 150,
  marginLeft: 20,
  fontWeight: "bold",
  fontSize: 50,
};

const size = {
  fontWeight: "normal",
  fontSize: 20,
};

const width = {
  width: "90%",
};

const style = {
  fontWeight: "bold",
};

const move = {
  marginTop: 30,
};

const bspaces = {
  marginRight: 30,
  fontWeight: "bold",
};

const select = {
  width: "30%",
};
