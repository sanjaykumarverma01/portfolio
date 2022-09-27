import {
  Box,
  Flex,
  Heading,
  Img,
  ListItem,
  Text,
  UnorderedList,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import Profile from "../Assets/Profile.png";

const About = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  if (colorMode === "dark") {
    var bc = "2px solid rgb(150, 150, 226)";
    var tc = "#93989E";
  }
  if (colorMode === "light") {
    var bc = "2px solid teal";
    var tc = "#00B9E8";
  }

  return (
    <Box
      className="about"
      pt={["3rem", "4rem", "5rem", "6rem"]}
      size={["xs", "sm", "md", "lg"]}
    >
      <Heading mb="6rem" color={tc}>
        About Me
      </Heading>
      <Flex
        width="80%"
        margin="auto"
        textAlign={["center", "center", "justify"]}
        justifyContent="space-between"
        mb={["3rem", "4rem", "5rem", "6rem"]}
        direction={["column", "column", "row"]}
      >
        <Box
          w={["70%", "70%", "35%", "35%"]}
          borderRadius="50%"
          h="100%"
          boxShadow="md"
          display={["block", "block", "none", "none"]}
          m="auto"
          mt="-50px"
        >
          <Img src={Profile} alt="My" w="100%" />
        </Box>
        <Box
          w={["80%", "80%", "40%", "40%"]}
          fontSize={["md", "lg", "xl", "xl"]}
          m={["auto", "auto", "0px", "0px"]}
          mt={["15px", "15px", "0", "0"]}
        >
          <Text textAlign="justify">
            Hi Everyone, I am{" "}
            <span style={{ fontWeight: "bold", color: tc }}>
              Sanjaykumar Verma
            </span>{" "}
            from <span style={{ fontWeight: "bold" }}>Sultanpur, U.P.</span>
          </Text>

          <Text textAlign="justify" display={["none","none","block","block"]}>
            Web Developer who loves to transform ideas into reality using web
            developement tools through coding.
          </Text>
          <Text textAlign="justify" display={["block","block","none","none"]}>
            Web Developer who loves to transform ideas into reality using web
            developement tools through coding.Motivated developer with expertise in creating custom websites with
            front-end and back-end languages, responsive frameworks and
            database.
          </Text>
          <Text textAlign="justify" display={["none","none","block","block"]}>
            Motivated developer with expertise in creating custom websites with
            front-end and back-end languages, responsive frameworks and
            database.
          </Text>
          <Text mt={[".5rem",".05rem","1rem","1rem"]} textAlign="justify">
            Apart from coding, some other activities that I love to do!
          </Text>
          <UnorderedList fontWeight="500" textAlign="justify">
            <ListItem>Playing Video Games</ListItem>
            <ListItem>Making Vlogs</ListItem>
            <ListItem>Watching Movies & Web Series</ListItem>
            <ListItem>Bike Riding</ListItem>
          </UnorderedList>
        </Box>
        <Box
          width="35%"
          borderRadius="50%"
          h="100%"
          boxShadow="md"
          display={["none", "none", "block", "block"]}
        >
          <Img src={Profile} alt="My" w="100%" />
        </Box>
      </Flex>
    </Box>
  );
};

export default About;
