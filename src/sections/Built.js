import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import {
  
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
              variant="body1"
            >  
              Designed and Built by Jonathan Brown
          
            </Link>
            </Typography>
       
        </div>
      </Container>

   
    </>
  );
}
