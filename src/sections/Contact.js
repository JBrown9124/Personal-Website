import React, { useState } from "react";
import {
  
  Container,
 
} from "react-bootstrap";
import Typography from "@mui/material/Typography";
import VisibilitySensor from "react-visibility-sensor";
import FadeIn from "../animators/FadeIn.js";
import WorkButton from "../components/WorkButton.js";

export default function Contact(props) {
  
  

  return (
    <>
      <Container>
        <VisibilitySensor>
          {({ isVisible }) => (
            <FadeIn delay={0}  isVisible={isVisible} y={-40}>
              {/* {isVisible ? setTitleVisible(true) : ""} */}

              <div className="separator">
                <Typography  variant="h4"> Start a Dialogue</Typography>
              </div>
            </FadeIn>
          )}
        </VisibilitySensor>
        <Container>
          
            <Container>
              <VisibilitySensor>
                {({ isVisible }) => (
                  <FadeIn  delay={0} isVisible={isVisible} y={-40}>
                 
                    <Typography className="contactText" variant="body2">
                      I am currently in the process of finding a software
                      engineer position.
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
                      <WorkButton />
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
