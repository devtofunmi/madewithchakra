import React, { useState } from "react";
import { GiLoveMystery } from "react-icons/gi";
import { Flex, Button, Box, Text, useToast } from "@chakra-ui/react";
import SubmitProject from "../components/SubmitProject";
import ProjectCard from "../components/ProjectCard";

const Homepage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const closePopup = () => {
    setShowPopup(false);
  };
  const [project, setProject] = useState([]);

  const toast = useToast();
  const showError = (message) => {
    toast({
      description: message,
      status: "error",
      duration: 1500,
      isClosable: true,
    });
  };
  const addNewProject = (projectName, url, twitterHandle, description) => {
    if (!projectName) {
      showError("enter project name");
    } else if (!url) {
      showError("enter project url");
    } else {
      const userproject = {
        id: project.length + 1,
        projectName,
        url,
        twitterHandle,
        description,
      };
      setProject([...project, userproject]);
      toast({
        description: "project added successfully",
        status: "success",
        duration: 1500,
        isClosable: true,
      });
      console.log(project);
    }
  };
  return (
    <>
      <SubmitProject
        isOpen={showPopup}
        closePopup={closePopup}
        addNewProject={addNewProject}
      />
      <Flex justifyContent={"space-between"} mx={"50px"} pt={"20px"}>
        <Text fontSize={"30px"} fontFamily={"Roboto"}>
          MadeWithChakra
        </Text>
        <Box>
          <Button
            color={"white"}
            leftIcon={<GiLoveMystery />}
            bg={"teal"}
            _hover={{
              bg: "#4cbf87",
            }}
          >
            Sponsor
          </Button>
        </Box>
      </Flex>
      <Flex
        direction={"column"}
        justifyContent={"center"}
        textAlign={"center"}
        pt={"100px"}
        alignItems={"center"}
        w={["80%", "60%"]}
        m={"auto"}
      >
        <Text fontSize={"60px"} fontFamily={"Roboto"}>
          Showcase your Projects made with Chakra-ui
        </Text>
        <Text mt={["15px", "20px"]}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad illum
          quia nam possimus tenetur autem est nostrum doloremque maiores ipsum
          quaerat praesentium architecto voluptas quisquam, voluptatem fuga
          numquam eaque voluptatibus.
        </Text>
        <Button
          borderRadius={"10px"}
          mt={"20px"}
          color={"white"}
          p={"30px"}
          bg={"teal"}
          _hover={{
            bg: "#4cbf87",
          }}
          onClick={() => setShowPopup(true)}
        >
          Submit Projects
        </Button>
        {/* {project.map((project) => {
          <ProjectCard
            projectName={project.projectName}
            url={project.url}
            twitterHandle={project.twitterHandle}
            description={project.description}
          />;
        })} */}
      </Flex>
    </>
  );
};

export default Homepage;
