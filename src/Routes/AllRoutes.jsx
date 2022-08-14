import { Box } from "@chakra-ui/react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../Components/About";
import Home from "../Components/Home";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";

const AllRoutes = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Box>
  );
};

export default AllRoutes;
