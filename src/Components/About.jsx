import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <Box>
      <Text fontSize="4xl" mt="2rem" fontWeight="600">
        About Me
      </Text>
      <Flex>
        <Box>
          <Text>
            Hi Everyone, I am <span>Sanjaykumar Verma</span> from{" "}
            <span>Sultanpur, U.P.</span>
          </Text>

          <Text></Text>
        </Box>
        <Box></Box>
      </Flex>
    </Box>
  );
};

export default About;
