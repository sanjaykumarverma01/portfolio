import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Img,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";

const Projects = () => {
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
    <Box className="projects" pt="6rem">
      <Heading mb="5rem">Projects</Heading>
      <Flex
        m="auto"
        textAlign="center"
        w="80%"
        justifyContent="space-around"
        mb="50px"
      >
        <Box
          boxShadow="md"
          borderWidth="1px"
          borderRadius="10px"
          w="45%"
          border={bc}
        >
          <Img
            src="https://github.com/SK-WebDeveloper/portfolio/blob/main/src/project%20img/BathandBody.png?raw=true"
            alt=""
            borderTopRadius="10px"
          />
          <Flex justifyContent="space-around" p="10px">
            <Button
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
              GitHub
            </Button>
            <Button
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
              Preview
            </Button>
          </Flex>
        </Box>
        <Box
          boxShadow="md"
          borderWidth="1px"
          borderRadius="10px"
          w="45%"
          border={bc}
        >
          <Img
            src="https://github.com/SK-WebDeveloper/portfolio/blob/main/src/project%20img/BathandBody.png?raw=true"
            alt=""
            borderTopRadius="10px"
          />
          <Flex justifyContent="space-around" p="10px">
            <Button
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
              GitHub
            </Button>
            <Button
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
              Preview
            </Button>
          </Flex>
        </Box>
      </Flex>
      <Flex
        m="auto"
        textAlign="center"
        w="80%"
        justifyContent="space-around"
        gap={10}
      >
        <Box
          boxShadow="md"
          borderWidth="1px"
          borderRadius="10px"
          w="45%"
          border={bc}
        >
          <Img
            src="https://github.com/SK-WebDeveloper/portfolio/blob/main/src/project%20img/BathandBody.png?raw=true"
            alt=""
            borderTopRadius="10px"
          />
          <Flex justifyContent="space-around" p="10px">
            <Button
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
              GitHub
            </Button>
            <Button
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
              Preview
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Projects;
