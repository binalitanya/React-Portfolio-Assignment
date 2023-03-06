import React from "react";
import "./index.css";

import Nav from "./pages/Nav";
import Home from "./pages/Home";
import Wave from "./grey-wave.svg";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      
      <Nav />
      <Home />

      <div className="wave">
        <img src={Wave} alt="Page transition wave" />
      </div>

      <About />
      <Skills />
      <Contact />

    </div>
  );
}

export default App;
