import { Box, Heading, useColorMode } from "@chakra-ui/react";
import React from "react";

const Contact = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  if (colorMode === "dark") {
    var tc = "#93989E";
  }
  return (
    <Box className="contact" pt="6rem">
      <Heading mb="5rem" color={tc}>
        Contact Me!
      </Heading>
    </Box>
  );
};

export default Contact;
