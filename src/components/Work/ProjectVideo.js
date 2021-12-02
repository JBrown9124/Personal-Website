import React from "react";

import ReactPlayer from "react-player";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardBoop from "../../animators/CardBoop.js";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import SocialIconsBoop from "../../animators/SocialIconsBoop.js";
import VisibilitySensor from "react-visibility-sensor";
import FadeIn from "../../animators/FadeIn.js";
import Tooltip from "@mui/material/Tooltip";

import { useTheme } from "@mui/material/styles";
import ProjectInfo from "./ProjectInfo";
import Grid from "@mui/material/Grid";
import ProjectSocialIcons from "./ProjectSocialIcons";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";

import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";

import Zoom from "@mui/material/Zoom";
export default function WorkProject({ videoUrl }) {
  function openInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  const theme = useTheme();

  return (
    <>
      <Grid
        item
        sx={{
          position: "relative",
          padding:"15px",
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
