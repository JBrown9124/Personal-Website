import React, { useEffect, useState } from "react";
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
import navIcon from "../images/navIcon.mp4";
import navIconB from "../images/navIconB.mp4";
import LinkUnderline from "../animators/LinkUnderline";
import FadeIn from "../animators/FadeIn.js";
import VisibilitySensor from "react-visibility-sensor";
import ReactCardFlip from "react-card-flip";
import {GiHamburgerMenu} from "react-icons/gi"
import {VscChromeClose} from "react-icons/vsc"
import Tooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";
import Zoom from "@mui/material/Zoom";
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
  const [playBrand, setPlayBrand] = useState(false);
  const [flipDirection, setFlipDirection] = useState("vertical");
  const [showX, setShowX] = useState(false);
  const triggerFlip = () => {
    setPlayBrand(!playBrand);
  };
  return (
    <>
      <HideOnScroll {...props}>
        <Navbar className="navBar" expand="sm" fixed="top" collapseOnSelect>
          <Container fluid>
            <Col xs={"auto"} sm={"auto"} md={1} lg={1} xl={1} xxl={1}>
              <FadeIn fromScale={0} isVisible={true} delay={0}>
              <Tooltip TransitionComponent={Zoom} title="Home">
          <div>
              <Navbar.Brand
                href="#home"
               
                onMouseLeave={() => setPlayBrand(false)}
                onMouseEnter={() => setPlayBrand(true)}
              >
                <ReactCardFlip isFlipped={playBrand} flipDirection="vertical">
                  <video
                    pause={false}
                    play={playBrand}
                    paused={false}
                    muted={true}
                    type="button"
                    autoPlay={true}
                    src={navIcon}
                    width="65"
                    height="45"
                    style={{opacity:1.0,borderColor:"rgba(115,199,204,1)!important", outline: "black", borderWidth:"10px!important", borderRadius:"13px", mixBlendMode:"difference!importnat", background:"transparent!important", color:"transparent!important"}}
                  />
                  <video
                    pause={false}
                    play={playBrand}
                    paused={false}
                    muted={true}
                    type="button"
                    autoPlay={true}
                    src={navIconB}
                    width="65"
                    height="45"
                    sx={{opacity:1.0,borderColor:"rgba(115,199,204,1)!important", outline: "black", borderWidth:"10px!important", borderRadius:"13px", mixBlendMode:"difference!importnat", background:"transparent!important", color:"transparent!important"}}

                  />
                </ReactCardFlip>
              </Navbar.Brand>
              </div>
              </Tooltip>
              </FadeIn>
            </Col>
            <FadeIn delay={150} fromY={-10} isVisible={true}>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={()=>setShowX(!showX)}><span>{showX===false?<GiHamburgerMenu className="collapseIcon" color="rgba(115,199,204,1)"/>:<VscChromeClose className="collapseIcon" color="rgba(115,199,204,1)"/>}</span></Navbar.Toggle>
            </FadeIn>
            <Navbar.Collapse id="responsive-navbar-nav">
           
              <Nav className="me-auto"></Nav>

              <Col xs={"auto"} sm={"auto"} md={1} lg={1} xl={1} xxl={1}>
                <FadeIn delay={150} fromY={-10} isVisible={true}>
                  <LinkUnderline width={"60"}>
                    <Nav.Link href="#about" className="navText" onClick={()=>setShowX(false)}>
                      About
                    </Nav.Link>
                  </LinkUnderline>
                </FadeIn>
              </Col>
              <Col xs={"auto"} sm={"auto"} md={1} lg={1} xl={1} xxl={1}>
              <FadeIn delay={300} fromY={-10} isVisible={true}>
                <LinkUnderline width={"60"}>
                  <Nav.Link href="#work" className="navText" onClick={()=>setShowX(false)}>
                    Work
                  </Nav.Link>
                </LinkUnderline>
                </FadeIn>
              </Col>
              <Col xs={"auto"} sm={"auto"} md={1} lg={1} xl={1} xxl={1}>
              <FadeIn delay={450} fromY={-10} isVisible={true}>
                <LinkUnderline>
                  <Nav.Link href="#contact" className="navText"onClick={()=>setShowX(false)}>
                    Contact
                  </Nav.Link>
                </LinkUnderline>
                
                </FadeIn>
              </Col>
              <Col xs={"auto"} sm={"auto"} md={"auto"} lg={"auto"} xl={"auto"} xxl={"auto"}>
              <FadeIn delay={600} fromY={-10} isVisible={true}>
                <LinkUnderline>
                  <Nav.Link
                    href={Jonathan_Brown_Resume}
                    without
                    rel="noopener noreferrer"
                    target="_blank"
                    trailingIcon="picture_as_pdf"
                    label="Resume"
                    className="navText"
                    onClick={()=>setShowX(false)}
                  >
                    Resume
                  </Nav.Link>
                </LinkUnderline>
                </FadeIn>
              </Col>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </HideOnScroll>
    </>
  );
}
