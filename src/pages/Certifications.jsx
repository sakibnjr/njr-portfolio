import React from "react";
import { motion } from "framer-motion";

// Dummy certification data
const certifications = [
  {
    name: "Full Stack Web Developer",
    issuer: "Udemy",
    date: "June 2024",
    link: "https://www.udemy.com/course/full-stack-web-developer/",
  },
  {
    name: "React JS Basics",
    issuer: "Coursera",
    date: "March 2024",
    link: "https://www.coursera.org/learn/react-basics",
  },
  {
    name: "Data Analysis with Python",
    issuer: "edX",
    date: "February 2024",
    link: "https://www.edx.org/course/data-analysis-with-python",
  },
  {
    name: "Machine Learning",
    issuer: "Udacity",
    date: "January 2024",
    link: "https://www.udacity.com/course/machine-learning--ud262",
  },
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon",
    date: "December 2023",
    link: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
  },
  {
    name: "Google Cloud Professional",
    issuer: "Google",
    date: "November 2023",
    link: "https://cloud.google.com/certification/professional-cloud-architect",
  },
];

// Certification Card Component
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

const Certifications = () => {
  return (
    <div className="relative min-h-screen bg-gray-100 py-16 md:py-6 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center text-red-500 mb-10">
        Certifications
      </h2>
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {/* Central Border Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px bg-gray-400 h-full z-0"></div>
          <div className="space-y-10">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                className={`relative flex ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                } items-center ${index % 2 === 0 ? "pl-10" : "pr-10"} mb-16`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} // Start from left or right
                whileInView={{ opacity: 1, x: 0 }} // Animate to center
                viewport={{ once: true }} // Only animate once when in view
                transition={{ duration: 0.5 }} // Animation duration
              >
                <div className="relative w-full max-w-md">
                  <CertificationCard
                    name={cert.name}
                    issuer={cert.issuer}
                    date={cert.date}
                    link={cert.link}
                  />
                </div>
                {/* Circle indicator on the line */}
                <div className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-red-500 rounded-full z-10"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
