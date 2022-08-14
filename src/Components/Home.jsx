import { Box, Button, Flex, Img, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";
import About from "./About";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";
import { HiDownload } from "react-icons/hi";
const Home = () => {
  const handleDownload = async () => {
    let b = await fetch(
      `https://drive.google.com/file/d/1a-brFO6i8iEOAFy2VQzmrc8WQs_PGIeD/view?usp=sharing`
    ).then((res) => res.blob());
  };

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
          <Button
            onClick={handleDownload}
            mt="1rem"
            bgColor="#00B9E8"
            color="white"
            _hover={{
              color: "#00B9E8",
              bgColor: "white",
              border: "1px solid",
              borderColor: "#00B9E8",
            }}
          >
            <HiDownload />
            RESUME
          </Button>
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
