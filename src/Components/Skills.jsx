import { Heading, Box } from "@chakra-ui/react";
import React from "react";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <Box>
      <Heading mt="7rem" mb="5rem">Skills</Heading>
      <Heading mb="4rem" color="#00B9E8">Developement Tools</Heading>
      <SkillCard />
    </Box>
  );
};

export default Skills;
