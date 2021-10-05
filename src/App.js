import logo from "./logo.svg";
import "./App.css";
import "./components/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sections/Home.css";
import "./components/SocialButtons.css"
import Navigation from "./components/Navbar.js";
import profPic from "./images/profPic.jpg";

import 'mdb-ui-kit/css/mdb.min.css';
import React, { useEffect, useState } from "react";

import Home from "./sections/Home.js";

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
  Image
} from "react-bootstrap";
import Boop from "./animators/Boop.js"
function App() {
  return (
    <>
     
        <Navigation />
        <Container className="appContainer" fluid>
<Container>
           
            <Row>
            <Col >
          <div className="home">
            
            <Home   />
            </div>
            
            </Col>
        <Col xs={"auto"}>
        <div className='bg-image hover-overlay' style={{  backgroundColor: 'rgba(57, 192, 237, 0.2)' , }}>
      <img src={`${profPic}`} className='img-fluid' />
      <a href='#!'>
        <div className='mask overlay' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
      </a>
    </div>
        
           
        </Col>
        </Row>
       
        {/* <Row>
          <Col >
            <Image
              className="profPic"
              src={`${profPic}`}
              width="300px"
              height="300px"
              lazyLoad
            />
          </Col>
        </Row> */}
</Container>
        </Container>
    </>
  );
}

export default App;
