import React from 'react';
import Home from "./components/homepage/Home";
import About from "./components/aboutpage/About";
import Skills from "./components/aboutpage/Skills";
import Projects from "./components/projectpage/Projects";
import Contact from "./components/contactpage/Contact";
import ECskills from './components/aboutpage/ECskills';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";


function App() {
  return (
    

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills_n_qualifications" element={<Skills />} />
          <Route path="/artexpo" element={<ECskills />} />
        </Routes>
      </Router> 
    
  )
}

export default App;


