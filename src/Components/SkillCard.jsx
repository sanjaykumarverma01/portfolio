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
  SiExpress,
  SiMongodb,
  SiNodedotjs,
  SiBabel,
  SiReactrouter,
  SiNetlify,
  SiTypescript,
} from "react-icons/si";

const SkillCard = ({}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  if (colorMode === "dark") {
    var bc = "2px solid rgb(150, 150, 226)";
    var bgColor = "#222e3d";
  }
  return (
    <>
      <Box
        size={["xs", "sm", "md", "lg"]}
        display={["block", "block", "none", "none"]}
      >
        <Flex
          m="auto"
          textAlign="center"
          w={["90%", "90%", "80%", "80%"]}
          justifyContent="space-around"
          color="#00B9E8"
          mb={["20px", "30px", "40px", "50px"]}
        >
          <Box
            _hover={{ color: "#E44D26" }}
            boxShadow="base"
            p={["3", "4", "5", "6"]}
            rounded="md"
            bg={bgColor}
            border={bc}
            className="dev"
          >
            <SiHtml5 className="dev" fontSize="4rem" />
            <Text mt={["12px", "13px", "14px", "15px"]}>Html</Text>
          </Box>
          <Box
            _hover={{ color: "#264DE4" }}
            boxShadow="base"
            p={["3", "4", "5", "6"]}
            rounded="md"
            bg={bgColor}
            border={bc}
            className="dev"
          >
            <SiCss3 className="dev" fontSize="4rem" />
            <Text mt={["12px", "13px", "14px", "15px"]}>Css</Text>
          </Box>
          <Box
            _hover={{ color: "#F7DF1E" }}
            boxShadow="base"
            p={["3", "4", "5", "6"]}
            rounded="md"
            bg={bgColor}
            border={bc}
            className="dev"
          >
            <SiJavascript className="dev" fontSize="4rem" />
            <Text mt={["12px", "13px", "14px", "15px"]}>JavaScript</Text>
          </Box>
        </Flex>
        <Flex
          m="auto"
          textAlign="center"
          w={["90%", "90%", "80%", "80%"]}
          justifyContent="space-around"
          color="#00B9E8"
          mb={["20px", "30px", "40px", "50px"]}
        >
          <Box
            _hover={{ color: "#53C1DE" }}
            boxShadow="base"
            p={["3", "4", "5", "6"]}
            rounded="md"
            bg={bgColor}
            border={bc}
            className="dev"
          >
            <SiReact className="dev" fontSize="4rem" />
            <Text mt={["12px", "13px", "14px", "15px"]}>React</Text>
          </Box>
          <Box
            _hover={{ color: "#764ABC" }}
            boxShadow="base"
            p={["3", "4", "5", "6"]}
            rounded="md"
            bg={bgColor}
            border={bc}
            className="dev"
          >
            <SiRedux className="dev" fontSize="4rem" />
            <Text mt={["12px", "13px", "14px", "15px"]}>Redux</Text>
          </Box>
          <Box
            _hover={{ color: "#83CD29" }}
            boxShadow="base"
            p={["3", "4", "5", "6"]}
            rounded="md"
            bg={bgColor}
            border={bc}
            className="dev"
          >
            <SiNodedotjs className="dev" fontSize="4rem" />
            <Text mt={["12px", "13px", "14px", "15px"]}>NodeJS</Text>
          </Box>
        </Flex>
        <Flex
          m="auto"
          textAlign="center"
          w={["90%", "90%", "80%", "80%"]}
          justifyContent="space-around"
          color="#00B9E8"
          mb={["20px", "30px", "40px", "50px"]}
        >
          <Box
            _hover={{ color: "#F10301" }}
            boxShadow="base"
            p={["3", "4", "5", "6"]}
            rounded="md"
            bg={bgColor}
            border={bc}
            className="dev"
          >
            <SiExpress className="dev" fontSize="4rem" />
            <Text mt={["12px", "13px", "14px", "15px"]}>Express</Text>
          </Box>
          <Box
            _hover={{ color: "#00ED64" }}
            boxShadow="base"
            p={["3", "4", "5", "6"]}
            rounded="md"
            bg={bgColor}
            border={bc}
            className="dev"
          >
            <SiMongodb className="dev" fontSize="4rem" />
            <Text mt={["12px", "13px", "14px", "15px"]}>MongoDB</Text>
          </Box>
          <Box
            _hover={{ color: "#59C9C8" }}
            boxShadow="base"
            p={["3", "4", "5", "6"]}
            rounded="md"
            bg={bgColor}
            border={bc}
            className="dev"
          >
            <SiChakraui className="dev" fontSize="4rem" />
            <Text mt={["12px", "13px", "14px", "15px"]}>Chakra UI</Text>
          </Box>
        </Flex>
        <Flex
          m="auto"
          textAlign="center"
          w={["90%", "90%", "80%", "80%"]}
          justifyContent="space-around"
          color="#00B9E8"
          mb={["20px", "30px", "40px", "50px"]}
        >
          <Box
            _hover={{ color: "#732FF9" }}
            boxShadow="base"
            p={["3", "4", "5", "6"]}
            rounded="md"
            bg={bgColor}
            border={bc}
            className="dev"
          >
            <SiBootstrap className="dev" fontSize="4rem" />
            <Text mt={["12px", "13px", "14px", "15px"]}>Bootstrap</Text>
          </Box>
          <Box
            _hover={{ color: "#DE4C36" }}
            boxShadow="base"
            p={["3", "4", "5", "6"]}
            rounded="md"
            bg={bgColor}
            border={bc}
            className="dev"
          >
            <SiPostman className="dev" fontSize="4rem" />
            <Text mt={["12px", "13px", "14px", "15px"]}>Postman</Text>
          </Box>
          <Box
            _hover={{ color: "#DE4C36" }}
            boxShadow="base"
            p={["3", "4", "5", "6"]}
            rounded="md"
            bg={bgColor}
            border={bc}
            className="dev"
          >
            <SiGit className="dev" fontSize="4rem" />
            <Text mt={["12px", "13px", "14px", "15px"]}>Git</Text>
          </Box>
        </Flex>
        <Flex
          m="auto"
          textAlign="center"
          w={["90%", "90%", "80%", "80%"]}
          justifyContent="space-around"
          color="#00B9E8"
          mb={["20px", "30px", "40px", "50px"]}
        >
          <Box
            _hover={{ color: "#DE4C36" }}
            boxShadow="base"
            p={["3", "4", "5", "6"]}
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
            <Text mt={["12px", "13px", "14px", "15px"]}>Npm</Text>
          </Box>
          <Box
            _hover={{ color: "#430098" }}
            boxShadow="base"
            p={["3", "4", "5", "6"]}
            rounded="md"
            bg={bgColor}
            border={bc}
            className="dev"
          >
            <SiHeroku className="dev" fontSize="4rem" />
            <Text mt={["12px", "13px", "14px", "15px"]}>Heroku</Text>
          </Box>
          <Box
            _hover={{ color: "black" }}
            boxShadow="base"
            p={["3", "4", "5", "6"]}
            rounded="md"
            bg={bgColor}
            border={bc}
            className="dev"
          >
            <SiCypress className="dev" fontSize="4rem" />
            <Text mt={["12px", "13px", "14px", "15px"]}>Cypress</Text>
          </Box>
        </Flex>
        <Flex
          m="auto"
          textAlign="center"
          w={["90%", "90%", "80%", "80%"]}
          justifyContent="space-around"
          color="#00B9E8"
          mb={["20px", "30px", "40px", "50px"]}
        >
          <Box
            _hover={{ color: "#99424F" }}
            boxShadow="base"
            p={["3", "4", "5", "6"]}
            rounded="md"
            bg={bgColor}
            border={bc}
            className="dev"
          >
            <SiJest className="dev" fontSize="4rem" />
            <Text mt={["12px", "13px", "14px", "15px"]}>Jest</Text>
          </Box>
          <Box
            _hover={{ color: "gold" }}
            boxShadow="base"
            p={["3", "4", "5", "6"]}
            rounded="md"
            bg={bgColor}
            border={bc}
            className="dev"
          >
            <SiBabel className="dev" fontSize="4rem" />
            <Text mt={["12px", "13px", "14px", "15px"]}>Babel</Text>
          </Box>
          <Box
            _hover={{ color: "darkred" }}
            boxShadow="base"
            p={["3", "4", "5", "6"]}
            rounded="md"
            bg={bgColor}
            border={bc}
            className="dev"
          >
            <SiReactrouter className="dev" fontSize="4rem" />
            <Text mt={["12px", "13px", "14px", "15px"]}>Router</Text>
          </Box>
        </Flex>
        <Flex
          m="auto"
          textAlign="center"
          w={["90%", "90%", "80%", "80%"]}
          justifyContent="space-around"
          color="#00B9E8"
          mb={["20px", "30px", "40px", "50px"]}
        >
          <Box
            _hover={{ color: "#4C9ABE" }}
            boxShadow="base"
            p={["3", "4", "5", "6"]}
            rounded="md"
            bg={bgColor}
            border={bc}
            className="dev"
          >
            <SiNetlify className="dev" fontSize="4rem" />
            <Text mt={["12px", "13px", "14px", "15px"]}>Netlify</Text>
          </Box>
          <Box
            _hover={{ color: "#017ACD" }}
            boxShadow="base"
            p={["3", "4", "5", "6"]}
            rounded="md"
            bg={bgColor}
            border={bc}
            className="dev"
          >
            <SiTypescript className="dev" fontSize="4rem" />
            <Text mt={["12px", "13px", "14px", "15px"]}>Typescript</Text>
          </Box>
        </Flex>
      </Box>
      <Box
        size={["xs", "sm", "md", "lg"]}
        display={["none", "none", "block", "block"]}
      >
        <Flex
          m="auto"
          textAlign="center"
          w={["90%", "90%", "80%", "80%"]}
          justifyContent="space-around"
          color="#00B9E8"
          mb={["20px", "30px", "40px", "50px"]}
        >
          <Box
            _hover={{ color: "#E44D26" }}
            boxShadow="base"
            p={["3", "4", "5", "6"]}
            rounded="md"
            bg={bgColor}
            border={bc}
            className="dev"
          >
            <SiHtml5 className="dev" fontSize="4rem" />
            <Text mt={["12px", "13px", "14px", "15px"]}>Html</Text>
          </Box>
          <Box
            _hover={{ color: "#264DE4" }}
            boxShadow="base"
            p={["3", "4", "5", "6"]}
            rounded="md"
            bg={bgColor}
            border={bc}
            className="dev"
          >
            <SiCss3 className="dev" fontSize="4rem" />
            <Text mt={["12px", "13px", "14px", "15px"]}>Css</Text>
          </Box>
          <Box
            _hover={{ color: "#F7DF1E" }}
            boxShadow="base"
            p={["3", "4", "5", "6"]}
            rounded="md"
            bg={bgColor}
            border={bc}
            className="dev"
          >
            <SiJavascript className="dev" fontSize="4rem" />
            <Text mt={["12px", "13px", "14px", "15px"]}>JavaScript</Text>
          </Box>
          <Box
            _hover={{ color: "#53C1DE" }}
            boxShadow="base"
            p={["3", "4", "5", "6"]}
            rounded="md"
            bg={bgColor}
            border={bc}
            className="dev"
          >
            <SiReact className="dev" fontSize="4rem" />
            <Text mt={["12px", "13px", "14px", "15px"]}>React</Text>
          </Box>
          <Box
            _hover={{ color: "#764ABC" }}
            boxShadow="base"
            p={["3", "4", "5", "6"]}
            rounded="md"
            bg={bgColor}
            border={bc}
            className="dev"
          >
            <SiRedux className="dev" fontSize="4rem" />
            <Text mt={["12px", "13px", "14px", "15px"]}>Redux</Text>
          </Box>
          <Box
            _hover={{ color: "#83CD29" }}
            boxShadow="base"
            p={["3", "4", "5", "6"]}
            rounded="md"
            bg={bgColor}
            border={bc}
            className="dev"
          >
            <SiNodedotjs className="dev" fontSize="4rem" />
            <Text mt={["12px", "13px", "14px", "15px"]}>NodeJS</Text>
          </Box>
          <Box
            _hover={{ color: "#F10301" }}
            boxShadow="base"
            p={["3", "4", "5", "6"]}
            rounded="md"
            bg={bgColor}
            border={bc}
            className="dev"
          >
            <SiExpress className="dev" fontSize="4rem" />
            <Text mt={["12px", "13px", "14px", "15px"]}>Express</Text>
          </Box>
          <Box
            _hover={{ color: "#00ED64" }}
            boxShadow="base"
            p={["3", "4", "5", "6"]}
            rounded="md"
            bg={bgColor}
            border={bc}
            className="dev"
          >
            <SiMongodb className="dev" fontSize="4rem" />
            <Text mt={["12px", "13px", "14px", "15px"]}>MongoDB</Text>
          </Box>
        </Flex>
        <Flex
          m="auto"
          textAlign="center"
          w={["90%", "90%", "80%", "80%"]}
          justifyContent="space-around"
          color="#00B9E8"
          mb={["20px", "30px", "40px", "50px"]}
        >
          <Box
            _hover={{ color: "#59C9C8" }}
            boxShadow="base"
            p={["3", "4", "5", "6"]}
            rounded="md"
            bg={bgColor}
            border={bc}
            className="dev"
          >
            <SiChakraui className="dev" fontSize="4rem" />
            <Text mt={["12px", "13px", "14px", "15px"]}>Chakra UI</Text>
          </Box>
          <Box
            _hover={{ color: "#732FF9" }}
            boxShadow="base"
            p={["3", "4", "5", "6"]}
            rounded="md"
            bg={bgColor}
            border={bc}
            className="dev"
          >
            <SiBootstrap className="dev" fontSize="4rem" />
            <Text mt={["12px", "13px", "14px", "15px"]}>Bootstrap</Text>
          </Box>
          <Box
            _hover={{ color: "#DE4C36" }}
            boxShadow="base"
            p={["3", "4", "5", "6"]}
            rounded="md"
            bg={bgColor}
            border={bc}
            className="dev"
          >
            <SiPostman className="dev" fontSize="4rem" />
            <Text mt={["12px", "13px", "14px", "15px"]}>Postman</Text>
          </Box>
          <Box
            _hover={{ color: "#DE4C36" }}
            boxShadow="base"
            p={["3", "4", "5", "6"]}
            rounded="md"
            bg={bgColor}
            border={bc}
            className="dev"
          >
            <SiGit className="dev" fontSize="4rem" />
            <Text mt={["12px", "13px", "14px", "15px"]}>Git</Text>
          </Box>
          <Box
            _hover={{ color: "#DE4C36" }}
            boxShadow="base"
            p={["3", "4", "5", "6"]}
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
            <Text mt={["12px", "13px", "14px", "15px"]}>Npm</Text>
          </Box>
          <Box
            _hover={{ color: "#430098" }}
            boxShadow="base"
            p={["3", "4", "5", "6"]}
            rounded="md"
            bg={bgColor}
            border={bc}
            className="dev"
          >
            <SiHeroku className="dev" fontSize="4rem" />
            <Text mt={["12px", "13px", "14px", "15px"]}>Heroku</Text>
          </Box>
          <Box
            _hover={{ color: "black" }}
            boxShadow="base"
            p={["3", "4", "5", "6"]}
            rounded="md"
            bg={bgColor}
            border={bc}
            className="dev"
          >
            <SiCypress className="dev" fontSize="4rem" />
            <Text mt={["12px", "13px", "14px", "15px"]}>Cypress</Text>
          </Box>
          <Box
            _hover={{ color: "#99424F" }}
            boxShadow="base"
            p={["3", "4", "5", "6"]}
            rounded="md"
            bg={bgColor}
            border={bc}
            className="dev"
          >
            <SiJest className="dev" fontSize="4rem" />
            <Text mt={["12px", "13px", "14px", "15px"]}>Jest</Text>
          </Box>
        </Flex>
        <Flex
          m="auto"
          textAlign="center"
          w={["90%", "90%", "80%", "80%"]}
          justifyContent="space-around"
          color="#00B9E8"
          mb={["20px", "30px", "40px", "50px"]}
        >
          <Box
            _hover={{ color: "gold" }}
            boxShadow="base"
            p={["3", "4", "5", "6"]}
            rounded="md"
            bg={bgColor}
            border={bc}
            className="dev"
          >
            <SiBabel className="dev" fontSize="4rem" />
            <Text mt={["12px", "13px", "14px", "15px"]}>Babel</Text>
          </Box>
          <Box
            _hover={{ color: "darkred" }}
            boxShadow="base"
            p={["3", "4", "5", "6"]}
            rounded="md"
            bg={bgColor}
            border={bc}
            className="dev"
          >
            <SiReactrouter className="dev" fontSize="4rem" />
            <Text mt={["12px", "13px", "14px", "15px"]}>React Router</Text>
          </Box>
          <Box
            _hover={{ color: "#4C9ABE" }}
            boxShadow="base"
            p={["3", "4", "5", "6"]}
            rounded="md"
            bg={bgColor}
            border={bc}
            className="dev"
          >
            <SiNetlify className="dev" fontSize="4rem" />
            <Text mt={["12px", "13px", "14px", "15px"]}>Netlify</Text>
          </Box>
          <Box
            _hover={{ color: "#017ACD" }}
            boxShadow="base"
            p={["3", "4", "5", "6"]}
            rounded="md"
            bg={bgColor}
            border={bc}
            className="dev"
          >
            <SiTypescript className="dev" fontSize="4rem" />
            <Text mt={["12px", "13px", "14px", "15px"]}>Typescript</Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default SkillCard;
