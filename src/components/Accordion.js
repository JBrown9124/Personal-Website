import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider,  } from '@material-ui/core/styles';
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import theme from "../themes/theme1"
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
    borderBottom: "none"
  },
}));

function openInNewTab(url) {
    var win = window.open(url, '_blank');
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
      ? "linear-gradient(90deg, rgba(115,199,204,1) 39%, rgba(87,188,144,1) 100%)"
      : "linear-gradient(90deg, rgba(115,199,204,1) 39%, rgba(87,188,144,1) 100%)",
    
  
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    background:
      theme.palette.mode === "dark"
        ? "linear-gradient(90deg, rgba(115,199,204,1) 39%, rgba(87,188,144,1) 100%)"
        : "linear-gradient(90deg, rgba(115,199,204,1) 39%, rgba(87,188,144,1) 100%)",
    marginLeft: theme.spacing(1),
    borderBottom: "none"
    
    
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  //   borderTop: '1px solid rgba(0, 0, 0, .125)',
  background:
    theme.palette.mode === "dark"
      ? "linear-gradient(90deg, rgba(115,199,204,1) 39%, rgba(87,188,144,1) 100%)"
      : "linear-gradient(90deg, rgba(115,199,204,1) 39%, rgba(87,188,144,1) 100%)",
   
      borderBottom: "none"
  
}));

const myTechnologies = [
  "Python",
  "JavaScript",
  "React.js",
  "Django",
  "Flask",
  "SQLAlchemy",
  "Bootstrap",
  "PostgreSQL",
  "MySQL",
  "Git",
  "GitHub",
  "Heroku",
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
                  <FadeIn isVisible={accordion1Visible} y={-40}>
                    {isVisible ? setAccordion1Visible(true) : ""}
        <Accordion
        
        disableGutters
          expanded={expanded1}
          onChange={()=>setExpanded1(!expanded1)}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <ThemeProvider theme={theme}>
            <Typography  variant="h6" className="accordionTitle">
              Technologies I use
            </Typography>
            </ThemeProvider>
          </AccordionSummary>
          <AccordionDetails>
          <ThemeProvider theme={theme}>
            <Typography  variant="body1" className="accordionText">
             
                <Row  >
                  {myTechnologies.map((tech, idx) => (
                    <Col xl={3} xs={"auto"}>
                      <ul key={idx}>
                        <DoubleArrowIcon sx={{ fontSize: "0.7rem" }}/>
                        {tech}
                      </ul>
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
                  <FadeIn isVisible={accordion2Visible} y={-40}>
                    {isVisible ? setAccordion2Visible(true) : ""}
        <Accordion
        disableGutters
          expanded={expanded2}
          onChange={()=>setExpanded2(!expanded2)}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <ThemeProvider theme={theme}>
            <Typography  variant="h6" className="accordionTitle">
              Certificates
            </Typography>
            </ThemeProvider>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="accordionText">
              <Container fluid>
                <Row>
                  <Col >
                  <CertificateBoop>
                    <Image type="button" src={CourseraCertificate1} onClick={()=>openInNewTab("https://www.coursera.org/account/accomplishments/certificate/YL6AHDSWBFU6")}fluid/>
                    </CertificateBoop>
                  </Col>
                  <Col >
                  <CertificateBoop>
                    <Image type="button" src={CourseraCertificate2 } onClick={()=>openInNewTab("https://www.coursera.org/account/accomplishments/certificate/8HN48YFWNRAQ")}fluid/>
                    </CertificateBoop>
                  </Col>
                </Row>
              </Container>
            </Typography>
          </AccordionDetails>
        </Accordion>
        </FadeIn>
                )}
              </VisibilitySensor>
      </Col>
    </Row>
  );
}
