import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <About />
    </div>
  );
}

export default App;
