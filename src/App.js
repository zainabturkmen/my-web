import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Projects />
    </div>
  );
}

export default App;
