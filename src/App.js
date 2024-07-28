import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Projects from "./components/Projects";
import { ContactUs } from "./components/ContactUs";
import { Tsparticles } from "./components/Tsparticles";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Tsparticles />
      <Navbar />
      <Home />
      <Services />
      <About />
      <Projects />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
