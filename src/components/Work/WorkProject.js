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
      
          width: "100%",
          height: "100%",
          // borderRadius: "15px",
          // border: "solid #77C9D4 1px",
          // boxShadow: 20,
          marginBottom:title === "The Love and Pain Experiment"?"0px":"200px"
        }}
      >
        <Grid
          container
          xs={2}
          md={1}
          direction="row"
          sx={{ padding: "10px", width: "100%", height: "100%",  }}
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
