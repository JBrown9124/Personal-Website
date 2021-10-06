import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import Typography from "@mui/material/Typography";
import CertificateBoop from "../animators/CertificateBoop";
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
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
    fontFamily: "'Pacifico', cursive;",
    color: "#015249!important",
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
  fontFamily: "'Pacifico', cursive;",
  color: "#015249!important",
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
    fontFamily: "'Pacifico', cursive;",
    color: "#015249!important",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  //   borderTop: '1px solid rgba(0, 0, 0, .125)',
  background:
    theme.palette.mode === "dark"
      ? "linear-gradient(90deg, rgba(115,199,204,1) 39%, rgba(87,188,144,1) 100%)"
      : "linear-gradient(90deg, rgba(115,199,204,1) 39%, rgba(87,188,144,1) 100%)",
  fontFamily: "'Pacifico', cursive;",
  color: "#015249!important",
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
  const [expanded1, setExpanded1] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded1(newExpanded ? panel : false);
  };

  return (
    <>
        <Accordion
          expanded={expanded1}
          onChange={()=>setExpanded1(!expanded1)}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography className="accordionTitle">
              Technologies I use
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="accordionText">
              <Container fluid>
                <Row>
                  {myTechnologies.map((tech, idx) => (
                    <Col xl={4}>
                      <ul key={idx}>
                        <DoubleArrowIcon />
                        {tech}
                      </ul>
                    </Col>
                  ))}
                </Row>
              </Container>
            </Typography>
          </AccordionDetails>
        </Accordion>
      
        <Accordion
          expanded={expanded2}
          onChange={()=>setExpanded2(!expanded2)}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography className="accordionTitle">Certificates</Typography>
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
      </>
  );
}
