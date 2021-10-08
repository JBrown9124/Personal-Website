import logo from "./logo.svg";
import "./App.css";
import "./components/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sections/Home.css";
import "./sections/About.css";
import "./sections/Work.css"
import "./components/SocialButtons.css";
import "./components/Accordion.css";
import "./sections/Contact.css"
import "./sections/Built.css"
import Navigation from "./components/Navbar.js";
import profPic from "./images/profPic.jpg";
import ProfPicBoop from "./animators/ProfPicBoop.js";

import ReactDOM from "react-dom";
import VisibilitySensor from "react-visibility-sensor";
// import 'mdb-ui-kit/css/mdb.min.css';
import React, { useEffect, useState } from "react";
import About from "./sections/About.js";
import Home from "./sections/Home.js";
import Work from "./sections/Work.js";
import Contact from "./sections/Contact.js";
import Built from "./sections/Built.js";
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
  const [homeVisible, setHomeVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [workVisible, setWorkVisible] = useState(false);
  return (
    < div id="home" className="appContainer" >
      
      <Navigation />
   
        <Container>
          {/* <Row xl={4}>
            <Col xl={8}> */}
            
          <VisibilitySensor>
            {({ isVisible }) => (
              <div className="home">
                <FadeIn   isVisible={isVisible} y={-40}>
                  <Home />
                </FadeIn>
              </div>
            )}
          </VisibilitySensor>
          {/* </Col>
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
          </Row> */}
          <div id="about" className="sectionSeperator"></div>
       
              {/* <VisibilitySensor>
                {({ isVisible }) => (
                  <FadeIn isVisible={aboutVisible} y={-40}>
                    {isVisible ? setAboutVisible(true) : ""} */}

                    <About  />
                  {/* </FadeIn>
                )}
              </VisibilitySensor> */}
        
          <div id="work" className="sectionSeperator"></div>
          
              {/* <VisibilitySensor>
                {({ isVisible }) => ( */}
                 
                    {/* {isVisible ? setWorkVisible(true) : ""} */}

                    <Work />
                    <div id="contact" className="sectionSeperator"></div>

                    <Contact/>
                    <div  className="builtSeperator"></div>
                    <Built/>
               
                {/* )}
              </VisibilitySensor> */}
           
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
      
    </div>
  );
}

export default App;
