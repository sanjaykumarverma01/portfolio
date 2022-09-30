import { Heading, Box, useColorMode, Text } from "@chakra-ui/react";
import React from "react";
import GithubCard from "./GithubCard";
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
    <Box className="skills" pt={["1.5rem","2.5rem","4rem","6rem"]}>
      <Heading mb={["2rem","3rem","4rem","5rem"]} color={tc} size={["2xl"]}>
        Tech Stack <span style={{color:tc2}}>&</span> Tools
      </Heading>
      <SkillCard />
      <GithubCard />
    </Box>
  );
};

export default Skills;
