import { Box, Button, Link, Text } from "@chakra-ui/react";
import React from "react";
import { BsTwitter } from "react-icons/bs";

const ProjectCard = ({ projectName, url, twitterHandle, description }) => {
  return (
    <Box width={["90%", "45%", "30%"]} borderRadius={"10px"} bg={"#202225"}>
      <Box>
        <iframe width={"100%"} src={url}></iframe>
      </Box>
      <Box p={"10px"}>
        <Link href={url} target={"_blank"} textDecor={"none"}>
          <Box fontSize={"30px"} fontFamily={"Roboto"}>
            <Text>{projectName}</Text>
          </Box>
        </Link>

        <Button
          bg={"transparent"}
          leftIcon={<BsTwitter />}
          _hover={{
            bg: "transparent",
          }}
        >
          {/* <Link href="https://twitter.com/{twitterHandle}">
            {twitterHandle}
          </Link> */}
          <Text>{twitterHandle}</Text>
        </Button>
        {/* <Text>{description}</Text> */}
      </Box>
    </Box>
  );
};

export default ProjectCard;
