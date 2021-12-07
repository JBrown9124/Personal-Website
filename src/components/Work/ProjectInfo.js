import React from "react";
import Typography from "@mui/material/Typography";
import CardBoop from "../../animators/CardBoop.js";
import Grid from "@mui/material/Grid";
export default function ProjectInfo({
  title,
  infoParagraph1,
  infoParagraph2,
  infoParagraph3,
}) {

  return (
    <>
      <Grid container xs={2} md={1} direction="column" sx={{ padding: "10px" }}>
        <CardBoop>
          <Grid
            item
            sx={{
              background: "#26418f",
              borderRadius: "15px",
              border: "solid #e0f7fa 1px",
            }}
          >
            <Grid item>
              <Typography
                variant="h5"
             
                sx={{ color: "#e0f7fa!important", padding: "10px" }}
              >
                {title}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                sx={{ color: "#e0f7fa!important", padding: "10px" }}
              >
                {infoParagraph1}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                sx={{ color: "#e0f7fa!important", padding: "10px" }}
              >
                {infoParagraph2}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                sx={{ color: "#e0f7fa!important", padding: "10px" }}
              >
                {infoParagraph3}
              </Typography>
            </Grid>
          </Grid>
        </CardBoop>
      </Grid>
    </>
  );
}
