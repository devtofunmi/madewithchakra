import { Box, Button, Input, Textarea, Text, Flex } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { MdOutlineClose } from "react-icons/md";

const SubmitProject = ({ isOpen, closePopup }) => {
  const [projectName, setProjectName] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");

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
              bg={"#4cbf87"}
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
          <Box w={["300px", "400px"]} mt={"50px"}>
            <Input
              w={["300px", "400px"]}
              placeholder="Project Name"
              onChange={(e) => {
                setProjectName(e.target.value);
              }}
            />
            <Input
              mt={"15px"}
              w={["300px", "400px"]}
              placeholder="Project url"
              onChange={(e) => {
                setUrl(e.target.value);
              }}
            />
            <Textarea
              mt={"15px"}
              placeholder="description"
              h={"150px"}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />

            <Button
              mt={"20px"}
              bg={"#4cbf87"}
              _hover={{
                backgroundColor: "rgba(#181819, 0.2)",
              }}
              onClick={() => {
                handleSubmit();
              }}
              disabled={!projectName || !url || !description}
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
