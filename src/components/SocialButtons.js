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
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import SocialIconsBoop from "../animators/SocialIconsBoop.js";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";
import Zoom from "@mui/material/Zoom";
import Link from "@mui/material/Link";
export default function SocialButtons(props) {
  function openInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <>
      {/* <ButtonGroup>
            <div>
        <Button className="linkedIn" onClick={()=>openInNewTab("https://www.linkedin.com/in/jonathan-brown-858814201/")}>
            <FaLinkedin></FaLinkedin>
        </Button>
        </div>
        <div>
        <Button className="github" onClick={()=>openInNewTab("https://github.com/JBrown9124")}>
            <FaGithub></FaGithub>
        </Button>
        </div>
        <div>
        <Button className="email">
            <AiOutlineMail></AiOutlineMail>
        </Button>
        </div>
        
        </ButtonGroup> */}
<Row>
    <Col xl={"auto"} xs={2} md={"auto"}>
      <SocialIconsBoop afterColor={"rgba(115,199,204,1)"} rotation={0} x={0} y={-6}>
        <Tooltip TransitionComponent={Zoom} title="LinkedIn">
          <div>
            <FaLinkedin
              type="button"
              onClick={() =>
                openInNewTab(
                  "https://www.linkedin.com/in/jonathan-brown-858814201/"
                )
              }
              className="linkedInIcon"
            ></FaLinkedin>
          </div>
        </Tooltip>
      </SocialIconsBoop>
      </Col>
      <Col xl={"auto"} xs={2} md={"auto"}>
      <SocialIconsBoop afterColor={"rgba(115,199,204,1)"} rotation={0} x={0} y={-6}>
        <Tooltip TransitionComponent={Zoom} title="GitHub">
          <div>
            <FaGithub
              type="button"
              className="githubIcon"
              onClick={() => openInNewTab("https://github.com/JBrown9124")}
            ></FaGithub>
          </div>
        </Tooltip>
      </SocialIconsBoop>
      </Col>
      <Col xl={"auto"} xs={1} md={"auto"}>
      <SocialIconsBoop afterColor={"rgba(115,199,204,1)"} rotation={0} x={6} y={0}>
        {/* <AiOutlineMail
          type="button"
          className="emailIcon"
          onClick={() =>
            window.open(
              "mailto:brownjs193@gmail.com?subject=Subject&body=Body%20goes%20here"
            )
          }
        ></AiOutlineMail> */}
         <Typography variant="body2">
        <div className="emailLink">
          <Link
            type="button"
            onClick={() =>
              window.open(
                "mailto:brownjs193@gmail.com?subject=Subject&body=Body%20goes%20here"
              )
            }
            underline="none"
            color={"rgb(255, 255, 255)"}
          >
           brownjs193@gmail.com 
          </Link>
        </div>
        </Typography>
      </SocialIconsBoop>
      </Col>
      </Row>
    </>
  );
}
