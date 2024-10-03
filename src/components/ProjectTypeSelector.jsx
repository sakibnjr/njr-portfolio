import React from "react";
import { motion } from "framer-motion";

const ProjectTypeSelector = ({ onSelect }) => {
  const projectTypes = ["Web Apps", "IoT Systems", "Bots", "Other"];
  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-3xl font-bold text-red-500">
        Have something in mind?
      </h2>
      <p className="bg-white rounded-md px-2">Let's Work Together</p>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
        {projectTypes.map((type) => (
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

export default ProjectTypeSelector;
