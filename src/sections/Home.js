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
import { createTheme, ThemeProvider,  } from '@material-ui/core/styles';
import Typography from '@mui/material/Typography';
import theme from "../themes/theme1"
import FadeIn from "../animators/FadeIn.js";
import VisibilitySensor from "react-visibility-sensor";
export default function Home(props) {
  const [welcomeVisible, setWelcomeVisible] = useState(false);
  const [nameVisible, setNameVisible] = useState(false);
  const [mottoVisible, setMottoVisible] = useState(false);
  const [buttonsVisible, setButtonsVisible] = useState(false);

  const [pictureVisible, setPictureVisible] = useState(false)

  return (
    <div>
    
      <Row xs={"auto"} xl={"auto"} >
        <Col xs={7} xl={8} >
       
        <VisibilitySensor>
    {({ isVisible }) => (
    <FadeIn delay={800}  isVisible={welcomeVisible} y={-40}>
        {isVisible ? setWelcomeVisible(true) : false}
        
          <Typography variant="h2">Welcome, I am</Typography >
          </FadeIn>
          )}
        </VisibilitySensor>
        <VisibilitySensor>
    {({ isVisible }) => (
    <FadeIn delay={900}  isVisible={nameVisible} y={-40}>
        {isVisible ? setNameVisible(true) : false}
          <Typography variant="h1" className="nameText">Jonathan Brown</Typography ></FadeIn>
          )}
        </VisibilitySensor>
        <VisibilitySensor>
    {({ isVisible }) => (
    <FadeIn delay={1000}  isVisible={mottoVisible} y={-40}>
        {isVisible ? setMottoVisible(true) : false}
          <Typography variant="h3" className="whoText">
           
            a software engineer who likes to build things.
          </Typography >
          </FadeIn>
          )}
        </VisibilitySensor>
        <VisibilitySensor>
    {({ isVisible }) => (
    <FadeIn delay={1100}  isVisible={mottoVisible} y={-40}>
        {isVisible ? setMottoVisible(true) : false}
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
    <FadeIn delay={1200}  isVisible={pictureVisible} y={-40}>
        {isVisible ? setPictureVisible(true) : false}
          <div className="profPicContainer">
            <ProfPicBoop >
              <Image className="profPic" src={`${profPic}`} fluid/>
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
