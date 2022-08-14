import React from "react";
import { Box, Flex, HStack, Img, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box>
      <Flex justifyContent="space-between" padding="20px" borderBottom="2px solid lightgray">
        <Box><Img src="" alt="logo" /></Box>
        <HStack gap={10}>
          <Box>
            <Text fontSize='xl' fontWeight="600" _hover={{color:"#19D8C8", borderBottom:"5px solid", borderColor:"#19D8C8"}}>About</Text>
          </Box>
          <Box>
            <Text fontSize='xl' fontWeight="600" _hover={{color:"#19D8C8", borderBottom:"5px solid", borderColor:"#19D8C8"}}>Skills</Text>
          </Box>
          <Box>
            <Text fontSize='xl' fontWeight="600" _hover={{color:"#19D8C8", borderBottom:"5px solid", borderColor:"#19D8C8"}}>Projects</Text>
          </Box>
          <Box>
            <Text fontSize='xl' fontWeight="600" _hover={{color:"#19D8C8", borderBottom:"5px solid", borderColor:"#19D8C8"}}>Contact</Text>
          </Box>
          <Box>
            <Text fontSize='xl' fontWeight="600" _hover={{color:"#19D8C8", borderBottom:"5px solid", borderColor:"#19D8C8"}}>Theme</Text>
          </Box>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
