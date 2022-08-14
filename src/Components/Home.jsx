import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import About from "./About";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  return (
    <>
      <Flex>
        <Box>Details</Box>
        <Box>Img</Box>
      </Flex>
      <Navbar />
      <About />
      <Skills />
      <Projects />
    </>
  );
};

export default Home;
