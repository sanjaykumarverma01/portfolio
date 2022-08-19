import { Box, useColorMode } from "@chakra-ui/react";
import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  if (colorMode === "light") {
    var bgc = "gray.100";
  }
  return (
    <Box className="App" bgColor={bgc}>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Box>
  );
}

export default App;
