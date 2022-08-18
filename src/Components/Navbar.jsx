import React from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  Img,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { Switch } from "@chakra-ui/react";
import { Link } from "react-scroll";
import { BsFillMoonFill, BsSun } from "react-icons/bs";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  if (colorMode === "dark") {
    var bgColor = "#222e3d";
    var tc = "#93989E"
  } 
  else{
    var bgColor = "white";
  }
  return (
    <Box
      boxShadow="base"
      position="sticky"
      top="0"
      bgColor={bgColor}
      className="navbar"
      zIndex={1000}
    >
      <Flex
        justifyContent="space-between"
        width="90%"
        alignContent="center"
        margin="auto"
        color={tc}
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
                  borderRadius: "5px",
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
                  borderRadius: "5px",
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
                  borderRadius: "5px",
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
                  borderRadius: "5px",
                }}
              >
                Contact
              </Text>
            </Link>
          </Box>
          <Box _hover={{ cursor: "pointer" }}>
            <Button
              size="lg"
              colorScheme="blue"
              onClick={toggleColorMode}
              variant="ghost"
              _hover={{
                color: "#00B9E8",
                borderBottom: "5px solid",
                borderColor: "#00B9E8",
              }}
            >
              {colorMode === "light" ? <BsFillMoonFill /> : <BsSun />}
            </Button>
          </Box>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
