import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Projects from "./components/Projects";
import { ContactUs } from "./components/ContactUs";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Projects />
      <ContactUs />
    </div>
  );
}

export default App;
