import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Updated Navbar import
import Home from "./pages/Home"; // Placeholder for Home page
import About from "./pages/About"; // Placeholder for About page
import Projects from "./pages/Projects"; // Placeholder for Projects page
import Contact from "./pages/Contact"; // Placeholder for Contact page

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
