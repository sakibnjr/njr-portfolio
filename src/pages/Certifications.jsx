import React from "react";
import { motion } from "framer-motion";
import CertificationCard from "../components/CertificationCard";

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

// Shared motion properties to avoid duplication
const motionProps = (index) => ({
  initial: { opacity: 0, x: index % 2 === 0 ? -50 : 50 }, // Start from left or right
  whileInView: { opacity: 1, x: 0 }, // Animate to center
  viewport: { once: true }, // Animate only once when in view
  transition: { duration: 0.5 }, // Animation duration
});

const Certifications = () => {
  return (
    <div className="relative min-h-screen bg-gray-100 py-16 md:py-6 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center text-dark mb-10">
        Certifications
      </h2>
      <div className="max-w-7xl mx-auto relative">
        {/* Central Border Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-px bg-gray-400 h-full z-0"></div>
        <div className="space-y-10">
          {certifications.map(({ name, issuer, date, link }, index) => (
            <motion.div
              key={name}
              className={`relative flex ${
                index % 2 === 0 ? "justify-start pl-10" : "justify-end pr-10"
              } items-center mb-16`}
              {...motionProps(index)}
            >
              <div className="relative w-full max-w-md">
                <CertificationCard
                  name={name}
                  issuer={issuer}
                  date={date}
                  link={link}
                />
              </div>
              {/* Circle indicator on the line */}
              <div className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-red-500 rounded-full z-10"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
