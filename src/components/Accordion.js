import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Link from "@mui/material/Link";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import theme from "../themes/theme1";
import CertificateBoop from "../animators/CertificateBoop";
import VisibilitySensor from "react-visibility-sensor";
import FadeIn from "../animators/FadeIn.js";
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
  Placeholder,
} from "react-bootstrap";
import LinkUnderline from "../animators/LinkUnderline";

import CourseraCertificate1 from "../images/CourseraCertificate1.png";
import CourseraCertificate2 from "../images/CourseraCertificate2.png";
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  //   border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: "none",
  },
  "&:before": {
    display: "none",

    color: "#015249!important",
    borderBottom: "none",
  },
}));

function openInNewTab(url) {
  var win = window.open(url, "_blank");
  win.focus();
}
const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  background:
    theme.palette.mode === "dark"
      ? "#5c6bc0"
      : "#5c6bc0 ",

  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    background:
      theme.palette.mode === "dark"
        ? "#5c6bc0"
        : "#5c6bc0 ",
    marginLeft: theme.spacing(1),
    borderBottom: "none",
    
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  //   borderTop: '1px solid rgba(0, 0, 0, .125)',
  background:
    theme.palette.mode === "dark"
      ? "#5c6bc0"
      : "#5c6bc0 ",
 
  borderBottom: "none",
}));
const Accordion2 = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  //   border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: "none",
  },
  "&:before": {
    display: "none",

    color: "#5c6bc0",
    borderBottom: "none",
  },
}));


const AccordionSummary2 = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  background:
    theme.palette.mode === "dark"
      ? "linear-gradient(90deg, rgba(115,199,204,1) 39%, rgba(87,188,144,1) 100%)"
      : "#5c6bc0",

  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    background:
      theme.palette.mode === "dark"
        ? "linear-gradient(90deg, rgba(115,199,204,1) 39%, rgba(87,188,144,1) 100%)"
        : "#5c6bc0",
    marginLeft: theme.spacing(1),
    borderBottom: "none",
    
  },
}));

const AccordionDetails2 = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  //   borderTop: '1px solid rgba(0, 0, 0, .125)',
  background:
    theme.palette.mode === "dark"
      ? "linear-gradient(90deg, rgba(115,199,204,1) 39%, rgba(87,188,144,1) 100%)"
      : "#5c6bc0",
 
  borderBottom: "none",
}));

const myTechnologies = [
  { tech: "Python", link: "https://www.python.org/doc/essays/blurb/" },
  {
    tech: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript",
  },
  { tech: "React.js", link: "https://reactjs.org/" },
  { tech: "Django", link: "https://www.djangoproject.com/" },
  { tech: "Flask", link: "https://pythonbasics.org/what-is-flask-python/" },
  { tech: "SQLAlchemy", link: "https://www.sqlalchemy.org/" },
  { tech: "MaterialUI", link: "https://mui.com/company/about/" },
  { tech: "Bootstrap", link: "https://react-bootstrap.github.io/" },
  { tech: "PostgreSQL", link: "https://www.postgresql.org/" },
  { tech: "Git", link: "https://git-scm.com/" },
  { tech: "GitHub", link: "https://kinsta.com/knowledgebase/what-is-github/" },
  { tech: "Heroku", link: "https://www.heroku.com/what" },
];
export default function CustomizedAccordions() {
  const [expanded1, setExpanded1] = React.useState(true);
  const [expanded2, setExpanded2] = React.useState(true);
  const [accordion2Visible, setAccordion2Visible] = React.useState(false);
  const [accordion1Visible, setAccordion1Visible] = React.useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded1(newExpanded ? panel : false);
  };

  return (
    <Row>
      <Col>
        <VisibilitySensor>
          {({ isVisible }) => (
            <FadeIn
              delay={200}
              isVisible={accordion1Visible || accordion2Visible}
              y={-40}
            >
              {isVisible ? setAccordion1Visible(true) : ""}
              <Accordion
                key={1}
                disableGutters
                expanded={expanded1}
                onChange={() => setExpanded1(!expanded1)}
              >
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <ThemeProvider theme={theme}>
                    <Typography variant="h6" className="accordionTitle">
                      Technologies I Use
                    </Typography>
                  </ThemeProvider>
                </AccordionSummary>
                <AccordionDetails>
                  <ThemeProvider theme={theme}>
                    <Typography variant="body1" className="accordionText">
                      <Row>
                        {myTechnologies.map((tech, idx) => (
                          <Col xl={4} xs={10} lg={4} sm={7}>
                            <LinkUnderline
                              top={"65%"}
                              width={"80%"}
                              background={"rgba(115,199,204,1)"}
                            >
                              <DoubleArrowIcon
                                sx={{ color: "rgba(115,199,204,1)", fontSize: "0.7rem" }}
                              />
                              <Link
                                key={idx}
                                type="button"
                                onClick={() => openInNewTab(tech.link)}
                                underline="none"
                                color={"#e0f7fa"}
                              
                              >
                                <div className="tech">
                                {tech.tech}</div>
                              </Link>
                            </LinkUnderline>
                          </Col>
                        ))}
                      </Row>
                    </Typography>
                  </ThemeProvider>
                </AccordionDetails>
              </Accordion>
            </FadeIn>
          )}
        </VisibilitySensor>
      </Col>
      <Col>
        <VisibilitySensor>
          {({ isVisible }) => (
            <FadeIn
              delay={300}
              isVisible={accordion1Visible || accordion2Visible}
              y={-40}
            >
              {isVisible ? setAccordion2Visible(true) : ""}
              <Accordion2
                key={2}
                disableGutters
                expanded={expanded2}
                onChange={() => setExpanded2(!expanded2)}
              >
                <AccordionSummary2
                  aria-controls="panel2d-content"
                  id="panel2d-header"
                >
                  <ThemeProvider theme={theme}>
                    <Typography variant="h6" className="accordionTitle">
                      Certificates
                    </Typography>
                  </ThemeProvider>
                </AccordionSummary2>
                <AccordionDetails2>
                  <Typography className="accordionText">
                    <Container fluid>
                      <Row>
                        <Col>
                          <CertificateBoop>
                            <Image
                              type="button"
                              src={CourseraCertificate1}
                              onClick={() =>
                                openInNewTab(
                                  "https://www.coursera.org/account/accomplishments/certificate/YL6AHDSWBFU6"
                                )
                              }
                              fluid
                            />
                          </CertificateBoop>
                        </Col>
                        <Col>
                          <CertificateBoop>
                            <Image
                              type="button"
                              src={CourseraCertificate2}
                              onClick={() =>
                                openInNewTab(
                                  "https://www.coursera.org/account/accomplishments/certificate/8HN48YFWNRAQ"
                                )
                              }
                              fluid
                            />
                          </CertificateBoop>
                        </Col>
                      </Row>
                    </Container>
                  </Typography>
                </AccordionDetails2>
              </Accordion2>
            </FadeIn>
          )}
        </VisibilitySensor>
      </Col>
    </Row>
  );
}
