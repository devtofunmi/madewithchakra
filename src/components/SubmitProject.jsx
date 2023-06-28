import {
  Box,
  Button,
  Input,
  Textarea,
  Text,
  Flex,
  Alert,
  Spinner,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { MdOutlineClose } from "react-icons/md";
import { supabase } from "../../supabaseClient";

const SubmitProject = ({ isOpen, closePopup, addNewProject }) => {
  const [projectName, setProjectName] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState("");
  const [twitterHandle, setTwitterHandle] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const inputRef = useRef();
  const projectRef = useRef();
  const linkRef = useRef();

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result); // Set the image URL to the result of FileReader
      uploadToCloudinary(file); // Pass the file to the uploadToCloudinary function
    };

    reader.readAsDataURL(file);
  };

 
   const uploadToCloudinary = async (file) => {
     const formData = new FormData();
     formData.append("file", file);
     formData.append("upload_preset", "users_avater");

     try {
       const response = await fetch(
         "https://api.cloudinary.com/v1_1/drirsnp0c/image/upload",
         {
           method: "POST",
           body: formData,
         }
       );

       const data = await response.json();
       console.log("Cloudinary upload response:", data);

       if (response.ok) {
         return data.secure_url; // Return the uploaded image URL
       } else {
         throw new Error(data.error.message);
       }
     } catch (error) {
       console.error("Error uploading image to Cloudinary:", error);
       throw error;
     }
   };

  const handleSubmit = async () => {
    setLoading(true);
    setTimeout(async () => {
      if (!projectName || !link || !twitterHandle || !image) {
        setError("Please fill in all fields");
      } else {
        try {
          const cloudinaryUrl = await uploadToCloudinary(image);

          const { data: insertedData, error: insertError } = await supabase
            .from("projects")
            .insert({
              projectName: projectName,
              link: link,
              twitterHandle: twitterHandle,
              isVerified: false,
              image: cloudinaryUrl,
            });

          if (insertError) {
            setError(insertError.message);
          } else {
            setSuccess("Signup successful");
            setTimeout(() => {
              setSuccess("");
            }, 2000);
            setImage("");
            setLink("");
            setProjectName("");
            setTwitterHandle("");
          }
        } catch (error) {
          console.error("Error occurred during submission:", error);
          setError("An error occurred during submission");
        }
      }

      setLoading(false);
    }, 1000);
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
              value={projectName}
              ref={projectRef}
            />
            <Input
              mt={"15px"}
              w={["300px", "400px"]}
              placeholder="Project link  https://devtofunmi.netlify.app"
              onChange={(e) => {
                setLink(e.target.value);
              }}
              value={link}
              ref={linkRef}
            />
            <Input
              mt={"15px"}
              w={["300px", "400px"]}
              placeholder="Your Twitter handle"
              onChange={(e) => {
                setTwitterHandle(e.target.value);
              }}
              value={twitterHandle}
              ref={inputRef}
            />
            <Input
              fontSize="16px"
              placeholder="Your Project Screenshot"
              mt={"15px"}
              w={["300px", "400px"]}
              type="file"
              onChange={(e) => handleImageUpload(e)}
              
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
              disabled={!projectName || !link || !twitterHandle || !image}
            >
              {loading ? <Spinner /> : <p>Submit </p>}
            </Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default SubmitProject;
