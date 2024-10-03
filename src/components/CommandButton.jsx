import React from "react";
import { Link } from "react-router-dom";
// For smooth scrolling(react-scrool)
import { motion } from "framer-motion";

const CommandButton = ({ command, link }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="mt-2"
    >
      <Link
        to={link}
        // smooth={true}
        duration={500}
        className="text-lg font-mono text-red-500 cursor-pointer hover:text-gray-800 neon-text"
      >
        {command}
      </Link>
    </motion.div>
  );
};

export default CommandButton;
