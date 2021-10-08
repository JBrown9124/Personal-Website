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
export default function Home(props) {
  return (
    <>
      <Row xs={"auto"} xl={"auto"} >
        <Col xs={7} xl={8} >
          <Typography variant="h2">Welcome, I am</Typography >

          <Typography variant="h1" className="nameText">Jonathan Brown</Typography >

          <Typography variant="h3" className="whoText">
           
            I'm a software engineer who likes to build things.
          </Typography >
          <div className="socialButtons">
            <SocialButtons />
          </div>
        </Col>
        <Col xs={5} xl={4}>
          <div className="profPicContainer">
            <ProfPicBoop timing={300}>
              <Image className="profPic" src={`${profPic}`} fluid/>
            </ProfPicBoop>
          </div>
        </Col>
      </Row>
    </>
  );
}
