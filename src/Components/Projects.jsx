import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
  useColorMode,
  Link,
  Text,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import React from "react";

const Projects = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  if (colorMode === "dark") {
    // normal
    var bc = "2px solid rgb(150, 150, 226)";
    var tc = "#93989E";
    var bgC = "#222e3d";
    var textC = "#93989E";

    // hover
    var bc1 = "2px solid #00B9E8";
    var tc1 = "#00B9E8";
    var bgC1 = "#222e3d";
  }
  if (colorMode === "light") {
    // normal
    bc = "2px solid white";
    tc = "white";
    bgC = "#00B9E8";
    var textC = "#00B9E8";

    // hover
    bc1 = "2px solid #00B9E8";
    tc1 = "#00B9E8";
    bgC1 = "white";
  }
  return (
    <Box className="projects" pt="6rem">
      <Heading mb="5rem" color={textC}>
        Projects
      </Heading>
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
            <Link
              href="https://github.com/SK-WebDeveloper/Bath-Body-Works"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <Button
                className="dev"
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
            </Link>
            <Text color={textC} fontWeight="500" pt="5px">
              Bath & Body Works
            </Text>
            <Link
              href="https://bathandbodywork.netlify.app/"
              style={{ textDecoration: "none" }}
              target="_blank"
            >
              <Button
                className="dev"
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
                Preview <ExternalLinkIcon mx="2px" ml="7px" />
              </Button>
            </Link>
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
            <Link>
              <Button
                className="dev"
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
            </Link>
            <Text color={textC} fontWeight="500" pt="5px">
              Bath & Body Works
            </Text>
            <Link href="" target="_blank" style={{ textDecoration: "none" }}>
              <Button
                className="dev"
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
                Preview <ExternalLinkIcon mx="2px" ml="7px" />
              </Button>
            </Link>
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
            <Link href="" target="_blank" style={{ textDecoration: "none" }}>
              <Button
                className="dev"
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
            </Link>
            <Text color={textC} fontWeight="500" pt="5px">
              Bath & Body Works
            </Text>
            <Link href="" target="_blank" style={{ textDecoration: "none" }}>
              <Button
                className="dev"
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
                Preview <ExternalLinkIcon mx="2px" ml="7px" />
              </Button>
            </Link>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Projects;
