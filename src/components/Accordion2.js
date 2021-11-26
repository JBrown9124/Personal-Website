import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import CertificateBoop from "../animators/CertificateBoop";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import CourseraCertificate1 from "../images/CourseraCertificate1.png";
import CourseraCertificate2 from "../images/CourseraCertificate2.png";

const Accordion2 = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  //   border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: "none",
  },
  "&:before": {
    display: "none",

    color: "#26418f",
    borderBottom: "none",
  },
}));

const AccordionSummary2 = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ color: "#e0f7fa", fontSize: "0.9rem" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  background: theme.palette.mode === "dark" ? "#26418f" : "#26418f",

  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    background: theme.palette.mode === "dark" ? "#26418f" : "#26418f",
    marginLeft: theme.spacing(1),
    borderBottom: "none",
  },
}));

const AccordionDetails2 = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  //   borderTop: '1px solid rgba(0, 0, 0, .125)',
  background: theme.palette.mode === "dark" ? "#26418f" : "#26418f",

  borderBottom: "none",
}));

export default function CustomizedAccordions() {
  const [expanded2, setExpanded2] = React.useState(true);

  function openInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <>
      <Accordion2
        disableGutters
        expanded={expanded2}
        onChange={() => setExpanded2(!expanded2)}
      >
        <AccordionSummary2 aria-controls="panel2d-content" id="panel2d-header">
          <Typography variant="h6" className="accordionTitle">
            Certificates
          </Typography>
        </AccordionSummary2>
        <AccordionDetails2>
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
        </AccordionDetails2>
      </Accordion2>
    </>
  );
}
