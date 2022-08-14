import React from "react";
import { Box, Flex, HStack, Img, Link, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box boxShadow="base" position="sticky" top="0" bg="white">
      <Flex
        justifyContent="space-between"
        width="90%"
        alignContent="center"
        margin="auto"
      >
        <Box>
          <Img
            src="https://github.com/SK-WebDeveloper/portfolio/blob/main/src/logo%20png.png?raw=true"
            alt="logo"
            width="20"
            height="20"
          />
        </Box>
        <HStack gap={10}>
          <Box>
            <Text
              fontSize="xl"
              fontWeight="600"
              _hover={{
                color: "#00B9E8",
                borderBottom: "5px solid",
                borderColor: "#00B9E8",
              }}
            >
              About
            </Text>
          </Box>
          <Box>
            <Text
              fontSize="xl"
              fontWeight="600"
              _hover={{
                color: "#00B9E8",
                borderBottom: "5px solid",
                borderColor: "#00B9E8",
              }}
            >
              Skills
            </Text>
          </Box>
          <Box>
            <Text
              fontSize="xl"
              fontWeight="600"
              _hover={{
                color: "#00B9E8",
                borderBottom: "5px solid",
                borderColor: "#00B9E8",
              }}
            >
              Projects
            </Text>
          </Box>
          <Box>
            <Text
              fontSize="xl"
              fontWeight="600"
              _hover={{
                color: "#00B9E8",
                borderBottom: "5px solid",
                borderColor: "#00B9E8",
              }}
            >
              Contact
            </Text>
          </Box>
          <Box>
            <Text
              fontSize="xl"
              fontWeight="600"
              _hover={{
                color: "#00B9E8",
                borderBottom: "5px solid",
                borderColor: "#00B9E8",
              }}
            >
              Theme
            </Text>
          </Box>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
