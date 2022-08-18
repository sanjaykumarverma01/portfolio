import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { HiDownload } from "react-icons/hi";
import { saveAs } from "file-saver";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Home = () => {
  const handleDownload = async () => {
    saveAs(
      "https://drive.google.com/file/d/1a-brFO6i8iEOAFy2VQzmrc8WQs_PGIeD/view?usp=sharing",
      "Sanjaykumar_Resume.pdf"
    );
  };

  const { colorMode, toggleColorMode } = useColorMode();
  if (colorMode === "dark") {
    // normal
    var bc = "2px solid rgb(150, 150, 226)";
    var tc = "#93989E";
    var bgC = "#222e3d";
    
    // hover
    var bc1 = "2px solid #00B9E8";
    var tc1 = "#00B9E8";
    var bgC1 = "#222e3d";
    
  }
  if (colorMode === "light") {
    // normal
    var bc = "2px solid white";
    var tc = "white";
    var bgC = "#00B9E8";
    // hover
    var bc1 = "2px solid #00B9E8";
    var tc1 = "#00B9E8";
    var bgC1 = "white";
  }

  return (
    <Box className="main" pt="70px">
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
            bgColor={bgC}
            color={tc}
            border={bc}
            _hover={{
              color: tc1,
              bgColor: bgC1,
              border: bc1,
            }}
            zIndex={700}
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
            borderRadius="3px"
          />
        </Box>
      </Flex>
      <Box mt="5rem">
        <Box>
          <Heading color={tc}>Get in Touch</Heading>
          <Text fontSize="18px" mt=".5rem">
            Whether you want to get in touch, or talk about a project
            collaboration
          </Text>
          <Text fontSize="18px" fontWeight="500" mt=".5rem">
            Feel free to contact me
          </Text>
        </Box>
        <Flex width="10%" margin="auto" justifyContent="space-evenly" mt="1rem">
          <Box _hover={{ color: "teal" }}>
            <a href="https://github.com/SK-WebDeveloper" target="_blank">
              <BsGithub fontSize="40px" />
            </a>
          </Box>
          <Box _hover={{ bgColor: "#0A66C2" }}>
            <a
              href="https://www.linkedin.com/in/sanjaykumar-verma-a73349219/"
              target="_blank"
            >
              <BsLinkedin fontSize="40px" />
            </a>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
