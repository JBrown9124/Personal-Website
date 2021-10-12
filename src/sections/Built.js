import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
  Typography,
} from "@material-ui/core";

import Link from "@mui/material/Link";
export default function Built(props) {
  function openInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  return (
    <>
      <Container>
        <div className="builtText">
          <Typography variant="body1">
            <Link
              type="button"
              onClick={() =>
                openInNewTab("https://github.com/JBrown9124/Personal-Website")
              }
              underline="none"
              color={"#e0f7fa"}
            >
              Designed and Built by Jonathan Brown
            </Link>
          </Typography>
        </div>
      </Container>

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
    </>
  );
}
