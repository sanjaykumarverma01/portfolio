import React from "react";
import { Box, Flex, HStack, Img, Text } from "@chakra-ui/react";
import { Switch } from "@chakra-ui/react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <Box boxShadow="base" position="sticky" top="0" bg="white" className="navbar" mb="2rem">
      <Flex
        justifyContent="space-between"
        width="90%"
        alignContent="center"
        margin="auto"
      >
        <Box _hover={{ cursor: "pointer" }}>
          <Link
            to="main"
            smooth={true}
            duration={1000}
            activeClass="active"
            spy={true}
            hashSpy={true}
          >
            <Img
              src="https://github.com/SK-WebDeveloper/portfolio/blob/main/src/logo%20png.png?raw=true"
              alt="logo"
              width="20"
              height="20"
            />
          </Link>
        </Box>
        <HStack gap={10}>
          <Box>
            <Link
              to="about"
              smooth={true}
              duration={1000}
              activeClass="active"
              spy={true}
              hashSpy={true}
            >
              <Text
                fontSize="xl"
                fontWeight="600"
                _hover={{
                  color: "#00B9E8",
                  borderBottom: "5px solid",
                  borderColor: "#00B9E8",
                  cursor: "pointer",
                }}
              >
                About
              </Text>
            </Link>
          </Box>
          <Box>
            <Link
              to="skills"
              smooth={true}
              duration={1000}
              activeClass="active"
              spy={true}
              hashSpy={true}
            >
              <Text
                fontSize="xl"
                fontWeight="600"
                _hover={{
                  color: "#00B9E8",
                  borderBottom: "5px solid",
                  borderColor: "#00B9E8",
                  cursor: "pointer",
                }}
              >
                Skills
              </Text>
            </Link>
          </Box>
          <Box>
            <Link
              to="projects"
              smooth={true}
              duration={1000}
              activeClass="active"
              spy={true}
              hashSpy={true}
            >
              <Text
                fontSize="xl"
                fontWeight="600"
                _hover={{
                  color: "#00B9E8",
                  borderBottom: "5px solid",
                  borderColor: "#00B9E8",
                  cursor: "pointer",
                }}
              >
                Projects
              </Text>
            </Link>
          </Box>
          <Box>
            <Link
              to="contact"
              smooth={true}
              duration={1000}
              activeClass="active"
              spy={true}
              hashSpy={true}
            >
              <Text
                fontSize="xl"
                fontWeight="600"
                _hover={{
                  color: "#00B9E8",
                  borderBottom: "5px solid",
                  borderColor: "#00B9E8",
                  cursor: "pointer",
                }}
              >
                Contact
              </Text>
            </Link>
          </Box>
          <Box _hover={{ cursor: "pointer" }}>
            <Switch size="md" />
          </Box>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
