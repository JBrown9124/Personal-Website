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
  function openInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <>
      <Grid container xs={1} direction="column" sx={{ padding: "15px" }}>
        <CardBoop>
          <Grid
            item
            sx={{
              background: "white",
              borderRadius: "15px",
              border: "solid black 1px",
            }}
          >
            <Grid item>
              <Typography
                variant="h5"
                component="div"
                sx={{ color: "black!important", padding: "10px" }}
              >
                {title}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                sx={{ color: "black!important", padding: "10px" }}
              >
                {infoParagraph1}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                sx={{ color: "black!important", padding: "10px" }}
              >
                {infoParagraph2}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                sx={{ color: "black!important", padding: "10px" }}
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
