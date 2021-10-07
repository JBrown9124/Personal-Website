import * as React from "react";
import PropTypes from "prop-types";
import Jonathan_Brown_Resume from "../images/Jonathan_Brown_Resume.pdf";
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

import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import navIcon from "../images/navIcon.jpeg";
import LinkUnderline from "../animators/LinkUnderline"

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
        <Navbar className="navBar" expand="sm" fixed="top" collapseOnSelect>
          <Container fluid>
            <Col xs={"auto"} sm={"auto"} md={1} lg={1} xl={1} xxl={1}>
              <Navbar.Brand href="#home" className="navBrand">
                <img
                
                  type="button"
                  src={navIcon}
                  width="60"
                  height="40"
                  className="navIcon"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
            </Col>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>

              <Col xs={"auto"} sm={"auto"} md={1} lg={1} xl={1} xxl={1}>
                <LinkUnderline>
               
              <Nav.Link href="#about" className="navText">About</Nav.Link>
             
              </LinkUnderline>
              </Col>
              <Col xs={"auto"} sm={"auto"} md={1} lg={1} xl={1} xxl={1}>
              <LinkUnderline>
                <Nav.Link href="#work"className="navText">Work</Nav.Link>
                </LinkUnderline>
              </Col>
              <Col xs={"auto"} sm={"auto"} md={1} lg={1} xl={1} xxl={1}>
        <LinkUnderline>
                <Nav.Link className="navText">Contact</Nav.Link>
                </LinkUnderline>
              </Col>
              <Col xs={"auto"} sm={"auto"} md={1} lg={1} xl={1} xxl={1}>
              <LinkUnderline>
                <Nav.Link href={Jonathan_Brown_Resume} without rel="noopener noreferrer" target="_blank"trailingIcon="picture_as_pdf"label="Resume"className="navText">Resume</Nav.Link>
                </LinkUnderline>
              </Col>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </HideOnScroll>
    </>
  );
}
