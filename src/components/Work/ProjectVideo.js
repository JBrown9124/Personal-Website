import React from "react";
import ReactPlayer from "react-player";
import Grid from "@mui/material/Grid";

export default function WorkProject({ videoUrl }) {
  return (
    <>
      <Grid
        container
        sx={{
          position: "relative",
          padding: "10px",
          // borderRadius: "5px",
          // border: "solid #77C9D4 1px",
          // boxShadow: 4,
        }}
      >
        <ReactPlayer
          playing={true}
          style={{
            top: "0",
            left: "0",
            borderRadius: "10px",
            overflow: "hidden",
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
