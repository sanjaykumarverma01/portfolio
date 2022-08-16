import { Box, Button, Flex, Heading, Img, Text } from "@chakra-ui/react";
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

  return (
    <Box className="main" pt="50px" >
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
          <Heading>Get in Touch</Heading>
          <Text fontSize="18px" mt=".5rem">
            Whether you want to get in touch, or talk about a project
            collaboration
          </Text>
          <Text fontSize="18px" fontWeight="500" mt=".5rem">
            Feel free to contact me
          </Text>
        </Box>
        <Flex width="10%" margin="auto" justifyContent="space-evenly" mt="1rem">
          <a href="https://github.com/SK-WebDeveloper" target="_blank">
            <BsGithub fontSize="40px" />
          </a>
          <a
            href="https://www.linkedin.com/in/sanjaykumar-verma-a73349219/"
            target="_blank"
          >
            <BsLinkedin fontSize="40px" _hover={{ bgColor: "blue" }} />
          </a>
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
