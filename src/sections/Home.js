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
export default function Home(props) {
  return (
    <>
      <Row xs={"auto"}>
        <Col  xs={"auto"}xl={8}>
          <p className="introductionText">Welcome, I am</p>

          <h1 className="nameText">Jonathan Brown</h1>

          <p className="whoText">
            {" "}
            I'm a software engineer who likes to build things.
          </p>
          <div className="socialButtons">
            <SocialButtons />
          </div>
        </Col>
        <Col  xs={"auto"} xl={4}>
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
