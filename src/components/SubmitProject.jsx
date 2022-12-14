import { Box, Button, Input, Textarea, Text, Flex } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
const SubmitProject = ({ isOpen, closePopup, addNewProject }) => {
  const [projectName, setProjectName] = useState("");
  const [link, setLink] = useState("");
  const [twitterHandle, setTwitterHandle] = useState("");

  const inputRef = useRef();
  const projectRef = useRef();
  const linkRef = useRef();
  const handleSubmit = () => {
    addNewProject(projectName, link, twitterHandle);
    inputRef.current.value = "";
    projectRef.current.value = "";
    linkRef.current.value = "";
  };

  return (
    <>
      <Box
        position={"fixed"}
        w={"100%"}
        h={"100%"}
        top={"0px"}
        left={"0px"}
        backdropBlur={"lg"}
        display={isOpen ? "flex" : "none"}
        justifyContent={"center"}
        placeItems={"center"}
        background={"   rgba(0, 0, 0, 0.6)"}
        zIndex={10}
        backdropFilter={"blur(5px)"}
      >
        <Flex
          direction={"column"}
          background={"#181919"}
          w={"90vw"}
          textAlign={"center"}
          justifyContent={"center"}
          placeItems={"center"}
          position={"relative"}
          maxW={"450px"}
          padding={"30px"}
          borderRadius={"10px"}
        >
          <Flex align={"center"} justify={"space-between"} w={"100%"}>
            <Text fontSize={"1.5rem"} onClick={() => setShowPopup(true)}>
              Add Project
            </Text>
            <Button
              bg={"teal"}
              _hover={{
                backgroundColor: "rgba(#181819, 0.2)",
              }}
              size={"sm"}
              cursor={"pointer"}
              onClick={() => closePopup()}
            >
              <MdOutlineClose />
            </Button>
          </Flex>
          <Text mt={"20px"}>
            Showcases require moderator approval, so please be patient if your
            post doesn’t show up immediately
          </Text>
          <Box w={["300px", "400px"]} mt={"50px"}>
            <Input
              w={["300px", "400px"]}
              placeholder="Project Name"
              onChange={(e) => {
                setProjectName(e.target.value);
              }}
              ref={projectRef}
            />
            <Input
              mt={"15px"}
              w={["300px", "400px"]}
              placeholder="Project link  https://devtofunmi.netlify.app"
              onChange={(e) => {
                setLink(e.target.value);
              }}
              ref={linkRef}
            />
            <Input
              mt={"15px"}
              w={["300px", "400px"]}
              placeholder="Your Twitter handle"
              onChange={(e) => {
                setTwitterHandle(e.target.value);
              }}
              ref={inputRef}
            />

            <Button
              mt={"20px"}
              bg={"teal"}
              _hover={{
                backgroundColor: "rgba(#181819, 0.2)",
              }}
              onClick={() => {
                handleSubmit();
              }}
              disabled={!projectName || !link || !twitterHandle}
            >
              Submit
            </Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default SubmitProject;
