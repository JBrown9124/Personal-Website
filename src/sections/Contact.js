import React, { useEffect, useState } from "react";
import {
  Navbar,
  Nav,
  OverlayTrigger,
  ButtonGroup,
  Popover,
  Badge,
  Container,
  Row,
  Col,
  Image,
  Placeholder,
} from "react-bootstrap";
import Button from "@mui/material/Button";

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
import VisibilitySensor from "react-visibility-sensor";
import FadeIn from "../animators/FadeIn.js";
import WorkButton from "../components/WorkButton.js";

export default function Contact(props) {
  const [titleVisible, setTitleVisible] = useState(false);
  const [leftTextVisible, setLeftTextVisible] = useState(false);
  const [rightTextVisible, setRightTextVisible] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);

  return (
    <>
      <Container>
        <VisibilitySensor>
          {({ isVisible }) => (
            <FadeIn isVisible={titleVisible} y={-40}>
              {isVisible ? setTitleVisible(true) : ""}

              <Divider
                orientation="horizontal"
                textAlign="center"
                sx={{ marginBottom: "50px" }}
                flexItem={true}
              >
                <Typography variant="h4"> Start a Dialogue</Typography>
              </Divider>
            </FadeIn>
          )}
        </VisibilitySensor>
        <Container>
          <ThemeProvider theme={theme}>
            <Container>
              <VisibilitySensor>
                {({ isVisible }) => (
                  <FadeIn isVisible={rightTextVisible} y={-40}>
                    {isVisible ? setRightTextVisible(true) : ""}
                    <Typography className="contactText" variant="body2">
                      I am currently in the process of finding a software
                      engineer position.{" "}
                      <Typography className="contactText" variant="body2">
                        Please feel free contacting me about anything software
                        related!
                      </Typography>
                    </Typography>
                  </FadeIn>
                )}
              </VisibilitySensor>
              <VisibilitySensor>
                {({ isVisible }) => (
                  <FadeIn isVisible={buttonVisible} y={-40}>
                    {isVisible ? setButtonVisible(true) : ""}
                    <div className="contactButton">
                      <WorkButton />
                    </div>
                  </FadeIn>
                )}
              </VisibilitySensor>
            </Container>
          </ThemeProvider>
        </Container>
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
