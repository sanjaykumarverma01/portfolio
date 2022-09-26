import { Heading, Box, useColorMode, Text } from "@chakra-ui/react";
import React from "react";
import SkillCard from "./SkillCard";

const Skills = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  if (colorMode === "dark") {
    var tc = "rgb(150, 150, 226)";
    var tc2 = "#00B9E8";
  }
  if (colorMode === "light") {
    tc = "#00B9E8";
    tc2 = "rgb(150, 150, 226)";
  }
  return (
    <Box className="skills" pt="6rem">
      <Heading mb="5rem" color={tc}>
        Tech Stack <span style={{color:tc2}}>&</span> Tools
      </Heading>
      <SkillCard />
    </Box>
  );
};

export default Skills;
