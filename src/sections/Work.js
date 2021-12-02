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
      <Grid container direction="column" spacing={6}>
      
        <Grid item >
        <VisibilitySensor>
          {({ isVisible }) => (
            <FadeIn delay={0} isVisible={isVisible} y={-40}>
          <div className="separator">
          <Typography variant="h4"> Personal Projects</Typography></div>
          </FadeIn>
          )}
        </VisibilitySensor>
        </Grid>
      
      
        <Grid item>
        <VisibilitySensor >
              {({ isVisible }) => (
                <FadeIn  isVisible={isVisible} y={-40}>
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
        <VisibilitySensor >
              {({ isVisible }) => (
                <FadeIn  isVisible={isVisible} y={-40}>
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
        <VisibilitySensor >
              {({ isVisible }) => (
                <FadeIn  isVisible={isVisible} y={-40}>
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



{/*The Old
      {/* <Container fluid>
        <VisibilitySensor>
          {({ isVisible }) => (
            <FadeIn delay={0} isVisible={isVisible} y={-40}>
              <div className="separator">
                <Typography variant="h4"> Personal Projects</Typography>
              </div>
            </FadeIn>
          )}
        </VisibilitySensor>
        <Row className="centerRow">
        <Col
            xs={"auto"}
            sm={"auto"}
            md={"auto"}
            lg={"auto"}
            xl={"auto"}
            xxl={"auto"}
          >
            <VisibilitySensor partialVisibility={true}>
              {({ isVisible }) => (
                <FadeIn delay={150} isVisible={isVisible} y={-40}>
                  <CardBoop>
                    <div className="cardDivider">
                      <Card className="discordContainer" sx={{ maxWidth: 400 }}>
                        <Container>
                          <div className="player-wrapper">
                            <ReactPlayer
                              playing={true}
                              className="react-player"
                              url={AnalyzeThis}
                              width="100%"
                              height="100%"
                              muted={true}
                              loop={true}
                              controls
                            />
                          </div>
                          <CardContent className="discordInnerContainer">
                            <Typography
                              className="discordTitle"
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              Analyze This
                            </Typography>
                            <div className="pSeperator">
                              <Typography
                                className="discordInfo"
                                variant="body2"
                              >
                                Created a full-stack web application that parses
                                strings for signs of mental illness. Results
                                help provide support to the user. At the moment,
                                it detects signs of suicide, anger, and
                                addiction.
                              </Typography>
                            </div>
                            <div className="pSeperator">
                              <Typography
                                className="discordInfo"
                                variant="body2"
                              >
                                To analyze strings, I developed an algorithm
                                that works with a large pool of words to find
                                determinants of mental illness. Determinant
                                words must be in a certain order to be flagged.
                              </Typography>
                            </div>
                            <Typography className="discordInfo" variant="body2">
                              Analysis results and Google Maps/Places API are
                              used to find the nearest support facilities
                              (rehab, support groups, etc.) and resources.
                              Client was created with TypeScript React.js, the
                              REST API with Python (Django), and data is stored
                              and queried from Firestore (NoSQL).
                            </Typography>
                          </CardContent>
                          <div className="socialCardIcons">
                            <SocialIconsBoop
                              rotation={0}
                              x={0}
                              y={-6}
                              afterColor={"black"}
                            >
                              <Tooltip
                                title="GitHub"
                                TransitionComponent={Zoom}
                              >
                                <div>
                                  <FaGithub
                                    type="button"
                                    className="gitIcon"
                                    onClick={() =>
                                      openInNewTab(
                                        "https://github.com/JBrown9124/Analyze-This"
                                      )
                                    }
                                  ></FaGithub>
                                </div>
                              </Tooltip>
                            </SocialIconsBoop>
                            <SocialIconsBoop
                              rotation={0}
                              x={0}
                              y={-6}
                              afterColor={"black"}
                            >
                              <FiExternalLink
                                type="button"
                                className="linkIcon"
                                onClick={() =>
                                  openInNewTab("https://analyze-this1.herokuapp.com/")
                                }
                              ></FiExternalLink>
                            </SocialIconsBoop>
                          </div>
                        </Container>
                      </Card>
                    </div>
                  </CardBoop>
                </FadeIn>
              )}
            </VisibilitySensor>
          </Col>

          <Col
            xs={"auto"}
            sm={"auto"}
            md={"auto"}
            lg={"auto"}
            xl={"auto"}
            xxl={"auto"}
          >
            <VisibilitySensor partialVisibility={true}>
              {({ isVisible }) => (
                <FadeIn delay={300} isVisible={isVisible} y={-40}>
                  <CardBoop>
                    <div className="cardDivider">
                      <Card className="doContainer" sx={{ maxWidth: 400 }}>
                        <Container>
                          <div className="player-wrapper">
                            <ReactPlayer
                              playing={true}
                              className="react-player"
                              url={DoOrDoNotVid}
                              width="100%"
                              height="100%"
                              muted={true}
                              loop={true}
                              controls
                            />
                          </div>

                          <CardContent className="doInnerContainer">
                            <Typography
                              className="doTitle"
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              Do or Do Not
                            </Typography>

                            <div className="pSeperator">
                              <Typography className="doText" variant="body2">
                                Created a social task-managing full-stack web
                                application that allows you to create, share,
                                edit (drawing and image importing features
                                included), and complete tasks with users on your
                                friends list.
                              </Typography>
                            </div>
                            <div className="pSeperator">
                              <Typography className="doText" variant="body2">
                                Includes user authentication, a friends list
                                (received and sent friend requests) and friend
                                alerts (ex. notifying a user when a friend has
                                completed a shared task).
                              </Typography>
                            </div>
                            <Typography className="doText" variant="body2">
                              Uses Django as the back-end web framework and
                              React.js as the front-end library. All data is
                              queried from and stored in a PostgreSQL database
                              using a REST API developed with Django.
                            </Typography>
                          </CardContent>
                          <div className="socialCardIcons">
                            <SocialIconsBoop
                              beforeColor={"black"}
                              afterColor={"#77C9D4"}
                              rotation={0}
                              x={0}
                              y={-6}
                            >
                              <Tooltip
                                title="GitHub"
                                TransitionComponent={Zoom}
                              >
                                <div>
                                  <FaGithub
                                    type="button"
                                    className="gitIcon"
                                    onClick={() =>
                                      openInNewTab(
                                        "https://github.com/JBrown9124/Do-or-Do-Not"
                                      )
                                    }
                                  ></FaGithub>
                                </div>
                              </Tooltip>
                            </SocialIconsBoop>
                            <SocialIconsBoop
                              beforeColor={"black"}
                              afterColor={"#77C9D4"}
                              rotation={0}
                              x={0}
                              y={-6}
                            >
                              <FiExternalLink
                                type="button"
                                className="linkIcon"
                                onClick={() =>
                                  openInNewTab(
                                    "https://do-or-do-not-1.herokuapp.com"
                                  )
                                }
                              ></FiExternalLink>
                            </SocialIconsBoop>
                          </div>
                        </Container>
                      </Card>
                    </div>
                  </CardBoop>
                </FadeIn>
              )}
            </VisibilitySensor>
          </Col>

       
          <Col
            xs={"auto"}
            sm={"auto"}
            md={"auto"}
            lg={"auto"}
            xl={"auto"}
            xxl={"auto"}
          >
            <VisibilitySensor partialVisibility={true}>
              {({ isVisible }) => (
                <FadeIn delay={450} isVisible={isVisible} y={-40}>
                  <CardBoop>
                    <div className="cardDivider">
                      <Card className="loveContainer" sx={{ maxWidth: 400 }}>
                        <Container>
                          <div className="player-wrapper">
                            <ReactPlayer
                              playing={true}
                              className="react-player"
                              url={LoveAndPain}
                              width="100%"
                              height="100%"
                              muted={true}
                              loop={true}
                              controls
                            />
                          </div>
                          <CardContent className="loveInnerContainer">
                            <Typography
                              gutterBottom
                              className="loveTitle"
                              variant="h5"
                              component="div"
                            >
                              The Love and Pain Experiment
                            </Typography>

                            <div className="pSeperator">
                              <Typography className="loveText" variant="body2">
                                Created a full-stack web application to process
                                data for an experimental questionnaire.
                              </Typography>
                            </div>
                            <div className="pSeperator">
                              <Typography className="loveText" variant="body2">
                                The questions, possible answers, and user input
                                is stored in a MySQL database. Developed a Flask
                                REST API used to query and manipulate the data.
                              </Typography>
                            </div>
                            <Typography className="loveText" variant="body2">
                              The front-end library used to present the survey
                              is React.js. Upon completion, a chart is displayed
                              which is meant to prove a psychological theory.
                            </Typography>
                          </CardContent>
                          <div className="socialCardIcons">
                            <SocialIconsBoop
                              beforeColor={"#2b6777"}
                              afterColor={"#52ab98"}
                              rotation={0}
                              x={0}
                              y={-6}
                            >
                              <Tooltip
                                title="GitHub"
                                TransitionComponent={Zoom}
                              >
                                <div>
                                  <FaGithub
                                    type="button"
                                    className="gitIcon"
                                    onClick={() =>
                                      openInNewTab(
                                        "https://github.com/JBrown9124/Love-and-Pain-Experiment-Python-Flask-SQLAlchemy-MySQL-React.js"
                                      )
                                    }
                                  ></FaGithub>
                                </div>
                              </Tooltip>
                            </SocialIconsBoop>
                            <SocialIconsBoop
                              beforeColor={"#2b6777"}
                              afterColor={"#52ab98"}
                              rotation={0}
                              x={0}
                              y={-6}
                            >
                              <FiExternalLink
                                type="button"
                                className="linkIcon"
                                onClick={() =>
                                  openInNewTab(
                                    "https://love-and-pain-survey.herokuapp.com/home"
                                  )
                                }
                              ></FiExternalLink>
                            </SocialIconsBoop>
                          </div>
                        </Container>
                      </Card>
                    </div>
                  </CardBoop>
                </FadeIn>
              )}
            </VisibilitySensor>
          </Col>
        </Row>
        
      </Container> */}
