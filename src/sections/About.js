import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Typography from "@mui/material/Typography";
import Accordion from "../components/Accordion";

import Accordion2 from "../components/Accordion2.js";
import VisibilitySensor from "react-visibility-sensor";
import FadeIn from "../animators/FadeIn.js";

export default function About(props) {
  const [titleVisible, setTitleVisible] = useState(false);
  const [leftTextVisible, setLeftTextVisible] = useState(false);
  const [accordionVisible, setAccordionVisible] = useState(false);
  return (
    <Container fluid>
      <VisibilitySensor>
        {({ isVisible }) => (
          <FadeIn delay={0} isVisible={titleVisible} y={-40}>
            {isVisible ? setTitleVisible(true) : null}

            <div className="separator">
              <Typography variant="h4"> About Me</Typography>
            </div>
          </FadeIn>
        )}
      </VisibilitySensor>
      <Container>
        <VisibilitySensor>
          {({ isVisible }) => (
            <FadeIn delay={0} isVisible={leftTextVisible} y={-40}>
              {isVisible ? setLeftTextVisible(true) : null}
              <Row>
                <Col>
                  <div className="aboutText">
                    <Typography variant="body2">
                      Greetings friend! My name is Jonathan and I have a passion
                      for creating things through the art of code. My software
                      engineer journey began in 2018 with a couple of text books
                      and a strong passion for the inner workings of computers.
                    </Typography>
                  </div>

                  <Typography variant="body2">
                    Since then I have taken online courses on data structures
                    and algorithms, built full-stack applications, and solved
                    countless leetcode problems, all for the benefit of deeply
                    understanding what it means to be a professional software
                    engineer.
                  </Typography>
                </Col>

                <Col>
                  <Typography className="aboutText" variant="body2">
                    But my journey doesn't end there. Everyday I am learning
                    something new and exciting. Whether it's a new language,
                    framework or library, my cravings for a deeper understanding
                    of software development never cease! Directly below are the
                    technologies I currently use as well as the certificates I
                    have received.
                  </Typography>
                </Col>
              </Row>
            </FadeIn>
          )}
        </VisibilitySensor>
      </Container>
      <VisibilitySensor>
        {({ isVisible }) => (
          <FadeIn delay={0} isVisible={accordionVisible} y={-40}>
            {isVisible ? setAccordionVisible(true) : null}
            <div className="accordion">
              <Row>
                <Col>
                  <Accordion />
                </Col>
                <Col>
                  <Accordion2 />
                </Col>
              </Row>
            </div>
          </FadeIn>
        )}
      </VisibilitySensor>
    </Container>
  );
}
