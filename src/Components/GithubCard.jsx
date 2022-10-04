import { Box, Flex, Heading, Image, useColorMode } from "@chakra-ui/react";
import React from "react";
import contribution1 from "../Assets/contributions1.png";
import contribution2 from "../Assets/contributions2.png";
const GithubCard = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  if (colorMode === "dark") {
    var bc = "2px solid rgb(150, 150, 226)";
    var tc = "#93989E";
  }
  if (colorMode === "light") {
    // var bc = "2px solid teal";
    var tc = "#00B9E8";
  }
  return (
    <Box size={["xs", "sm", "md", "lg"]} mt={["20px", "30px", "40px", "50px"]}>
      <Heading color={tc}>Github Stats</Heading>
      <Flex
        w={["90%", "90%", "80%", "80%"]}
        m="auto"
        mt={["20px", "30px", "40px", "50px"]}
        direction={["column", "column", "row"]}
        justifyContent="space-between"
      >
        <Box
          className="dev"
          w={["90%", "90%", "45%", "45%"]}
          m={["auto", "auto", "none", "none"]}
          boxShadow="md"
        >
          <Image
            w="100%"
            src={
              colorMode === "light"
                ? "https://github-readme-stats.vercel.app/api?username=sanjaykumarverma01&show_icons=true&theme=white"
                : "https://github-readme-stats.vercel.app/api?username=sanjaykumarverma01&show_icons=true&theme=radical"
            }
          />
        </Box>
        <Box
          className="dev"
          w={["90%", "90%", "45%", "45%"]}
          m={["auto", "auto", "none", "none"]}
          mt={["10px", "10px", "0", "0"]}
        >
          <Image
            w="100%"
            src={
              colorMode === "light"
                ? "https://github-readme-stats.vercel.app/api/top-langs/?username=sanjaykumarverma01&layout=compact&theme=white"
                : "https://github-readme-stats.vercel.app/api/top-langs/?username=sanjaykumarverma01&layout=compact&theme=radical"
            }
          />
        </Box>
      </Flex>
      <Heading color={tc} mt={["20px", "30px", "40px", "50px"]}>Github Calendar</Heading>
      <Box
        className="dev"
        w={["80%", "80%", "75%", "76%"]}
        m="auto"
        mt={["10px", "10px", "25px", "35px"]}
        border={bc}
        borderRadius="5px"
      >
        
        <Image
          w="100%"
          src={colorMode === "light" ? contribution1 : contribution2}
          borderRadius="5px"
        />
      </Box>
    </Box>
  );
};

export default GithubCard;
