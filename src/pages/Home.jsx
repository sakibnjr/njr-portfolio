import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import WelcomeMessage from "../components/WelcomeMessage";
import HeroSection from "../components/HeroSection";
// import Contact from "./Contact";

// Home Component
const Home = () => {
  const [showContent, setShowContent] = useState(false);

  // Function to handle when the WelcomeMessage animation is complete
  const handleWelcomeComplete = () => {
    setShowContent(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50"
    >
      {/* Welcome Message */}
      {!showContent && <WelcomeMessage onComplete={handleWelcomeComplete} />}

      {/* Hero Section */}
      {showContent && <HeroSection />}

      {/* Smooth Scrolling Sections */}
      <motion.section
        className="min-h-screen flex items-center justify-center bg-gray-100 text-center"
        id="projects"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-bold text-red-500">Projects</h2>
      </motion.section>

      <motion.section
        className="min-h-screen flex items-center justify-center bg-gray-200 text-center"
        id="skills"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-bold text-red-500">Skills</h2>
      </motion.section>

      <motion.section
        className="min-h-screen flex items-center justify-center bg-gray-300 text-center"
        id="contact"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-bold text-red-500">
          Let's Build Together
          {/* <Contact /> */}
        </h2>
      </motion.section>
    </motion.div>
  );
};

export default Home;
