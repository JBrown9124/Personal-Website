import React from "react";
import ReactPlayer from "react-player";
import Grid from "@mui/material/Grid";

export default function WorkProject({ videoUrl }) {
  function openInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <>
      <Grid
        item
        sx={{
          position: "relative",
          padding: "15px",
          borderRadius: "20px!important",
        }}
      >
        <ReactPlayer
          playing={true}
          style={{
            top: "0",
            left: "0",
            borderRadius: "20px!important",
          }}
          url={videoUrl}
          width="100%"
          height="100%"
          muted={true}
          loop={true}
          controls
        />
      </Grid>
    </>
  );
}
