import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faAward,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"; // FontAwesome icons

const Navbar = () => {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-red-500 uppercase tracking-tight font-semibold"
      : "text-black uppercase tracking-tight hover:text-red-500 ";

  return (
    <>
      {/* Navbar for Desktop View */}
      <motion.nav
        className="hidden md:flex backdrop-blur-md bg-white/50 shadow-lg text-gray-900 z-50 sticky top-0"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container w-4/5 mx-auto flex justify-between items-center px-4 py-3">
          {/* Left Side Buttons */}
          <div className="flex space-x-6">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="transition-all duration-300"
            >
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="transition-all duration-300"
            >
              <NavLink to="/about" className={navLinkClass}>
                Who am I?
              </NavLink>
            </motion.div>
          </div>

          {/* Site Name in Center with Fancy Font */}
          <motion.h1
            className="text-3xl font-bold text-red-500 font-[Merienda] tracking-tight" // Fancy font
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <NavLink to="/">
              sakib
              <span className="italic text-4xl relative top-1 right-1">N</span>
              jr
            </NavLink>
          </motion.h1>

          {/* Right Side Buttons */}
          <div className="flex space-x-6">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="transition-all duration-300"
            >
              <NavLink to="/certifications" className={navLinkClass}>
                Certifications
              </NavLink>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="transition-all duration-300"
            >
              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed inset-x-0 bottom-0 bg-white/70 backdrop-blur-md text-gray-900 py-2 flex justify-around items-center shadow-md z-10">
        <NavLink to="/" className={navLinkClass}>
          <FontAwesomeIcon icon={faHome} className="text-xl" />{" "}
          {/* Added Icon */}
        </NavLink>
        <NavLink to="/about" className={navLinkClass}>
          <FontAwesomeIcon icon={faUser} className="text-xl" />{" "}
          {/* Added Icon */}
        </NavLink>
        <NavLink to="/certifications" className={navLinkClass}>
          <FontAwesomeIcon icon={faAward} className="text-xl" />{" "}
          {/* Added Icon */}
        </NavLink>
        <NavLink to="/contact" className={navLinkClass}>
          <FontAwesomeIcon icon={faEnvelope} className="text-xl" />{" "}
          {/* Added Icon */}
        </NavLink>
      </div>

      {/* Mobile View: Site Name at Top with Fancy Font */}
      <div className="md:hidden fixed inset-x-0 top-0 bg-white/70 backdrop-blur-md text-center py-2 z-10">
        <motion.h1
          className="text-2xl font-bold text-red-500 font-[cursive]" // Fancy font for mobile too
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <NavLink to="/" className="font-[Merienda] tracking-tight">
            sakib
            <span className="italic text-4xl relative top-1 right-1">N</span>jr
          </NavLink>
        </motion.h1>
      </div>
    </>
  );
};

export default Navbar;
