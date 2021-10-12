import React, { useState } from "react";
import {
 
  Row,
  Col,
  Image,
} from "react-bootstrap";
import profPic from "../images/profPic.jpg";
import SocialButtons from "../components/SocialButtons.js";
import ProfPicBoop from "../animators/ProfPicBoop.js";

import Typography from "@mui/material/Typography";

import FadeIn from "../animators/FadeIn.js";
import VisibilitySensor from "react-visibility-sensor";
export default function Home(props) {
  const [welcomeVisible, setWelcomeVisible] = useState(false);
  

  return (
    <div>
      <Row xs={"auto"} xl={"auto"}>
        <Col xs={7} xl={8}>
          <VisibilitySensor>
            {({ isVisible }) => (
              <FadeIn delay={1400} isVisible={welcomeVisible} y={-40}>
                {isVisible ? setWelcomeVisible(true) : null}

                <Typography variant="h2">Welcome, I am</Typography>
              </FadeIn>
            )}
          </VisibilitySensor>
        
              <FadeIn delay={1600} isVisible={welcomeVisible} y={-40}>
               
                <Typography variant="h1" className="nameText">
                  Jonathan Brown.
                </Typography>
              </FadeIn>
        
        
              <FadeIn delay={1800} isVisible={welcomeVisible} y={-40}>
            
                <Typography variant="h3" className="whoText">
                  A creator, designer, and software engineer.
                </Typography>
                </FadeIn>
         
              <FadeIn delay={2000} isVisible={welcomeVisible} y={-40}>
                
                <div className="socialButtons">
                  <SocialButtons />
                </div>
                </FadeIn>
      
        </Col>
        <Col xs={5} xl={4}>
          
              <FadeIn delay={2200} isVisible={welcomeVisible} y={-40}>
                <div className="profPicContainer">
                  <ProfPicBoop>
                    <Image className="profPic" src={`${profPic}`} fluid />
                  </ProfPicBoop>
                </div>
              </FadeIn>
           
        </Col>
      </Row>
    </div>
  );
}
