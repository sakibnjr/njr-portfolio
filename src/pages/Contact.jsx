import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Contact Form Component
const ContactForm = ({ projectType }) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Form submitted");
  };

  return (
    <motion.form
      className="relative bg-white p-6 rounded-lg shadow-lg"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h3 className="text-2xl font-bold text-red-500 mb-4">{`Build a ${projectType}`}</h3>
      <label className="block mb-4">
        <span className="text-gray-700">Name</span>
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Your Name"
          required
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Email</span>
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Your Email"
          required
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Message</span>
        <textarea
          name="message"
          value={formState.message}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Your Message"
          rows="4"
          required
        />
      </label>
      <button
        type="submit"
        className="w-full py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-400 transition-colors duration-300"
      >
        Send Message
      </button>
    </motion.form>
  );
};

// Project Type Selector Component
const ProjectTypeSelector = ({ onSelect }) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-3xl font-bold text-red-500">
        Have something in mind?
      </h2>
      <p className="bg-white rounded-md px-2">Let's Work Together</p>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
        {["Web Apps", "IoT Systems", "Bots", "Other"].map((type) => (
          <motion.button
            key={type}
            className="py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-lg hover:bg-red-400 transition-colors duration-300 mb-4"
            onClick={() => onSelect(type)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {type}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

// Map Component Using react-leaflet
const MapComponent = () => {
  const position = [23.8103, 90.4125]; // Dhaka, Bangladesh

  return (
    <div className="relative w-full h-full">
      <MapContainer
        center={position}
        zoom={12}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>Dhaka, Bangladesh</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

// Contact Component
const Contact = () => {
  const [projectType, setProjectType] = useState("Web Apps");

  return (
    <div className="relative bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-7/10 w-full lg:pr-4 mb-8 lg:mb-0">
            <div className="relative bg-opacity-80 bg-gray-800 p-8 rounded-lg shadow-lg">
              <ProjectTypeSelector onSelect={setProjectType} />
              <ContactForm projectType={projectType} />
              <div className="mt-12 flex justify-center space-x-6">
                <a
                  href="https://www.linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-3xl text-red-500 hover:text-red-300 transition-colors duration-300" />
                </a>
                <a
                  href="https://github.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-3xl text-red-500 hover:text-red-300 transition-colors duration-300" />
                </a>
                <a
                  href="https://twitter.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="text-3xl text-red-500 hover:text-red-300 transition-colors duration-300" />
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-3/10 w-full">
            <MapComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
