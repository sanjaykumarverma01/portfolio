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
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { saveAs } from "file-saver";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Home = () => {
  const handleDownload = () => {
    window.open(
      "https://drive.google.com/file/d/13glAAJDaMXdXr8iCqUOMSZT8BDzXIVxU/view?usp=sharing",
      "_blank"
    );
  };

  const { colorMode, toggleColorMode } = useColorMode();
  if (colorMode === "dark") {
    // normal
    var bc = "2px solid rgb(150, 150, 226)";
    var tc = "#93989E";
    var bgC = "#222e3d";
    var t = "#93989E";

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
    t = "black";
    // hover
    bc1 = "2px solid #00B9E8";
    tc1 = "#00B9E8";
    bgC1 = "white";
  }

  return (
    <Box
      className="main"
      pt={["30px", "40px", "60px", "70px"]}
      size={["xs", "sm", "md", "lg"]}
    >
      <Flex
        justifyContent="space-around"
        mt={[".5rem", "1rem", "1.5rem", "2rem"]}
        direction={["column", "column", "row"]}
        alignItems={["center", "center"]}
      >
        <Box
          w={["80%", "80%", "40%", "40%"]}
          display={["none", "none", "block", "block"]}
        >
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
          <Box textAlign="left">
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
              RESUME <ExternalLinkIcon ml="10px" />
            </Button>
          </Box>
        </Box>
        <Box w={["90%", "90%", "40%", "40%"]}>
          <Img
            w="100%"
            h={["200px", "250px", "300px", "350px"]}
            src="https://github.com/SK-WebDeveloper/portfolio/blob/main/src/home.gif?raw=true"
            alt="Home Page"
            borderRadius="3px"
          />
        </Box>
        <Box
          w={["80%", "80%", "40%", "40%"]}
          display={["block", "block", "none", "none"]}
          mt={["10px", "20px", "none", "none"]}
        >
          <Text
            fontSize={["2xl", "3xl", "4xl", "5xl"]}
            fontWeight={["200", "300", "400", "400"]}
            textAlign="justify"
          >
            Hi There! 👋🏻
          </Text>
          <Text
            fontSize={["2xl", "3xl", "4xl", "5xl"]}
            fontWeight={["400", "400", "500", "500"]}
            textAlign="justify"
          >
            🙏🏻 <span style={{ color: "#00B9E8" }}>Sanjaykumar Verma 🙏🏻 </span>
          </Text>
          <Text fontSize={["md", "lg", "xl", "2xl"]} textAlign="justify">
            I am passionate about creating awesome user experiences using the
            latest front-end and back-end technologies. Able to work under
            pressure, a passionate problem solver, and a quick learner.
          </Text>
          <Box textAlign="left">
            <Button
              onClick={handleDownload}
              mt="1rem"
              borderRadius={["50", "40", "30", "20"]}
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
              RESUME <ExternalLinkIcon ml="10px" />
            </Button>
          </Box>
        </Box>
      </Flex>
      <Box mt={["2rem", "3rem", "4rem", "5rem"]}>
        <Box>
          <Heading color={t}>Get in Touch</Heading>
          <Text fontSize={["15px", "16px", "17px", "18px"]} mt=".5rem">
            Whether you want to get in touch, or talk about a project
            collaboration
          </Text>
          <Text fontSize="18px" fontWeight={["400", "500"]} mt=".5rem">
            Feel free to contact me
          </Text>
        </Box>
        <Flex
          width={["15%", "15%", "10%", "10%"]}
          margin="auto"
          justifyContent={[
            "space-between",
            "space-between",
            "space-evenly",
            "space-evenly",
          ]}
          mt="1rem"
        >
          <Box
            _hover={{ color: "teal" }}
            fontSize={["20px", "30px", "40px", "40px"]}
          >
            <a href="https://github.com/sanjaykumarverma01" target="_blank">
              <BsGithub />
            </a>
          </Box>
          <Box
            _hover={{ bgColor: "#0A66C2" }}
            fontSize={["20px", "30px", "40px", "40px"]}
          >
            <a
              href="https://www.linkedin.com/in/sanjaykumar-verma-a73349219/"
              target="_blank"
            >
              <BsLinkedin />
            </a>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
