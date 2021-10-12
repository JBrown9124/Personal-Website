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
} from "react-bootstrap";
import profPic from "../images/profPic.jpg";
import SocialButtons from "../components/SocialButtons.js";
import ProfPicBoop from "../animators/ProfPicBoop.js";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import theme from "../themes/theme1";
import FadeIn from "../animators/FadeIn.js";
import VisibilitySensor from "react-visibility-sensor";
export default function Home(props) {
  const [welcomeVisible, setWelcomeVisible] = useState(false);
  const [nameVisible, setNameVisible] = useState(false);
  const [mottoVisible, setMottoVisible] = useState(false);
  const [buttonsVisible, setButtonsVisible] = useState(false);

  const [pictureVisible, setPictureVisible] = useState(false);

  return (
    <div>
      <Row xs={"auto"} xl={"auto"}>
        <Col xs={7} xl={8}>
          <VisibilitySensor>
            {({ isVisible }) => (
              <FadeIn delay={1400} isVisible={welcomeVisible} y={-40}>
                {isVisible ? setWelcomeVisible(true) : false}

                <Typography variant="h2">Welcome, I am</Typography>
              </FadeIn>
            )}
          </VisibilitySensor>
          <VisibilitySensor>
            {({ isVisible }) => (
              <FadeIn delay={1600} isVisible={nameVisible} y={-40}>
                {isVisible ? setNameVisible(true) : false}
                <Typography variant="h1" className="nameText">
                  Jonathan Brown.
                </Typography>
              </FadeIn>
            )}
          </VisibilitySensor>
          <VisibilitySensor>
            {({ isVisible }) => (
              <FadeIn delay={1800} isVisible={mottoVisible} y={-40}>
                {isVisible ? setMottoVisible(true) : false}
                <Typography variant="h3" className="whoText">
                  A creator, designer, and software engineer.
                </Typography>
              </FadeIn>
            )}
          </VisibilitySensor>
          <VisibilitySensor>
            {({ isVisible }) => (
              <FadeIn delay={2000} isVisible={buttonsVisible} y={-40}>
                {isVisible ? setButtonsVisible(true) : false}
                <div className="socialButtons">
                  <SocialButtons />
                </div>
              </FadeIn>
            )}
          </VisibilitySensor>
        </Col>
        <Col xs={5} xl={4}>
          <VisibilitySensor>
            {({ isVisible }) => (
              <FadeIn delay={2200} isVisible={buttonsVisible} y={-40}>
                <div className="profPicContainer">
                  <ProfPicBoop>
                    <Image className="profPic" src={`${profPic}`} fluid />
                  </ProfPicBoop>
                </div>
              </FadeIn>
            )}
          </VisibilitySensor>
        </Col>
      </Row>
    </div>
  );
}
