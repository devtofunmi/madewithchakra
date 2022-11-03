import React, { useState } from "react";
import { GiLoveMystery } from "react-icons/gi";
import { Flex, Button, Box, Text } from "@chakra-ui/react";
import SubmitProject from "../components/SubmitProject";

const Homepage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const closePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
      <SubmitProject isOpen={showPopup} closePopup={closePopup} />
      <Flex justifyContent={"space-between"} mx={"50px"} pt={"20px"}>
        <Text fontSize={"30px"} fontFamily={"Roboto"}>
          MadeWithChakra
        </Text>
        <Box>
          <Button
            color={"black"}
            leftIcon={<GiLoveMystery />}
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
          color={"black"}
          p={"30px"}
          _hover={{
            bg: "#4cbf87",
          }}
          onClick={() => setShowPopup(true)}
        >
          Submit Projects
        </Button>
      </Flex>
    </>
  );
};

export default Homepage;
