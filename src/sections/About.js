import React from "react";

import Typography from "@mui/material/Typography";
import Accordion from "../components/Accordion";

import Accordion2 from "../components/Accordion2.js";
import VisibilitySensor from "react-visibility-sensor";
import FadeIn from "../animators/FadeIn.js";
import Grid from "@mui/material/Grid";
export default function About(props) {
  return (
    <Grid container direction="column">
      <Grid item>
        <VisibilitySensor>
          {({ isVisible }) => (
            <FadeIn delay={0} isVisible={isVisible} y={-40}>
              <div className="separator">
                <Typography variant="h4"> About Me</Typography>
              </div>
            </FadeIn>
          )}
        </VisibilitySensor>
      </Grid>

      <VisibilitySensor>
        {({ isVisible }) => (
          <FadeIn delay={0} isVisible={isVisible} y={-40}>
            <Grid
              container
              sx={{ marginBottom: "15px" }}
              spacing={2}
              columns={2}
            >
              <Grid direction="column" spacing={2} item container md={1} xs={2}>
                <Grid item>
                  <Typography variant="body2">
                    Greetings friend! My name is Jonathan and I have a passion
                    for creating things through the art of code. My software
                    engineer journey began in 2018 with a couple of textbooks
                    and a strong passion for the inner workings of computers.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                    Since then I have taken online courses on data structures
                    and algorithms, built full-stack applications, and solved
                    countless LeetCode problems, all for the benefit of deeply
                    understanding what it means to be a professional software
                    engineer.
                  </Typography>
                </Grid>
              </Grid>
              <Grid item md={1} xs={2}>
                <Typography variant="body2">
                  But my journey doesn't end there. Everyday I am learning
                  something new and exciting. Whether it's a new language,
                  framework or library, my cravings for a deeper understanding
                  of software development never cease! Directly below are the
                  technologies I currently use as well as the certificates I
                  have received.
                </Typography>
              </Grid>
            </Grid>
          </FadeIn>
        )}
      </VisibilitySensor>
      <Grid item>
        <VisibilitySensor partialVisibility={true}>
          {({ isVisible }) => (
            <FadeIn delay={150} isVisible={isVisible} y={-40}>
              <Grid container columns={2}>
                <Grid item xs={1}>
                  <Accordion />
                </Grid>
                <Grid item xs={1}>
                  <Accordion2 />
                </Grid>
              </Grid>
            </FadeIn>
          )}
        </VisibilitySensor>
      </Grid>
    </Grid>
  );
}
