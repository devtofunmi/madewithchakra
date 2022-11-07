import { Box, Text } from "@chakra-ui/react";
import React from "react";

const ProjectCard = ({ projectName, url, twitterHandle, description }) => {
  return (
    <Box width={["90%", "45%", "30%"]} borderRadius={"10px"} bg={"#202225"}>
      <Box>
        <iframe width={"100%"} src={url}></iframe>
      </Box>
      <Box p={"10px"}>
        <Text fs={"30px"}>{projectName}</Text>
        <Text>{twitterHandle}</Text>
        <Text>{description}</Text>
      </Box>
    </Box>
  );
};

export default ProjectCard;
