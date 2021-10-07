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
import ReactDOM from 'react-dom';
import theme from "../themes/theme1"
import {createTheme, responsiveFontSizes, ThemeProvider, Typography, } from "@material-ui/core";
import Accordion from "../components/Accordion";
import Divider from '@mui/material/Divider';
import VisibilitySensor from "react-visibility-sensor";
import FadeIn from "../animators/FadeIn.js";
export default function About(props) {

  
  const [titleVisible, setTitleVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  
  
  return (
    <>
   
      
      
     
      <Container fluid>
      <VisibilitySensor>
                {({ isVisible }) => (
                  <FadeIn isVisible={titleVisible} y={-40}>
                    {isVisible ? setTitleVisible(true) : ""}
        <Row>
          <Col>
         
        
        <Divider orientation="horizontal" textAlign="left" sx={{marginBottom:"30px", }} flexItem={true}>
        <h1 className="aboutTitleText"> About me</h1>
  </Divider>

     
      </Col>
      </Row>
        </FadeIn>
                )}
              </VisibilitySensor>
    

      <VisibilitySensor>
                {({ isVisible }) => (
                  <FadeIn isVisible={textVisible} y={-40}>
                    {isVisible ? setTextVisible(true) : ""}
      <Container >
    
          <Row >
              <Col >
              <ThemeProvider theme={theme}>
              <Typography className="aboutText" variant="body2" >
                
        My name is Jonathan Brown and I would like to express my strong interest
        in the Junior Software Engineer. I believe that my qualifications,
        education, and personal project experience would make me a strong
        candidate for the position. Moreover, I am a hard working professional
        who would like to collaborate closely with your software team to develop
        and implement software, ensuring optimal functionality, quality, and
        reliability. 
      
        </Typography>
        </ThemeProvider>
        </Col>
        <Col>
     
        <ThemeProvider theme={theme}>
              <Typography   className="aboutText" variant="body2" >
                
        My name is Jonathan Brown and I would like to express my strong interest
        in the Junior Software Engineer. I believe that my qualifications,
        education, and personal project experience would make me a strong
        candidate for the position. Moreover, I am a hard working professional
        who would like to collaborate closely with your software team to develop
        and implement software, ensuring optimal functionality, quality, and
        reliability. 
      
        </Typography>
        </ThemeProvider>
        </Col>
        
      
        
       
        </Row>
      </Container>
      </FadeIn>
       )}
     </VisibilitySensor>
      <div className="accordion">
      <Accordion  />
      </div>
      </Container>
      
      
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

    

    </>
  );
}
