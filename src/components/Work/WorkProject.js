import React from "react";

import ProjectInfo from "./ProjectInfo";
import Grid from "@mui/material/Grid";
import ProjectSocialIcons from "./ProjectSocialIcons";
import ProjectVideo from "./ProjectVideo";

import ProjectTechnologies from "./ProjectTechnologies";

export default function WorkProject({
  title,
  infoParagraph1,
  infoParagraph2,
  infoParagraph3,
  videoUrl,
  githubUrl,
  projectUrl,
  technologiesUsed,
}) {
  function openInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <>
      <Grid
        container
        columns={2}
        sx={{
          background: "#e0f7fa",
          width: "100%",
          height: "100%",
          borderRadius: "15px",
          border:"solid #015249 4px",
          boxShadow:"rgba(0, 0, 0, 0.15) 0px 5px 15px 0px"
        }}
      >
        <Grid
          container
          xs={1}
          direction="column"
          sx={{ padding: "15px", width: "100%", height: "100%",}}
        >
          <ProjectVideo videoUrl={videoUrl} />

          <ProjectTechnologies technologiesUsed={technologiesUsed} />

          <ProjectSocialIcons githubUrl={githubUrl} projectUrl={projectUrl} />
        </Grid>
        
        <ProjectInfo
          title={title}
          infoParagraph1={infoParagraph1}
          infoParagraph2={infoParagraph2}
          infoParagraph3={infoParagraph3}
        />
      </Grid>
    </>
  );
}
