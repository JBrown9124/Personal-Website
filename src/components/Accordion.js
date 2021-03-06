import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";

import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Link from "@mui/material/Link";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LinkUnderline from "../animators/LinkUnderline";
import Grid from "@mui/material/Grid";
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
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ color: "#e0f7fa", fontSize: "0.9rem" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  background: theme.palette.mode === "dark" ? "#26418f" : "#26418f ",

  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    background: theme.palette.mode === "dark" ? "#26418f" : "#26418f ",
    marginLeft: theme.spacing(1),
    borderBottom: "none",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  //   borderTop: '1px solid rgba(0, 0, 0, .125)',
  background: theme.palette.mode === "dark" ? "#26418f" : "#26418f ",
  borderBottom: "none",
}));

const myTechnologies = [
  { tech: "Python", link: "https://www.python.org/doc/essays/blurb/" },
  {tech: "Node.js",link:"https://nodejs.org/en/"},
  {
    tech: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript",
  },
  { tech: "TypeScript", link: "https://www.typescriptlang.org/" },
  { tech: "React.js", link: "https://reactjs.org/" },
  {tech: "AngularJS",link:"https://angular.io/"},
  {tech:"Redux",link:"https://redux.js.org/"},
  {tech: "Socket.IO",link:"https://socket.io/"},
  { tech: "Django", link: "https://www.djangoproject.com/" },
  { tech: "Flask", link: "https://pythonbasics.org/what-is-flask-python/" },
  { tech: "SQLAlchemy", link: "https://www.sqlalchemy.org/" },
  { tech: "Material-UI", link: "https://mui.com/company/about/" },
  { tech: "Bootstrap", link: "https://react-bootstrap.github.io/" },
  { tech: "CSS", link: "https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS" },
  { tech: "HTML", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { tech: "SQL", link: "https://www.w3schools.com/sql/sql_intro.asp" },
  { tech: "MySQL", link: "https://www.mysql.com/" },
  { tech: "PostgreSQL", link: "https://www.postgresql.org/" },
  { tech: "Git", link: "https://git-scm.com/" },
  { tech: "GitHub", link: "https://github.com/JBrown9124" },
  { tech: "Firebase", link: "https://firebase.google.com/" },
  { tech: "Heroku", link: "https://www.heroku.com/what" },
];
export default function CustomizedAccordions() {
  const [expanded1, setExpanded1] = useState(true);

  return (
    <>
      <Accordion
    
        expanded={expanded1}
        onChange={() => setExpanded1(!expanded1)}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography variant="h6" >
            Technologies I Use
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Grid container columns={3}>
            {myTechnologies.map((tech, idx) => (
             
             <Grid item xs={3} md={1} key={idx}>
               
                  <DoubleArrowIcon
                    sx={{
                      color: "rgba(115,199,204,1)",
                      fontSize: "0.6rem",
                    }}
                  />{" "}
                  <LinkUnderline
                    left={0}
                    top={"89%"}
                    width={"100%"}
                    background={"rgba(115,199,204,1)"}
                  >
                    <Link
                      variant="body1"
                      type="button"
                      onClick={() => openInNewTab(tech.link)}
                      underline="none"
                      color={"#e0f7fa"}
                    >
                      {tech.tech}
                    </Link>
                  </LinkUnderline>
                  </Grid>
              
            ))}
            </Grid>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
