import React from "react";
import { motion } from "framer-motion";

const CertificationCard = ({ name, issuer, date, link }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block bg-white p-6 rounded-lg shadow-lg border-2 border-transparent hover:border-red-500 transition-all duration-300 ease-in-out"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-700 mb-1">
        <strong>Issuer:</strong> {issuer}
      </p>
      <p className="text-gray-600">
        <strong>Date:</strong> {date}
      </p>
      <div className="absolute inset-0 border-2 border-red-500 opacity-0 hover:opacity-100 rounded-lg transition-all duration-500 ease-in-out"></div>
    </motion.a>
  );
};

export default CertificationCard;
