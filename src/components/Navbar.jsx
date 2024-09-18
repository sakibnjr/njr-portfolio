import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <>
      {/* Navbar for Desktop View */}
      <motion.nav
        className="hidden md:flex backdrop-blur-md bg-white/50 shadow-lg text-gray-900 z-50 sticky top-0"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
          {/* Left Side Buttons */}
          <div className="flex space-x-6">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="transition-all duration-300"
            >
              <NavLink
                to="/"
                className="text-red-500 font-semibold hover:text-gray-700"
              >
                Home
              </NavLink>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="transition-all duration-300"
            >
              <NavLink
                to="/about"
                className="text-red-500 font-semibold hover:text-gray-700"
              >
                About
              </NavLink>
            </motion.div>
          </div>

          {/* Site Name in Center */}
          <motion.h1
            className="text-2xl font-bold text-red-500"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            SakibNJr
          </motion.h1>

          {/* Right Side Buttons */}
          <div className="flex space-x-6">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="transition-all duration-300"
            >
              <NavLink
                to="/projects"
                className="text-red-500 font-semibold hover:text-gray-700"
              >
                Projects
              </NavLink>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="transition-all duration-300"
            >
              <NavLink
                to="/contact"
                className="text-red-500 font-semibold hover:text-gray-700"
              >
                Contact
              </NavLink>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed inset-x-0 bottom-0 bg-white/70 backdrop-blur-md text-gray-900 py-2 flex justify-around items-center shadow-md">
        <NavLink
          to="/"
          className="text-red-500 font-semibold hover:text-gray-700"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="text-red-500 font-semibold hover:text-gray-700"
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className="text-red-500 font-semibold hover:text-gray-700"
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className="text-red-500 font-semibold hover:text-gray-700"
        >
          Contact
        </NavLink>
      </div>

      {/* Mobile View: Site Name at Top */}
      <div className="md:hidden fixed inset-x-0 top-0 bg-transparent text-center py-4">
        <motion.h1
          className="text-2xl font-bold text-red-500"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          SakibNJr
        </motion.h1>
      </div>
    </>
  );
};

export default Navbar;
