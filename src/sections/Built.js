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
import Button from '@mui/material/Button';

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
import Link from "@mui/material/Link";
export default function Built(props) {
  const [titleVisible, setTitleVisible] = useState(false);
  const [leftTextVisible, setLeftTextVisible] = useState(false);
  const [rightTextVisible, setRightTextVisible] = useState(false);
  function openInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  return (
    <>
      <Container>
        <div className="builtText">
        <Typography variant="body1" >
        <Link
                              
                                type="button"
                                onClick={() => openInNewTab("https://github.com/JBrown9124/Personal-Website")}
                                underline="none"
                                color={"#e0f7fa"}
                              
                              >
                Designed and Built by Jonathan Brown</Link></Typography>
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
