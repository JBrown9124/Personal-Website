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
import ProjectInfo from './ProjectInfo'
import Grid from "@mui/material/Grid";

import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";

import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";

import Zoom from "@mui/material/Zoom";
export default function ProjectSocialIcons({
 
  githubUrl,
  projectUrl,
}) {
  function openInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  const theme = useTheme();

  return (
    <>
       <Grid item sx={{ padding: "15px" }}>
            <SocialIconsBoop
              beforeColor={"black"}
              afterColor={"#52ab98"}
              rotation={0}
              x={0}
              y={-6}
            >
              <Tooltip title="GitHub" TransitionComponent={Zoom}>
                <div>
                  <FaGithub
                    type="button"
                    className="gitIcon"
                    onClick={() => openInNewTab(githubUrl)}
                  />
                </div>
              </Tooltip>
            </SocialIconsBoop>
            <SocialIconsBoop
              beforeColor={"black"}
              afterColor={"#52ab98"}
              rotation={0}
              x={0}
              y={-6}
            >
              <FiExternalLink
                type="button"
                className="linkIcon"
                onClick={() => openInNewTab(projectUrl)}
              />
            </SocialIconsBoop>
          </Grid>
    </>
  );
}
