import React, { useState } from "react";
import PropTypes from "prop-types";
import Jonathan_Brown_Resume from "../images/Jonathan_Brown_Resume.pdf";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import navIcon from "../images/navIcon.mp4";
import navIconB from "../images/navIconB.mp4";
import navIconCropped from "../images/navIconCropped.mp4";
import navIconBCropped from "../images/navIconBCropped.mp4";
import LinkUnderline from "../animators/LinkUnderline";
import FadeIn from "../animators/FadeIn.js";
import ReactCardFlip from "react-card-flip";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
function HideOnScroll(props) {
  const { children, window } = props;

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
  const [showX, setShowX] = useState(false);

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
                      <ReactCardFlip
                        isFlipped={playBrand}
                        flipDirection="vertical"
                      >
                        <video
                          muted={true}
                          type="button"
                          autoPlay={true}
                          src={navIconCropped}
                          width="65"
                          height="45"
                          style={{
                            opacity: 1.0,
                            
                            outline: "black",
                           
                            mixBlendMode: "difference!importnat",
                            background: "transparent!important",
                            color: "transparent!important",
                          }}
                        />
                        <video
                          muted={true}
                          type="button"
                          autoPlay={true}
                          src={navIconBCropped}
                          width="65"
                          height="45"
                          sx={{
                            opacity: 1.0,
                         

                            mixBlendMode: "difference!importnat",
                            background: "transparent!important",
                            color: "transparent!important",
                          }}
                        />
                      </ReactCardFlip>
                    </Navbar.Brand>
                  </div>
                </Tooltip>
              </FadeIn>
            </Col>
            <FadeIn delay={150} fromY={-10} isVisible={true}>
              <Navbar.Toggle
                aria-controls="responsive-navbar-nav"
                onClick={() => setShowX(!showX)}
              >
                <div>
                  {showX === false ? (
                    <GiHamburgerMenu
                      className="collapseIcon"
                      color="rgba(115,199,204,1)"
                    />
                  ) : (
                    <VscChromeClose
                      className="collapseIcon"
                      color="rgba(115,199,204,1)"
                    />
                  )}
                </div>
              </Navbar.Toggle>
            </FadeIn>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>

              <Col xs={"auto"} sm={"auto"} md={1} lg={1} xl={1} xxl={1}>
                <FadeIn delay={150} fromY={-10} isVisible={true}>
                  <LinkUnderline width={"51"}>
                    <Nav.Link
                      href="#about"
                      className="navText"
                      onClick={() => setShowX(false)}
                    >
                      About
                    </Nav.Link>
                  </LinkUnderline>
                </FadeIn>
              </Col>
              <Col xs={"auto"} sm={"auto"} md={1} lg={1} xl={1} xxl={1}>
                <FadeIn delay={300} fromY={-10} isVisible={true}>
                  <LinkUnderline width={"50"}>
                    <Nav.Link
                      href="#work"
                      className="navText"
                      onClick={() => setShowX(false)}
                    >
                      Work
                    </Nav.Link>
                  </LinkUnderline>
                </FadeIn>
              </Col>
              <Col xs={"auto"} sm={"auto"} md={1} lg={1} xl={1} xxl={1}>
                <FadeIn delay={450} fromY={-10} isVisible={true}>
                  <LinkUnderline width={"59"}>
                    <Nav.Link
                      href="#contact"
                      className="navText"
                      onClick={() => setShowX(false)}
                    >
                      Contact
                    </Nav.Link>
                  </LinkUnderline>
                </FadeIn>
              </Col>
              <Col
                xs={"auto"}
                sm={"auto"}
                md={"auto"}
                lg={"auto"}
                xl={"auto"}
                xxl={"auto"}
              >
                <FadeIn delay={600} fromY={-10} isVisible={true}>
                  <LinkUnderline width={"59"}>
                    <Nav.Link
                      href={Jonathan_Brown_Resume}
                      rel="noopener noreferrer"
                      target="_blank"
                      label="Resume"
                      className="navText"
                      onClick={() => setShowX(false)}
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
