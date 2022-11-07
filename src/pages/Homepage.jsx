import React, { useState } from "react";
import { GiLoveMystery } from "react-icons/gi";
import {
  Flex,
  Button,
  Box,
  Text,
  useToast,
  Center,
  Img,
  Link,
} from "@chakra-ui/react";
import SubmitProject from "../components/SubmitProject";
import ProjectCard from "../components/ProjectCard";
import logo from "../assets/logo.png";
import { BsTwitter } from "react-icons/bs";
const Homepage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const closePopup = () => {
    setShowPopup(false);
  };
  const [project, setProject] = useState([
    {
      description:
        "adipisicing elit. Ad illum  quia nam possimus tenetur autem est nostrum doloremque maiores",
      projectName: "devtofunmi",
      twitterHandle: "codebrea_er",
      url: "https://devtofunmi.netlify.app",
    },
    {
      description:
        "adipisicing elit. Ad illum  quia nam possimus tenetur autem est nostrum doloremque maiores ipsum",
      projectName: "devtofunmi",
      twitterHandle: "codebrea_er",
      url: "https://devtofunmi.netlify.app",
    },
    {
      description:
        "adipisicing elit. Ad illum  quia nam possimus tenetur autem est nostrum doloremque maiores ipsum",
      projectName: "StayBnb",
      twitterHandle: "codebrea_er",
      url: "https://bnnnb.netlify.app",
    },
    {
      description:
        "adipisicing elit. Ad illum  quia nam possimus tenetur autem est nostrum doloremque maiores",
      projectName: "fetiino",
      twitterHandle: "codebrea_er",
      url: "https://fetiino.netlify.app",
    },
    {
      description:
        "adipisicing elit. Ad illum  quia nam possimus tenetur autem est nostrum doloremque maiores ipsum",
      projectName: "crypto",
      twitterHandle: "codebrea_er",
      url: "https://cryppto.netlify.app",
    },
    {
      description:
        "adipisicing elit. Ad illum  quia nam possimus tenetur autem est nostrum doloremque maiores ipsum",
      projectName: "Gpt3",
      twitterHandle: "codebrea_er",
      url: "https://gppt.netlify.app",
    },
  ]);

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
      const showCaseProject = {
        id: project.length + 1,
        projectName,
        url,
        twitterHandle,
      };
      setProject([...project, showCaseProject]);
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
      <Box h={"100vh"}>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          mx={"20px"}
        >
          <Box>
            <Img w={"300px"} src={logo} />
          </Box>
          <Box>
            <Link
              fontSize={"30px"}
              href={"https://twitter.com/madewithchakra"}
              target={"_blank"}
              textDecor={"none"}
            >
              <BsTwitter />
            </Link>
          </Box>
        </Flex>
        <Box
          direction={"column"}
          justifyContent={"center"}
          textAlign={"center"}
          pt={"50px"}
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
        </Box>
      </Box>
      <Center mt={["0px", "130px", "0px"]}>
        <Text fontSize={"60px"} fontFamily={"Roboto"}>
          Project
        </Text>
      </Center>

      <Flex
        pb={"50px"}
        mt={"10px"}
        gap={"50px"}
        flexWrap={"wrap"}
        justify={"center"}
      >
        {project.map((project, id) => (
          <ProjectCard
            key={id}
            projectName={project.projectName}
            url={project.url}
            twitterHandle={project.twitterHandle}
          />
        ))}
      </Flex>
      <Center pb={"30px"}>
        <Text>Proudly made with Chakra</Text>
      </Center>
    </>
  );
};

export default Homepage;
