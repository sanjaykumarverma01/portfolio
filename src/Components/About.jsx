import { Box, Flex, Img, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <Box>
      <Text fontSize="4xl" mt="5rem" fontWeight="600">
        About Me
      </Text>
      <Flex width="80%" margin="auto" textAlign="justify" mt="3rem">
        <Box width="40%">
          <Text fontSize="xl" >
            Hi Everyone, I am{" "}
            <span style={{ fontWeight: "bold" }}>Sanjaykumar Verma</span> from{" "}
            <span style={{ fontWeight: "bold" }}>Sultanpur, U.P.</span>
          </Text>

          <Text fontSize="xl">
            Web Developer who loves to transform ideas into reality using my web
            developement tools though coding
          </Text>
          <Text fontSize="xl">
            Motivated developer with expertise in creating custom websites with
            front-end and back-end languages, responsive frameworks and
            database.
          </Text>
          <Text fontSize="xl">
            Apart from coding, some other activities that I love to do!
          </Text >
          <Text ml="1rem" fontSize="xl">
            <UnorderedList>
              <ListItem>Playing Video Games</ListItem>
              <ListItem>Making Vlogs</ListItem>
              <ListItem>Watching Movies & Web Series</ListItem>
              <ListItem>Bike Rides</ListItem>
            </UnorderedList>
          </Text>
        </Box>
        <Box width="40%">
            <Img src="" alt="" />
        </Box>
      </Flex>
    </Box>
  );
};

export default About;
