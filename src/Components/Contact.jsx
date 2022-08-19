import {
  Box,
  FormControl,
  Heading,
  Input,
  VStack,
  Button,
  useColorMode,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Contact = () => {
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
    textC = "#00B9E8";
    var bgc = "gray.200"

    // hover
    bc1 = "2px solid #00B9E8";
    tc1 = "#00B9E8";
    bgC1 = "white";
  }

  const handleSubmit = () => {};
  return (
    <Box className="contact" pt="6rem" height="100vh" bgColor={bgc}>
      <Heading mb="5rem" color={textC}>
        Contact Me!
      </Heading>
      <Box w="30%" m="auto">
        <FormControl onSubmit={handleSubmit}>
          <VStack gap={5}>
            <Input
              boxShadow="lg"
              w="25rem"
              placeholder="Enter Your Name"
              borderRadius="10px"
            />
            <Input
              boxShadow="lg"
              w="25rem"
              placeholder="Enter Email Address"
              borderRadius="10px"
            />
            <Input
              boxShadow="lg"
              w="25rem"
              placeholder="Type Message..."
              borderRadius="10px"
            />
            <Button
              mt={4}
              bgColor={bgC}
              type="submit"
              color={tc}
              border={bc}
              _hover={{
                border: bc1,
                bgColor: bgC1,
                color: tc1,
              }}
            >
              Submit
            </Button>
            <Box mt="5rem">
              <Box>
                <Text fontSize="18px" fontWeight="500" mt=".5rem">
                  You can also connect with me on
                </Text>
              </Box>
              <Flex
                width="60%"
                margin="auto"
                justifyContent="space-evenly"
                mt="1rem"
              >
                <Box _hover={{ color: "teal" }}>
                  <a href="https://github.com/SK-WebDeveloper" target="_blank">
                    <BsGithub fontSize="40px" />
                  </a>
                </Box>
                <Box _hover={{ bgColor: "#0A66C2" }}>
                  <a
                    href="https://www.linkedin.com/in/sanjaykumar-verma-a73349219/"
                    target="_blank"
                  >
                    <BsLinkedin fontSize="40px" />
                  </a>
                </Box>
              </Flex>
            </Box>
          </VStack>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Contact;
