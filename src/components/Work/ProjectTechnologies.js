import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
const CustomChip = styled(Chip)(({ theme }) => ({
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: "rgba(150,230,253,0.15)",
  },

  color: "black",
  fill: "transparent",
  textTransform: "none",
  border: "solid black 1px",

  [theme.breakpoints.up("md")]: {
    fontSize: "1.1rem",
    width: "100%",
    height: "100%",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: ".6rem",

    width: "100%",
    height: "100%",
  },
}));
export default function ProjectTechnologies({ technologiesUsed }) {
  function openInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <>
      <Grid item container direction="row" spacing={1} sx={{ padding: "15px" }}>
        {technologiesUsed.map((tech, idx) => (
          <Grid item>
            <CustomChip size="small" label={tech} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
