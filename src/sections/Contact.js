import React from "react";
import Container from "react-bootstrap/Container";
import Typography from "@mui/material/Typography";
import VisibilitySensor from "react-visibility-sensor";
import FadeIn from "../animators/FadeIn.js";
import ContactButton from "../components/ContactButton.js";

export default function Contact(props) {
  return (
    <>
      <Container>
        <VisibilitySensor>
          {({ isVisible }) => (
            <FadeIn delay={0} isVisible={isVisible} y={-40}>
              <div className="separator">
                <Typography variant="h4"> Start a Dialogue</Typography>
              </div>
            </FadeIn>
          )}
        </VisibilitySensor>
        <Container>
          <Container>
            <VisibilitySensor>
              {({ isVisible }) => (
                <FadeIn delay={0} isVisible={isVisible} y={-40}>
                  <Typography className="contactText" variant="body2">
                    I am currently in the process of finding a software engineer
                    position.
                  </Typography>
                  <Typography className="contactText" variant="body2">
                    Please feel free contacting me about anything software
                    related!
                  </Typography>
                </FadeIn>
              )}
            </VisibilitySensor>
            <VisibilitySensor>
              {({ isVisible }) => (
                <FadeIn delay={0} isVisible={isVisible} y={-40}>
                  <div className="contactButton">
                    <ContactButton />
                  </div>
                </FadeIn>
              )}
            </VisibilitySensor>
          </Container>
        </Container>
      </Container>
    </>
  );
}
