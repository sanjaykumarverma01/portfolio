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

const About = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  if (colorMode === "dark") {
    var bc = "2px solid rgb(150, 150, 226)";
    var tc = "#93989E"
  }
  return (
    <Box className="about" pt="6rem">
      <Heading mb="6rem" color={tc}>About Me</Heading>
      <Flex
        width="80%"
        margin="auto"
        textAlign="justify"
        justifyContent="space-between"
        mb="6rem"
      >
        <Box width="40%">
          <Text fontSize="xl">
            Hi Everyone, I am{" "}
            <span style={{ fontWeight: "bold" }}>Sanjaykumar Verma</span> from{" "}
            <span style={{ fontWeight: "bold" }}>Sultanpur, U.P.</span>
          </Text>

          <Text fontSize="xl">
            Web Developer who loves to transform ideas into reality using web
            developement tools through coding.
          </Text>
          <Text fontSize="xl">
            Motivated developer with expertise in creating custom websites with
            front-end and back-end languages, responsive frameworks and
            database.
          </Text>
          <Text fontSize="xl" mt="1rem">
            Apart from coding, some other activities that I love to do!
          </Text>
          <UnorderedList fontWeight="500">
            <ListItem>Playing Video Games</ListItem>
            <ListItem>Making Vlogs</ListItem>
            <ListItem>Watching Movies & Web Series</ListItem>
            <ListItem>Bike Riding</ListItem>
          </UnorderedList>
        </Box>
        <Box width="40%" borderRadius="20px" border={bc}>
          <Img
            src="https://github.com/SK-WebDeveloper/portfolio/blob/main/src/profile-pic.png?raw=true"
            alt="My"
            borderRadius="20px"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default About;
