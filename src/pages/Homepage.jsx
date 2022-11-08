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
  Tooltip,
} from "@chakra-ui/react";
import SubmitProject from "../components/SubmitProject";
import ProjectCard from "../components/ProjectCard";
import logo from "../assets/logo.png";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SupabaseClient } from "@supabase/supabase-js";
import { supabase } from "../../supabaseClient";

const Homepage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const closePopup = () => {
    setShowPopup(false);
  };
  // const [project, setProject] = useState([
  //   {
  //     description:
  //       "adipisicing elit. Ad illum  quia nam possimus tenetur autem est nostrum doloremque maiores",
  //     projectName: "devtofunmi",
  //     twitterHandle: "codebrea_er",
  //     link: "https://devtofunmi.netlify.app",
  //   },
  //   {
  //     description:
  //       "adipisicing elit. Ad illum  quia nam possimus tenetur autem est nostrum doloremque maiores ipsum",
  //     projectName: "devtofunmi",
  //     twitterHandle: "codebrea_er",
  //     link: "https://devtofunmi.netlify.app",
  //   },
  //   {
  //     description:
  //       "adipisicing elit. Ad illum  quia nam possimus tenetur autem est nostrum doloremque maiores ipsum",
  //     projectName: "StayBnb",
  //     twitterHandle: "codebrea_er",
  //     link: "https://bnnnb.netlify.app",
  //   },
  //   {
  //     description:
  //       "adipisicing elit. Ad illum  quia nam possimus tenetur autem est nostrum doloremque maiores",
  //     projectName: "fetiino",
  //     twitterHandle: "codebrea_er",
  //     link: "https://fetiino.netlify.app",
  //   },
  //   {
  //     description:
  //       "adipisicing elit. Ad illum  quia nam possimus tenetur autem est nostrum doloremque maiores ipsum",
  //     projectName: "crypto",
  //     twitterHandle: "codebrea_er",
  //     link: "https://cryppto.netlify.app",
  //   },
  //   {
  //     description:
  //       "adipisicing elit. Ad illum  quia nam possimus tenetur autem est nostrum doloremque maiores ipsum",
  //     projectName: "Gpt3",
  //     twitterHandle: "codebrea_er",
  //     link: "https://gppt.netlify.app",
  //   },
  // ]);

  const toast = useToast();
  const showError = (message) => {
    toast({
      description: message,
      status: "error",
      duration: 1500,
      isClosable: true,
    });
  };

  const addNewProject = (projectName, link, twitterHandle) => {
    const project = async () => {
      await supabase
        .from("project")
        .insert({
          projectName: projectName,
          link: link,
          twitterHandle: twitterHandle,
          isVerried: false,
        })
        .then((data) => {
          console.log(data);
          if (!projectName) {
            showError("enter project name");
          } else if (!link) {
            showError("enter project url");
          } else if (data.error) {
            showError(data.error.message);
          } else {
            // const showCaseProject = {
            //   id: project.length + 1,
            //   projectName,
            //   link,
            //   twitterHandle,
            //   isVerried: false,
            // };
            // setProject([...project, showCaseProject]);
            toast({
              description: "project added successfully",
              status: "success",
              duration: 1500,
              isClosable: true,
            });
          }
        });
      project();
    };
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
            <Tooltip
              label="follow madewithchakra on twitter"
              aria-label="A tooltip"
              fontSize="md"
            >
              <Link
                fontSize={"30px"}
                href={"https://twitter.com/madewithchakra"}
                target={"_blank"}
                textDecor={"none"}
              >
                <AiFillTwitterCircle />
              </Link>
            </Tooltip>
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
            Chakra UI is a simple, modular and accessible component library that
            gives you the building blocks you need to build your React
            applications,with madewithchakra, you can showcase your project and
            explore what's possible with Chakra_ui and get inspired for your
            next project.
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
      <Center mt={["20px", "200px", "0px"]}>
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
        {/* {project.map((project, id) => (
          <ProjectCard
            key={id}
            projectName={project.projectName}
            link={project.link}
            twitterHandle={project.twitterHandle}
          />
        ))} */}
      </Flex>
      <Center pb={"30px"}>
        <Text>Proudly made with Chakra</Text>
      </Center>
    </>
  );
};

export default Homepage;
