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
export default function Home(props) {
  return (
    <>
  
      
          <p className="introductionText">Welcome, I am</p>
       
      
<h1 className="nameText">Jonathan Brown</h1>




<p className="whoText"> I'm a software engineer who likes to build things.</p>
<div  className="socialButtons">
<SocialButtons/>
</div>

            
        


      
    </>
  );
}
