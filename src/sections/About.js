import React, { useEffect, useState } from "react";
import {
  Navbar,
  Nav,
  OverlayTrigger,
  ButtonGroup,
  Button,
  Popover,
  Badge,
  Container,
  Row,
  Col,
  Image,
  Placeholder,
  
} from "react-bootstrap";
import Accordion from "../components/Accordion"


export default function About(props) {
  return (
    <>
    <Container fluid>
      <h1 className="aboutTitleText">
        About Me{" "}
        <Placeholder className="aboutDivider" animation="wave">
          <Placeholder className="aboutDivider" size="xs" xs={12} />
        </Placeholder>
      </h1>
      <Container fluid>
      <p className="aboutText">
          <Row>
              <Col>
        My name is Jonathan Brown and I would like to express my strong interest
        in the Junior Software Engineer. I believe that my qualifications,
        education, and personal project experience would make me a strong
        candidate for the position. Moreover, I am a hard working professional
        who would like to collaborate closely with your software team to develop
        and implement software, ensuring optimal functionality, quality, and
        reliability. 
        </Col>
        <Col>
                    Enclosed is my resume that more fully details my background
        and work experience, and how they relate to your position. I developed
        and deployed two full-stack web applications (with many more on the
        way!) with a full understanding of using backend/frontend frameworks and
        libraries. I also have extensive knowledge of data structures and
        algorithms such as how and when to apply them, making processes in
        applications as efficient and optimal as possible. When creating
        projects, I apply many business-like principles into the development
        process. As a self-taught engineer I pride myself on learning software
        technologies fast and efficiently.
        </Col>
        </Row>
      </p>
      </Container>
      <Accordion/>
      {/* <Accordion flush>
  <Accordion.Item eventKey="0" >
    <Accordion.Header>Technlogies I use</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
 
</Accordion> */}

    
</Container>
    </>
  );
}
