import React from "react";
import DoOrDoNotVid from "../images/DoOrDoNotVid.webm";
import LoveAndPain from "../images/LoveAndPain.webm";
import AnalyzeThis from "../images/AnalyzeThis.webm";
import Typography from "@mui/material/Typography";
import VisibilitySensor from "react-visibility-sensor";
import FadeIn from "../animators/FadeIn.js";
import Grid from "@mui/material/Grid";
import WorkProject from "../components/Work/WorkProject";

export default function Work(props) {
  function openInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <>
      <Grid container direction="column" spacing={1}>
        <Grid item>
          <VisibilitySensor partialVisibility={true}>
            {({ isVisible }) => (
              <FadeIn delay={0} isVisible={isVisible} y={-40}>
                <div className="separator">
                  <Typography variant="h4"> Personal Projects</Typography>
                </div>
              </FadeIn>
            )}
          </VisibilitySensor>
        </Grid>
        <Grid item>
          <VisibilitySensor partialVisibility={true}>
            {({ isVisible }) => (
              <FadeIn isVisible={isVisible} y={-40}>
                <WorkProject
                  videoUrl={"Coming Soon"}
                  githubUrl={"https://github.com/JBrown9124/tic_tac_toe_online"}
                  projectUrl={"https://tic-tac-toe-royale.herokuapp.com/"}
                  title={"Tic-Tac-Toe Royale"}
                  infoParagraph1={
                    "Created a full-stack online web game. Players are able to set board size, board color, “win by” condition (amount of pieces in a row required to win) and pieces (upload custom piece capability included)."
                  }
                  infoParagraph2={
                    "Capable of having up to 100 players per board. Bots, lobby browser capability and many more features are coming soon. "
                  }
                  infoParagraph3={
                    " Client was created with TypeScript React.js, the REST API with Python (Django), and real-time client updates are handled with Socket.IO."
                  }
                  technologiesUsed={[
                    "Python",
                    "Django",
                    "TypeScript",
                    "React.js",
                    "Socket.IO",
                    "Heroku",
                  ]}
                />
              </FadeIn>
            )}
          </VisibilitySensor>
        </Grid>
        <Grid item>
          <VisibilitySensor partialVisibility={true}>
            {({ isVisible }) => (
              <FadeIn isVisible={isVisible} y={-40}>
                <WorkProject
                  videoUrl={AnalyzeThis}
                  githubUrl={"https://github.com/JBrown9124/Analyze-This"}
                  projectUrl={"https://analyze-this1.herokuapp.com/"}
                  title={"Analyze This"}
                  infoParagraph1={
                    " Created a full-stack web application that parses strings for signs of mental illness. Results help provide support to the user. At the moment, it detects signs of suicide, anger, and addiction."
                  }
                  infoParagraph2={
                    "To analyze strings, I developed an algorithm that works with a large pool of words to find determinants of mental illness. Determinant words must be in a certain order to be flagged."
                  }
                  infoParagraph3={
                    "Analysis results and Google Maps/Places API are used to find the nearest support facilities (rehab, support groups, etc.) and resources. Client was created with TypeScript React.js, the REST API with Python (Django), and data is stored and queried from Firestore (NoSQL)."
                  }
                  technologiesUsed={[
                    "Python",
                    "Django",
                    "TypeScript",
                    "React.js",
                    "Firestore",
                    "Firebase",
                    "Heroku",
                  ]}
                />
              </FadeIn>
            )}
          </VisibilitySensor>
        </Grid>

        <Grid item>
          <VisibilitySensor partialVisibility={true}>
            {({ isVisible }) => (
              <FadeIn isVisible={isVisible} y={-40}>
                <WorkProject
                  videoUrl={DoOrDoNotVid}
                  githubUrl={"https://github.com/JBrown9124/Do-or-Do-Not"}
                  projectUrl={"https://do-or-do-not-1.herokuapp.com"}
                  title={"Do or Do Not"}
                  infoParagraph1={
                    "Created a social task-managing full-stack web application. Allows you to create, share, edit (drawing and image importing features included), and complete tasks with users on your friends list."
                  }
                  infoParagraph2={
                    "Includes user authentication, a friends list (received and sent friend requests) and friend alerts (ex. notifying a user when a friend has completed a shared task)."
                  }
                  infoParagraph3={
                    "Client was created with React.js, the REST API with Python (Django), and data is stored and queried from PostgreSQL (NoSQL)."
                  }
                  technologiesUsed={[
                    "Python",
                    "Django",
                    "PostgreSQL",
                    "JavaScript",
                    "React.js",
                    "Heroku",
                  ]}
                />
              </FadeIn>
            )}
          </VisibilitySensor>
        </Grid>

        <Grid item>
          <VisibilitySensor partialVisibility={true}>
            {({ isVisible }) => (
              <FadeIn isVisible={isVisible} y={-40}>
                <WorkProject
                  videoUrl={LoveAndPain}
                  githubUrl={
                    "https://github.com/JBrown9124/Love-and-Pain-Experiment-Python-Flask-SQLAlchemy-MySQL-React.js"
                  }
                  projectUrl={"https://love-and-pain-survey.herokuapp.com/home"}
                  title={"The Love and Pain Experiment"}
                  infoParagraph1={
                    " Created a full-stack web application to process data for an experimental questionnaire."
                  }
                  infoParagraph2={
                    "Client was created with React.js, the REST API with Python (Flask), and questions, possible answers, and user input are stored in a MySQL database."
                  }
                  infoParagraph3={
                    "Upon completion, a chart is displayed which is meant to prove a psychological theory. "
                  }
                  technologiesUsed={[
                    "Python",
                    "Flask",
                    "JavaScript",
                    "React.js",
                    "MySQL",
                    "Heroku",
                  ]}
                />
              </FadeIn>
            )}
          </VisibilitySensor>
        </Grid>
      </Grid>
    </>
  );
}

