import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faAward,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

// Reusable function for nav link classes
const navLinkClass = ({ isActive }) =>
  isActive
    ? "text-red-500 font-[Rosarivo] font-semibold"
    : "text-black hover:text-red-500 font-[Rosarivo]";

// Reusable animation configuration
const hoverAnimation = {
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.95 },
  transition: { duration: 0.3 },
};

// Reusable NavLink for Desktop and Mobile
const NavItem = ({ to, label, icon, isMobile }) => (
  <motion.div {...hoverAnimation} className="transition-all duration-300">
    <NavLink to={to} className={navLinkClass}>
      {isMobile ? (
        <div className="flex flex-col gap-1 items-center">
          <FontAwesomeIcon icon={icon} className="text-xl" />
          <span className="text-[10px] normal-case">{label}</span>
        </div>
      ) : (
        `</${label}>`
      )}
    </NavLink>
  </motion.div>
);

const Navbar = () => {
  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        className="hidden md:flex backdrop-blur-md bg-white/50 shadow-lg text-gray-900 z-50 sticky top-0"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container w-4/5 mx-auto flex justify-between items-center px-4 py-3">
          {/* Left Side Links */}
          <div className="flex gap-16">
            <NavItem to="/" label="Home" />
            <NavItem to="/about" label="Who am I" />
          </div>

          {/* Site Name */}
          <motion.h1
            className="text-3xl font-bold text-red-500 font-[Merienda] tracking-tight"
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

          {/* Right Side Links */}
          <div className="flex gap-16">
            <NavItem to="/certifications" label="Certifications" />
            <NavItem to="/contact" label="Contact" />
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navbar */}
      <div className="md:hidden fixed inset-x-0 bottom-0 bg-white/70 backdrop-blur-md text-gray-900 py-3 flex justify-around items-center shadow-md z-10">
        <NavItem to="/" label="Home" icon={faHome} isMobile />
        <NavItem to="/about" label="Who Am I" icon={faUser} isMobile />
        <NavItem
          to="/certifications"
          label="Certifications"
          icon={faAward}
          isMobile
        />
        <NavItem to="/contact" label="Contact" icon={faEnvelope} isMobile />
      </div>

      {/* Mobile View: Site Name */}
      <div className="md:hidden fixed inset-x-0 top-0 bg-transparent backdrop-blur-md text-center py-2 z-10">
        <motion.h1
          className="text-2xl font-bold text-red-500"
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
