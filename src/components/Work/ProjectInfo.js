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

import Grid from "@mui/material/Grid";

import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";

import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";

import Zoom from "@mui/material/Zoom";
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
  const theme = useTheme();

  return (
    <>
   <Grid
          container
          xs={1}
     
          direction="column"
          sx={{ padding: "15px", }}
        >
            <CardBoop>
            <Grid item  sx={{background:"white", borderRadius:"15px", border:"solid black 1px"}}>
          <Grid item>
            <Typography variant="h5" component="div" sx={{color: 'black!important',  padding:"10px"}}>
              {title}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" sx={{color: 'black!important', padding:"10px"}}>{infoParagraph1}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" sx={{color: 'black!important', padding:"10px"}}>{infoParagraph2}</Typography>
          </Grid>
          <Grid item>
            <Typography  variant="body2" sx={{color: 'black!important', padding:"10px"}}>
              {infoParagraph3}
            </Typography>
          </Grid>
          </Grid>
          </CardBoop>
        </Grid>
    </>
  );
}
