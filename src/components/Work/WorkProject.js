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
  return (
    <>
      <Grid
        container
        columns={2}
        sx={{
          background: "#77C9D4",
          width: "100%",
          height: "100%",
          borderRadius: "15px",
          border: "solid #e0f7fa 1px",
          boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
        }}
      >
        <Grid
          container
          xs={2}
          md={1}
          direction="row"
          sx={{ padding: "10px", width: "100%", height: "100%" }}
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
