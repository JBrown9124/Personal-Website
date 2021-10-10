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
import { Scrollbars } from 'react-custom-scrollbars';
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
  
    < Container id="home" className="appContainer" fluid>
      
    
            <Navigation />
        <Container>
      
          
              <div className="home">
             
               
                  <Home />
              
              </div>
           
         
          <div id="about" className="about">
       
             

                    <About  />
                    </div>
                 
        
          <div id="work" className="sectionSeperator">
         

                    <Work />
                    </div>
                    <div id="contact" className="sectionSeperator">

                    <Contact/>
                    </div>
                    <div  className="builtSeperator">
                    <Built/>
                    </div>
               
             
           
    
        </Container>
    
    </Container>
  
  );
}

export default App;
