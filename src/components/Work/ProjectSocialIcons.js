import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import SocialIconsBoop from "../../animators/SocialIconsBoop.js";
import Tooltip from "@mui/material/Tooltip";
import Grid from "@mui/material/Grid";
import Zoom from "@mui/material/Zoom";

export default function ProjectSocialIcons({ githubUrl, projectUrl }) {
  function openInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <>
      <Grid item sx={{ padding: "10px" }}>
        <SocialIconsBoop
          beforeColor={"#e0f7fa"}
          afterColor={"#77C9D4"}
          rotation={0}
          x={0}
          y={-4}
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
          beforeColor={"#e0f7fa"}
          afterColor={"#77C9D4"}
          rotation={0}
          x={0}
          y={-4}
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
