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
import ReactDOM from "react-dom";
import theme from "../themes/theme1";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import Accordion from "../components/Accordion";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";

import VisibilitySensor from "react-visibility-sensor";
import FadeIn from "../animators/FadeIn.js";

export default function About(props) {
  const [titleVisible, setTitleVisible] = useState(false);
  const [leftTextVisible, setLeftTextVisible] = useState(false);
  const [rightTextVisible, setRightTextVisible] = useState(false);

  return (
    <>
      <Container fluid>
        <VisibilitySensor>
          {({ isVisible }) => (
            <FadeIn delay={250} isVisible={titleVisible} y={-40}>
              {isVisible ? setTitleVisible(true) : ""}

              <div className="separator">
                <Typography variant="h4"> About Me</Typography>
              </div>
            </FadeIn>
          )}
        </VisibilitySensor>
        <Container>
          <Row>
            <Col>
              <ThemeProvider theme={theme}>
                <VisibilitySensor>
                  {({ isVisible }) => (
                    <FadeIn
                      delay={250}
                      isVisible={rightTextVisible || leftTextVisible}
                      y={-40}
                    >
                      {isVisible ? setLeftTextVisible(true) : ""}
                      <div className="aboutText">
                      <Typography variant="body2">
                        Greetings friend! My name is Jonathan and I have a
                        passion for creating things through the art of code. My
                        software engineer journey began in 2018 with a couple of
                        text books and a strong passion for the inner workings
                        of computers.
                        </Typography>
                        </div>
                        <Typography  variant="body2">
                         Since then I have taken online courses on
                        data structures and algorithms, built full-stack
                        projects, and solved countless leetcode problems, all
                        for the benefit of deeply understanding what it means to
                        be a professional software engineer.
                      </Typography>
                    </FadeIn>
                  )}
                </VisibilitySensor>
              </ThemeProvider>
            </Col>
            <Col>
              <ThemeProvider theme={theme}>
                <VisibilitySensor>
                  {({ isVisible }) => (
                    <FadeIn
                      delay={450}
                      isVisible={rightTextVisible || leftTextVisible}
                      y={-40}
                    >
                      {isVisible ? setRightTextVisible(true) : ""}
                      <Typography className="aboutText" variant="body2">
                        But my journey doesn't end there. Everyday I am
                        learning something new and exciting. Whether it's a new
                        language, framework or library, my cravings for a deeper
                        understanding of software development never cease!
                        Directly below are the technologies I currently use as well
                        as the certificates I have received.
                      </Typography>
                    </FadeIn>
                  )}
                </VisibilitySensor>
              </ThemeProvider>
            </Col>
          </Row>
        </Container>

        <div className="accordion">
          <Accordion />
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
