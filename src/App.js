import logo from "./logo.svg";
import "./App.css";
import "./components/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sections/Home.css";
import "./sections/About.css";
import "./components/SocialButtons.css";
import "./components/Accordion.css";
import Navigation from "./components/Navbar.js";
import profPic from "./images/profPic.jpg";
import ProfPicBoop from "./animators/ProfPicBoop.js";

import ReactDOM from "react-dom";
import VisibilitySensor from "react-visibility-sensor";
// import 'mdb-ui-kit/css/mdb.min.css';
import React, { useEffect, useState } from "react";
import About from "./sections/About.js";
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
  Image,
} from "react-bootstrap";
import Boop from "./animators/SocialIconsBoop.js";
import FadeIn from "./animators/FadeIn.js";
function App() {
  const h2Styles = {
    fontSize: "82px",
  };

  const centeredStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "100%",
    overflowX: "hidden",
  };
  return (
    <>
      <Navigation />
      <Container id="home" className="appContainer" fluid>
        <Container >
          <Row xl={4}>
            <Col xl={8}>
              <VisibilitySensor>
                {({ isVisible, }) => (
                  <FadeIn isVisible={isVisible} y={-10}>
                    <div className="home">
                      <Home />
                    </div>
                  </FadeIn>
                )}
              </VisibilitySensor>
            </Col>
            <Col  xl={4}>
              <VisibilitySensor>
                {({ isVisible }) => (
                  <FadeIn isVisible={isVisible} y={-10}>
                    <div className="profPicContainer">
                      <ProfPicBoop timing={300}>
                        
                        <Image className="profPic" src={`${profPic}`} fluid/>
                        
                      </ProfPicBoop>
                      </div>
                    
                  </FadeIn>
                )}
              </VisibilitySensor>
            </Col>
          </Row>
          <Row>
            <Col>
              <VisibilitySensor>
                {({ isVisible }) => (
                  <FadeIn isVisible={isVisible} y={-10}>
                    <div id="about" className="about">
                      <About />
                    </div>
                  </FadeIn>
                )}
              </VisibilitySensor>
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
