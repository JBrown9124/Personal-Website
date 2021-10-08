import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Accordion from "../components/Accordion";
import DoOrDoNotVid from "../images/DoOrDoNotVid.webm";
import LoveAndPain from "../images/LoveAndPain.webm";
import DiscordUtilityBot from "../images/DiscordUtilityBot.webm";
import ReactPlayer from "react-player";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DoOrDoNotPic1 from "../images/DoOrDoNotPic1.png";
import DoOrDoNotPic2 from "../images/DoOrDoNotPic2.png";
import Divider from "@mui/material/Divider";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import theme from "../themes/theme1";
import CardBoop from "../animators/CardBoop.js";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import SocialIconsBoop from "../animators/SocialIconsBoop.js";
import VisibilitySensor from "react-visibility-sensor";
import FadeIn from "../animators/FadeIn.js";

export default function Work(props) {
  const [titleVisible, setTitleVisible] = useState(false);
  const [doVisible, setDoVisible] = useState(false);
  const [loveVisible, setLoveVisible] = useState(false);
  const [discordVisible, setDiscordVisible] = useState(false);
  function openInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  const handleDoOrDoNot = () => {
    openInNewTab("https://do-or-do-not-1.herokuapp.com");
  };
  return (
    <>
      <Container fluid>
      <VisibilitySensor>
              {({ isVisible }) => (
                <FadeIn isVisible={titleVisible} y={-40}>
                  {isVisible ? setTitleVisible(true) : false}
        <div>
        <Row>
          <Col>
            <Divider
              orientation="horizontal"
              textAlign="Center"
              sx={{ marginBottom: "20px" }}
              flexItem
            >
              <Typography variant="h4" > Personal projects</Typography>
            </Divider>
          </Col>
        </Row>
        </div>
            
        </FadeIn>
              )}
            </VisibilitySensor>
        <Row className="centerRow">
          <Col xs={"auto"} >
            <VisibilitySensor>
              {({ isVisible }) => (
                <FadeIn isVisible={doVisible} y={-40}>
                  {isVisible ? setDoVisible(true) : false}
                
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
                          <Typography
                            className="doText"
                            variant="body2"
                            color="text.secondary"
                          >
                            Developed and deployed a social task managing web
                            application that allows you to share, edit, delete,
                            create (drawing and image importing features
                            included) and complete tasks with users on your
                            friends list. Also handles useful social functions
                            such as user authentication, a friends list
                            (received and sent friend requests) and friend
                            alerts (ex. notifying a user when a friend has
                            completed a shared task).Uses Django as the backend
                            web framework and React.js as the frontend library.
                            All data is queried from and stored in a PostgreSQL
                            database using a ReST API developed with Django.
                          </Typography>
                        </CardContent>
                        <div className="socialCardIcons">
                          <SocialIconsBoop
                            beforeColor={"black"}
                            afterColor={"#77C9D4"}
                            rotation={0}
                            x={0}
                            y={-4}
                            timing={200}
                          >
                            <FaGithub
                              type="button"
                              className="githubIcon"
                              onClick={() =>
                                openInNewTab("https://github.com/JBrown9124/Do-or-Do-Not")
                              }
                            ></FaGithub>
                          </SocialIconsBoop>
                          <SocialIconsBoop
                            beforeColor={"black"}
                            afterColor={"#77C9D4"}
                            rotation={0}
                            x={0}
                            y={-4}
                            timing={200}
                          >
                            <FiExternalLink
                              type="button"
                              className="githubIcon"
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
</Row>
<Row className="centerRow">
          <Col xs={"auto"} >
          
              <VisibilitySensor>
                {({ isVisible }) => (
                  <FadeIn isVisible={loveVisible} y={-40}>
                    {isVisible ? setLoveVisible(true) : false}
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
                          <Typography
                            className="loveText"
                            variant="body2"
                            color="text.secondary"
                          >
                            Developed and deployed a web application to process
                            data for an experimental questionnaire. The
                            questions, possible answers, and user input is
                            stored in a MySQL database. A Python based ReST API
                            queries and manipulates the data. The frontend web
                            app uses React.js to present the survey. Upon
                            completion, a chart is displayed which is meant to
                            prove a psychological theory.
                          </Typography>
                        </CardContent>
                        <div className="socialCardIcons">
                          <SocialIconsBoop
                            beforeColor={"#2b6777"}
                            afterColor={"#52ab98"}
                            rotation={0}
                            x={0}
                            y={-4}
                            timing={200}
                          >
                            <FaGithub
                              type="button"
                              className="githubIcon"
                              onClick={() =>
                                openInNewTab("https://github.com/JBrown9124/Love-and-Pain-Experiment-Python-Flask-SQLAlchemy-MySQL-React.js")
                              }
                            ></FaGithub>
                          </SocialIconsBoop>
                          <SocialIconsBoop
                            beforeColor={"#2b6777"}
                            afterColor={"#52ab98"}
                            rotation={0}
                            x={0}
                            y={-4}
                            timing={200}
                          >
                            <FiExternalLink
                              type="button"
                              className="githubIcon"
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
          <Col xs={"auto"}>
         
              <VisibilitySensor>
                {({ isVisible }) => (
                  <FadeIn isVisible={discordVisible} y={-40}>
                    {isVisible ? setDiscordVisible(true) : false}
                    <CardBoop>
                    <div className="cardDivider">
                    <Card className="discordContainer" sx={{ maxWidth: 400 }}>
                      <Container>
                        <div className="player-wrapper">
                          <ReactPlayer
                            playing={true}
                            className="react-player"
                            url={DiscordUtilityBot}
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
                            Discord Utility Bot{" "}
                          </Typography>
                          <Typography
                            className="discordInfo"
                            variant="body2"
                            color="text.secondary"
                          >
                            Developed a Discord bot that performs a variety of
                            functions for users such as calling a Lord of the
                            Rings or Star Wars ReST API which returns a random
                            quote. The random quote along with the character’s
                            name who said it are then placed in a YouTube search
                            to pair its respective movie scene in the response
                            to the user. Other functions include but are not
                            limited to playing music per request and remembering
                            user provided information (stores memories in a
                            MySQL database).
                          </Typography>
                        </CardContent>
                        <div className="socialCardIcons">
                          <SocialIconsBoop
                            rotation={0}
                            x={0}
                            y={-4}
                            timing={200}
                          >
                            <FaGithub
                              type="button"
                              className="githubIcon"
                              onClick={() =>
                                openInNewTab("https://github.com/JBrown9124/Discord_Utility_Bot")
                              }
                            ></FaGithub>
                          </SocialIconsBoop>
                          <SocialIconsBoop
                            rotation={0}
                            x={0}
                            y={-4}
                            timing={200}
                          >
                            <FiExternalLink
                              type="button"
                              className="githubIcon"
                              onClick={() =>
                                openInNewTab(
                                  "https://discord.com/"
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
        {/* <Accordion flush>
  <Accordion.Item eventKey="0" >
    <Accordion.Header>Technlogies I use</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
 
</Accordion> */}
      </Container>
    </>
  );
}
