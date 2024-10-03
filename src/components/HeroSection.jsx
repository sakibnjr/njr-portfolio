import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import CommandButton from "../components/CommandButton";

// Hero Section
const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-gray-100 to-gray-300">
      {/* Parallax Background Effect */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-fixed"
        style={{
          backgroundImage: "url(/path-to-your-background-image.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Main Content */}
      <motion.div
        className="z-10 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Typewriter Effect for Name */}
        <h1 className="text-3xl md:text-5xl font-semibold text-red-500">
          <TypeAnimation
            sequence={[
              "Sakib Nahid",
              1500,
              "Innovating The Web",
              1000,
              "Faster Than Ever",
              1000,
              "Next-Level Performance",
              1000,
              "Seamless Interactions",
              800,
              "Beautifully Designed",
              800,
              "Built for the Future",
              800,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>

        <p className="mt-4 md:text-xl text-gray-600">
          Full Stack Developer | MERN Specialist
        </p>

        {/* Neon Terminal Commands */}
        <div className="mt-6 flex flex-col items-center">
          <p className="text-md text-gray-500 font-mono">{`> Type a command:`}</p>
          <CommandButton command="> show projects" link="projects" />
          <CommandButton command="> check skills" link="skills" />
          <CommandButton command="> let's build" link="contact" />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
