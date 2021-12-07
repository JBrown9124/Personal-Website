import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
const CustomChip = styled(Chip)(({ theme }) => ({
  backgroundColor: "#26418f",
  "&:hover": {
    backgroundColor: "rgba(38, 65, 143, .9)",
  },

  color: "#e0f7fa",
  fill: "transparent",
  textTransform: "none",
  border: "solid #e0f7fa 1px",

  [theme.breakpoints.up("md")]: {
    fontFamily:"Open Sans, sans-serif",
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

  return (
    <>
      <Grid item container direction="row" spacing={1} sx={{ padding: "10px" }}>
        {technologiesUsed.map((tech, idx) => (
          <Grid item key={idx}>
            <CustomChip size="small" label={tech} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
