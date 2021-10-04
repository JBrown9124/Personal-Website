import logo from "./logo.svg";
import "./App.css";
import "./components/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navbar.js";
import profPic from "./images/profPic.jpeg";
import React, { useEffect, useState } from "react";
import { Image } from 'react-image-and-background-image-fade'
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
  
} from "react-bootstrap";
function App() {
  return (
    <div className="appContainer">
      <Navigation />
      
      <Container >
        <Row>
          <Col>
          
          </Col>
        </Row>
        <Row className="make">
    <Col className="make"></Col>

        </Row>
        <Image className="profPic"src={`${profPic}`}  width='300px'
        height='300px' lazyLoad/>
      </Container>
    </div>
  );
}

export default App;
