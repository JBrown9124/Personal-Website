import * as React from "react";
import PropTypes from "prop-types";

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
  Col
} from "react-bootstrap";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import navIcon from "../images/navIcon.jpeg";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Navigation(props) {
  return (
    <>
    <HideOnScroll {...props}>
    
      <Navbar className="navBar" expand="sm" fixed="top" collapseOnSelect >
      <Container fluid>
          <Navbar.Brand className="navBrand">
         
            <img
              src={navIcon}
              width="40"
              height="40"
              className="navIcon"
              alt="React Bootstrap logo"
            />
            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
             
            </Nav>

            
              
              <Col  xs={"auto"} sm={"auto"} md={1} lg={1} xl={1} xxl={1}>
              <Nav.Link  className="navText">About</Nav.Link></Col>
              <Col xs={"auto"} sm={"auto"} md={1} lg={1} xl={1} xxl={1}>
              <Nav.Link className="navText">Work</Nav.Link></Col>
              <Col xs={"auto"} sm={"auto"} md={1} lg={1} xl={1} xxl={1}><Nav.Link className="navText">Contact</Nav.Link></Col>
              <Col xs={"auto"} sm={"auto"} md={1} lg={1} xl={1} xxl={1}><Nav.Link className="navText">Resume</Nav.Link></Col>
              
              
              
             
            
          </Navbar.Collapse>
          
          </Container>
        
      </Navbar>
      
      </HideOnScroll>
    </>
  );
}
