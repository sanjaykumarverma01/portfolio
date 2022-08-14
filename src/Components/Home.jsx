import { Box, Flex, Img, Text, VStack } from "@chakra-ui/react";
import React from "react";
import About from "./About";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  return (
    <>
      <Navbar />
      <Flex justifyContent="space-around" mt="2rem">
        <Box w="40%">
          <Text fontSize="5xl" fontWeight="400" textAlign="justify">
            Hi There! 👋🏻
          </Text>
          <Text fontSize="5xl" fontWeight="500" textAlign="justify">
            I'M <span style={{ color: "#00B9E8" }}>Sanjaykumar</span>
          </Text>
          <Text fontSize="5xl" fontWeight="500" textAlign="justify">
            Web Developer
          </Text>
          <Text fontSize="2xl" textAlign="justify">
            I am passionate about creating awesome user experience using the
            latest front-end and back-end technologies.
          </Text>
        </Box>
        <Box w="40%">
          <Img
            w="100%"
            h="350px"
            src="https://github.com/SK-WebDeveloper/portfolio/blob/main/src/home.gif?raw=true"
            alt="Home Page"
          />
        </Box>
      </Flex>
      <About />
      <Skills />
      <Projects />
    </>
  );
};

export default Home;
