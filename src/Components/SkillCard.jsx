import { Box, Flex, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiChakraui,
  SiJavascript,
  SiReact,
  SiRedux,
  SiBootstrap,
  SiPostman,
  SiGit,
  SiHeroku,
  SiCypress,
  SiJest,
} from "react-icons/si";

const SkillCard = ({}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  if (colorMode === "dark") {
    var bc = "2px solid rgb(150, 150, 226)";
    var bgColor = "#222e3d";
  }
  return (
    <Box>
      <Flex
        m="auto"
        textAlign="center"
        w="80%"
        justifyContent="space-around"
        color="#00B9E8"
        mb="50px"
      >
        <Box
          _hover={{ color: "#E44D26" }}
          boxShadow="base"
          p="6"
          rounded="md"
          bg={bgColor}
          border={bc}
          className="dev"
        >
          <SiHtml5 className="dev" fontSize="4rem" />
          <Text mt="15px">Html</Text>
        </Box>
        <Box
          _hover={{ color: "#264DE4" }}
          boxShadow="base"
          p="6"
          rounded="md"
          bg={bgColor}
          border={bc}
          className="dev"
        >
          <SiCss3 className="dev" fontSize="4rem" />
          <Text mt="15px">Css</Text>
        </Box>
        <Box
          _hover={{ color: "#F7DF1E" }}
          boxShadow="base"
          p="6"
          rounded="md"
          bg={bgColor}
          border={bc}
          className="dev"
        >
          <SiJavascript className="dev" fontSize="4rem" />
          <Text mt="15px">JavaScript</Text>
        </Box>
        <Box
          _hover={{ color: "#53C1DE" }}
          boxShadow="base"
          p="6"
          rounded="md"
          bg={bgColor}
          border={bc}
          className="dev"
        >
          <SiReact className="dev" fontSize="4rem" />
          <Text mt="15px">React</Text>
        </Box>
        <Box
          _hover={{ color: "#764ABC" }}
          boxShadow="base"
          p="6"
          rounded="md"
          bg={bgColor}
          border={bc}
          className="dev"
        >
          <SiRedux className="dev" fontSize="4rem" />
          <Text mt="15px">Redux</Text>
        </Box>
        <Box
          _hover={{ color: "#59C9C8" }}
          boxShadow="base"
          p="6"
          rounded="md"
          bg={bgColor}
          border={bc}
          className="dev"
        >
          <SiChakraui className="dev" fontSize="4rem" />
          <Text mt="15px">Chakra UI</Text>
        </Box>
        <Box
          _hover={{ color: "#732FF9" }}
          boxShadow="base"
          p="6"
          rounded="md"
          bg={bgColor}
          border={bc}
          className="dev"
        >
          <SiBootstrap className="dev" fontSize="4rem" />
          <Text mt="15px">Bootstrap</Text>
        </Box>
      </Flex>
      <Flex
        m="auto"
        textAlign="center"
        w="80%"
        justifyContent="space-around"
        color="#00B9E8"
      >
        <Box
          _hover={{ color: "#DE4C36" }}
          boxShadow="base"
          p="6"
          rounded="md"
          bg={bgColor}
          border={bc}
          className="dev"
        >
          <SiPostman className="dev" fontSize="4rem" />
          <Text mt="15px">Postman</Text>
        </Box>
        <Box
          _hover={{ color: "#DE4C36" }}
          boxShadow="base"
          p="6"
          rounded="md"
          bg={bgColor}
          border={bc}
          className="dev"
        >
          <SiGit className="dev" fontSize="4rem" />
          <Text mt="15px">Git</Text>
        </Box>
        <Box
          _hover={{ color: "#DE4C36" }}
          boxShadow="base"
          p="6"
          rounded="md"
          bg={bgColor}
          border={bc}
          className="dev"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="4rem"
            width="4rem"
            className="dev"
          >
            <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z"></path>
          </svg>
          <Text mt="15px">Npm</Text>
        </Box>
        <Box
          _hover={{ color: "#430098" }}
          boxShadow="base"
          p="6"
          rounded="md"
          bg={bgColor}
          border={bc}
          className="dev"
        >
          <SiHeroku className="dev" fontSize="4rem" />
          <Text mt="15px">Heroku</Text>
        </Box>
        <Box
          _hover={{ color: "black" }}
          boxShadow="base"
          p="6"
          rounded="md"
          bg={bgColor}
          border={bc}
          className="dev"
        >
          <SiCypress className="dev" fontSize="4rem" />
          <Text mt="15px">Cypress</Text>
        </Box>
        <Box
          _hover={{ color: "#99424F" }}
          boxShadow="base"
          p="6"
          rounded="md"
          bg={bgColor}
          border={bc}
          className="dev"
        >
          <SiJest className="dev" fontSize="4rem" />
          <Text mt="15px">Jest</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default SkillCard;
