import React from "react";
import { BsGithub } from "react-icons/bs";
import { GiLoveMystery } from "react-icons/gi";
import { Flex, Button, Box, Text } from "@chakra-ui/react";

const Homepage = () => {
  return (
    <>
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
        <Text mt={"20px"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad illum
          quia nam possimus tenetur autem est nostrum doloremque maiores ipsum
          quaerat praesentium architecto voluptas quisquam, voluptatem fuga
          numquam eaque voluptatibus.
        </Text>
        <Button
          borderRadius={"10px"}
          mt={"10px"}
          color={"black"}
          p={"30px"}
          leftIcon={<BsGithub />}
          _hover={{
            bg: "#4cbf87",
          }}
        >
          Login with Github
        </Button>
      </Flex>
    </>
  );
};

export default Homepage;
