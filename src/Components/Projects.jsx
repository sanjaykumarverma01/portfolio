import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
  useColorMode,
  Link,
  Stack,
  Text,
  HStack,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import React from "react";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiChakraui,
  SiRedux,
} from "react-icons/si";

const Projects = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  if (colorMode === "dark") {
    // normal
    var bc = "2px solid rgb(150, 150, 226)";
    var tc = "rgb(150, 150, 226)";
    var bgC = "#222e3d";
    var textC = "rgb(150, 150, 226)";

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
    textC = "#00B9E8";
    var bgc = "white";

    // hover
    bc1 = "2px solid #00B9E8";
    tc1 = "#00B9E8";
    bgC1 = "white";
  }
  return (
    <Box className="projects" pt={["2rem", "3rem", "5rem", "6rem"]}>
      <Heading mb={["2rem", "3rem", "4rem", "5rem"]} color={textC}>
        Projects
      </Heading>
      <Flex
        m="auto"
        textAlign="center"
        w={["90%", "90%", "80%"]}
        justifyContent="space-around"
        mb={["0", "0", "0", "50px"]}
        direction={["column", "column", "row"]}
      >
        <Box
          boxShadow="md"
          borderWidth="1px"
          borderRadius="10px"
          w={["100%", "100%", "45%"]}
          border={bc}
          bgColor={bgc}
          mb={["50px", "50px", "0"]}
        >
          <Img
            src="https://user-images.githubusercontent.com/101388961/187072296-15c5b11d-88d4-4c25-bc83-0b9aab7287a2.png"
            alt=""
            borderTopRadius="10px"
            height="260"
            width="100%"
          />
          <Heading color={textC} fontWeight="400" pt="5px" fontSize="xl">
            Hubspot Clone
          </Heading>
          <Box w="90%" m="auto" color={tc1}>
            <Text align={"justify"}>
              HubSpot is an American developer and marketer of software products
              for inbound marketing, sales, and customer service. Hubspot was
              founded by Brian Halligan and Dharmesh Shah in 2006.
            </Text>
          </Box>
          <Flex
            justifyContent="space-around"
            p="10px"
            direction={["column", "column", "row"]}
          >
            <Link
              href="https://github.com/sanjaykumarverma01/hubspot"
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
                borderRadius={["50", "40", "30", "10"]}
              >
                GitHub
              </Button>
            </Link>
            <HStack
              margin={["auto", "auto", "0"]}
              p={["10px 0", "10px 0", "10px 0", "0"]}
            >
              <SiReact fontSize="1.8rem" className="common react" />
              <SiChakraui fontSize="1.8rem" className="common chakra" />
              <SiRedux fontSize="1.8rem" className="common redux" />
              <SiCss3 fontSize="1.8rem" className="common css3" />
            </HStack>
            <Link
              href="https://clone-hubspot.netlify.app"
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
                borderRadius={["50", "40", "30", "10"]}
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
          w={["100%", "100%", "45%"]}
          border={bc}
          bgColor={bgc}
          mb={["50px", "50px", "0"]}
        >
          <Img
            src="https://github.com/sanjaykumarverma01/portfolio/blob/main/src/project%20img/BathandBody.png?raw=true"
            alt=""
            borderTopRadius="10px"
            height="260"
            width="100%"
          />
          <Heading color={textC} fontWeight="400" pt="5px" fontSize="xl">
            Bath & Body Works Clone
          </Heading>
          <Box w="90%" m="auto" color={tc1} >
            <Text align={"justify"}>
              Bath and Body Works is your go-to place for gifts & goodies that
              surprise & delight. From fresh fragrances to soothing skin care,
              we make finding your perfect.
            </Text>
          </Box>
          <Flex
            justifyContent="space-around"
            p="10px"
            direction={["column", "column", "row"]}
          >
            <Link
              href="https://github.com/sanjaykumarverma01/Bath-Body-Works"
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
                borderRadius={["50", "40", "30", "10"]}
              >
                GitHub
              </Button>
            </Link>
            <HStack
              margin={["auto", "auto", "0"]}
              p={["10px 0", "10px 0", "10px 0", "0"]}
            >
              <SiHtml5 fontSize="1.8rem" className="common html5" />
              <SiCss3 fontSize="1.8rem" className="common css3" />
              <SiJavascript fontSize="1.8rem" className="common js" />
            </HStack>
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
                borderRadius={["50", "40", "30", "10"]}
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
        w={["90%", "90%", "80%"]}
        justifyContent="space-around"
        gap={10}
      >
        <Box
          boxShadow="md"
          borderWidth="1px"
          borderRadius="10px"
          w={["100%", "100%", "45%"]}
          border={bc}
          mb="3rem"
          bgColor={bgc}
        >
          <Img
            src="https://github.com/sanjaykumarverma01/portfolio/blob/main/src/project%20img/Nordstrom%20rack.png?raw=true"
            alt=""
            borderTopRadius="10px"
            height="260"
            width="100%"
          />
          <Heading color={textC} fontWeight="400" pt="5px" fontSize="xl">
            Nordstrom Rack Clone
          </Heading>
          <Box w="90%" m="auto" color={tc1}>
            <Text align={"justify"}>
              Nordstrom Rack is an American off-price department store chain
              founded in 1973, and a sister brand to the luxury department store
              chain Nordstrom. It competes with off-price department stores
              including Burlington, Macy's Backstage, Ross Dress for Less, Saks
              Off 5th, and the TJX Companies.
            </Text>
          </Box>
          <Flex
            justifyContent="space-around"
            p="10px"
            direction={["column", "column", "row"]}
          >
            <Link
              href="https://github.com/sanjaykumarverma01/Nordstrom-Rack"
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
                borderRadius={["50", "40", "30", "10"]}
              >
                GitHub
              </Button>
            </Link>
            <HStack
              margin={["auto", "auto", "0"]}
              p={["10px 0", "10px 0", "10px 0", "0"]}
            >
              <SiHtml5 fontSize="1.8rem" className="common html5" />
              <SiCss3 fontSize="1.8rem" className="common css3" />
              <SiJavascript fontSize="1.8rem" className="common js" />
            </HStack>
            <Link
              href="https://nordstrom-rack-shopping.netlify.app/"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <Button
                borderRadius={["50", "40", "30", "10"]}
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
