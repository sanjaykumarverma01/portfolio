import { Heading, Box, useColorMode } from "@chakra-ui/react";
import React from "react";
import SkillCard from "./SkillCard";

const Skills = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  if (colorMode === "dark") {
    var tc = "#93989E";
    var tc2 = "rgb(150, 150, 226)";
  }
  return (
    <Box className="skills" pt="6rem">
      <Heading mb="5rem" color={tc}>
        Skills
      </Heading>
      <Heading mb="4rem" color={tc2}>
        Developement Tools
      </Heading>
      <SkillCard />
    </Box>
  );
};

export default Skills;
