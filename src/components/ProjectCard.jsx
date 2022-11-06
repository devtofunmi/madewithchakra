import React from "react";

const ProjectCard = ({ projectName, url, twitterHandle, description }) => {
  return;
  <Box width={["90%", "45%", "25%"]} p={"17px"} borderRadius={"10px"}>
    <Box>
      <iframe width={"100%"} src={url}></iframe>
      <Text>{projectName}</Text>
      <Text>{twitterHandle}</Text>
      <Text>{description}</Text>
    </Box>
  </Box>;
};

export default ProjectCard;
