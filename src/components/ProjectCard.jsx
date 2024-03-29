import { Box, Button, Img, Link, Text } from "@chakra-ui/react";
import React from "react";
import { BsTwitter } from "react-icons/bs";

const ProjectCard = ({ projectName, link, twitterHandle, image }) => {
  return (
    <Box
      width={["350px", "400px", "400px"]}
      borderRadius={"10px"}
      position={"relative"}
    >
      <Box>
        <Img height="200" width={"100%"} src={image}></Img>
      </Box>
      <Box
        position={"absolute"}
        top={"0px"}
        textAlign={"center"}
        bg={"rgba(0,0,0,0.75)"}
        w={"100%"}
        h={"206px"}
        borderBottomRadius={"10px"}
        opacity={0}
        _hover={{
          opacity: "1",
        }}
      >
        <Link href={link} target={"_blank"} textDecor={"none"}>
          <Box pt={"110px"} fontSize={"30px"} fontFamily={"Roboto"}>
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
          <Link href={`https://twitter.com/${twitterHandle}`} target="_blank">
            {twitterHandle}
          </Link>
        </Button>
      </Box>
    </Box>
  );
};

export default ProjectCard;
