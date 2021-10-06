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
import {FaLinkedin, FaGithub} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import SocialIconsBoop from "../animators/SocialIconsBoop.js"

export default function SocialButtons(props){
    function openInNewTab(url) {
        var win = window.open(url, '_blank');
        win.focus();
      }

    return(
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
        
        <SocialIconsBoop rotation={0} x={0} y={-4} timing={200}>
        <FaLinkedin type="button" onClick={()=>openInNewTab("https://www.linkedin.com/in/jonathan-brown-858814201/")} className="linkedInIcon"></FaLinkedin>
        </SocialIconsBoop>
        <SocialIconsBoop rotation={0} x={0} y={-4} timing={200}>
        <FaGithub type="button" className="githubIcon" onClick={()=>openInNewTab("https://github.com/JBrown9124")}></FaGithub>
        </SocialIconsBoop>
        <SocialIconsBoop rotation={0} x={0} y={-4} timing={200}>
        <AiOutlineMail  type="button" className="emailIcon" onClick={()=>window.open('mailto:brownjs193@gmail.com?subject=Subject&body=Body%20goes%20here')}></AiOutlineMail>
        </SocialIconsBoop>

      
        </>
    )

}