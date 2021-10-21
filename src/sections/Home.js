import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import profPic from "../images/profPic.jpg";
import SocialButtons from "../components/SocialButtons.js";
import ProfPicBoop from "../animators/ProfPicBoop.js";
import Typography from "@mui/material/Typography";

import FadeIn from "../animators/FadeIn.js";
import VisibilitySensor from "react-visibility-sensor";
export default function Home(props) {
  return (
    <div>
      <VisibilitySensor partialVisibility={true}>
        {({ isVisible }) => (
          <Row xs={"auto"} xl={"auto"}>
            <Col xs={7} xl={8}>
              <FadeIn delay={750} isVisible={isVisible} y={-40}>
                <Typography variant="h2">Welcome, I am</Typography>
              </FadeIn>

              <FadeIn delay={900} isVisible={isVisible} y={-40}>
                <Typography variant="h1" className="nameText">
                  Jonathan Brown.
                </Typography>
              </FadeIn>

              <FadeIn delay={1050} isVisible={isVisible} y={-40}>
                <Typography variant="h3" className="whoText">
                  A full-stack software engineer.
                </Typography>
              </FadeIn>

              <FadeIn delay={1200} isVisible={isVisible} y={-40}>
                <div className="socialButtons">
                  <SocialButtons />
                </div>
              </FadeIn>
            </Col>
            <Col xs={5} xl={4}>
              <FadeIn delay={1350} isVisible={isVisible} y={-40}>
                <div className="profPicContainer">
                  <ProfPicBoop>
                    <Image className="profPic" src={`${profPic}`} fluid />
                  </ProfPicBoop>
                </div>
              </FadeIn>
            </Col>
          </Row>
        )}
      </VisibilitySensor>
    </div>
  );
}
