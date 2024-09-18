import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom"; // For smooth scrolling

// Command Button Component
const CommandButton = ({ command, link }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="mt-2"
  >
    <Link
      to={`/${link}`}
      // smooth={true}
      duration={500}
      className="text-lg font-mono text-red-500 cursor-pointer hover:text-gray-800 neon-text"
    >
      {command}
    </Link>
  </motion.div>
);

// Welcome Message Component
const WelcomeMessage = ({ onComplete }) => {
  const [showFirstMessage, setShowFirstMessage] = useState(true);
  const [showSecondMessage, setShowSecondMessage] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowFirstMessage(false);
      setShowSecondMessage(true);
    }, 1000); // Show first message for 1 second

    const timer2 = setTimeout(() => {
      setShowSecondMessage(false);
      onComplete(); // Notify parent component when animation is complete
    }, 4000); // Show second message for 2 seconds, adjust if needed

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* First Message */}
      {showFirstMessage && (
        <motion.h1
          className="text-4xl font-bold text-red-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Welcome
        </motion.h1>
      )}

      {/* Second Message with Typewriter Effect */}
      {showSecondMessage && (
        <TypeAnimation
          sequence={[
            "I'm the developer you need...", // Types this message
            4000, // Waits for 2 seconds
          ]}
          wrapper="h2"
          speed={50}
          className="text-4xl font-semibold text-gray-700 mt-4 mx-4"
        />
      )}
    </div>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <div className="relative h-[calc(100vh-100px)] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-gray-100 to-gray-300">
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
        <h1 className="text-2xl md:text-5xl font-semibold text-red-500">
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
        </h2>
      </motion.section>
    </motion.div>
  );
};

export default Home;
