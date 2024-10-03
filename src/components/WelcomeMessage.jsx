import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";

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
            "I'm the developer you need . . .", // Types this message
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

export default WelcomeMessage;
