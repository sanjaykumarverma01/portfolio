import { Heading, Box, useColorMode, Text } from "@chakra-ui/react";
import React from "react";
import SkillCard from "./SkillCard";

const Skills = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  if (colorMode === "dark") {
    var tc = "#93989E";
    var tc2 = "rgb(150, 150, 226)";
  }
  if (colorMode === "light") {
    tc = "#00B9E8";
    tc2 = "gray";
  }
  return (
    <Box className="skills" pt="6rem">
      <Heading mb="5rem" color={tc}>
        Skills
      </Heading>
      <Text fontSize="3xl" mb="3rem" color={tc2}>
        Developement Tools
      </Text>
      <SkillCard />
    </Box>
  );
};

export default Skills;
