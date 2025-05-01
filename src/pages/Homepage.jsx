// Homepage.jsx or Homepage.tsx
import React, { useEffect, useState } from "react";
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
  Spinner,
} from "@chakra-ui/react";
import SubmitProject from "../components/SubmitProject";
import ProjectCard from "../components/ProjectCard";
import logo from "../assets/logo.png";
import { AiFillTwitterCircle } from "react-icons/ai";
import { supabase } from "../../supabaseClient";

const Homepage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const closePopup = () => setShowPopup(false);
  const [loading, setLoading] = useState(true);
  const toast = useToast();
  const [projects, setProjects] = useState([]);

  const showError = (message) => {
    toast({
      description: message,
      status: "error",
      duration: 1500,
      isClosable: true,
    });
  };

  const addNewProject = (projectName, link, twitterHandle, image) => {
    const project = async () => {
      await supabase
        .from("projects")
        .insert({
          image,
          projectName,
          link,
          twitterHandle,
          isVerified: false,
        })
        .then((data) => {
          if (!projectName) return showError("Enter project name");
          if (!link) return showError("Enter project URL");
          if (data.error) return showError(data.error.message);

          toast({
            description: "Project added successfully",
            status: "success",
            duration: 1500,
            isClosable: true,
          });
          closePopup();
        });
    };
    project();
  };

  const getProjects = async () => {
    const data = await supabase.from("projects").select("*");
    setProjects(data?.data || []);
    setLoading(false);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <Box fontFamily="'Segoe UI', sans-serif" bg="#121212" color="gray.100" minH="100vh">
      <SubmitProject
        isOpen={showPopup}
        closePopup={closePopup}
        addNewProject={addNewProject}
      />

      <Flex justify="space-between" align="center" px="6" py="2" bg="#1e1e1e" boxShadow="sm">
        <Img w="160px" src={logo} />
        <Tooltip label="Follow @madewithchakra on Twitter" fontSize="sm">
          <Link href="https://twitter.com/madewithchakra" target="_blank" fontSize="28px">
            <AiFillTwitterCircle color="#1DA1F2" />
          </Link>
        </Tooltip>
      </Flex>

      <Box textAlign="center" mt="60px" px="4">
        <Text fontSize="42px" fontWeight="bold" color="white">
          Showcase Your Chakra UI Projects
        </Text>
        <Text mt="4" fontSize="18px" color="gray.400" maxW="600px" mx="auto">
          Explore what others built with Chakra UI and submit your own project
          to get featured.
        </Text>
        <Button
          mt="6"
          px="8"
          py="6"
          bgGradient="linear(to-r, teal.400, blue.500)"
          _hover={{ bgGradient: "linear(to-r, teal.500, blue.600)" }}
          color="white"
          borderRadius="lg"
          onClick={() => setShowPopup(true)}
        >
          Submit Your Project
        </Button>
      </Box>

      <Center mt="100px">
        <Text fontSize="32px" fontWeight="semibold" color="white">
          Featured Projects
        </Text>
      </Center>

      <Box mt="8" px="4">
        {loading ? (
          <Center py="40px">
            <Spinner size="xl" color="teal.300" />
          </Center>
        ) : (
          <Flex wrap="wrap" justify="center" gap="40px" pb="60px">
            {projects
              .filter((p) => p.isVerified)
              .map((project) => (
                <ProjectCard
                  key={project.id}
                  image={project.image}
                  projectName={project.projectName}
                  link={project.link}
                  twitterHandle={project.twitterHandle}
                />
              ))}
          </Flex>
        )}
      </Box>

      <Center py="8">
        <Text color="gray.500" fontSize="sm">
          Proudly made with Chakra UI ❤️
        </Text>
      </Center>
    </Box>
  );
};

export default Homepage;

