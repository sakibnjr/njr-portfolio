import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNode, FaCss3Alt, FaJs, FaGithub } from "react-icons/fa"; // Dummy tech icons

// Timeline Milestone Component
const Milestone = ({ year, title, description, alignment }) => (
  <motion.div
    className={`relative p-4 border-l-4 border-red-500 bg-gray-50 rounded-md shadow-md mb-6 ${alignment}`}
    initial={{ opacity: 0, x: alignment === "left" ? -100 : 100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <div className="absolute -left-5 top-1/2 transform -translate-y-1/2">
      <div className="w-3 h-3 bg-red-500 rounded-full" />
    </div>
    <h3 className="text-xl font-semibold text-red-500">{year}</h3>
    <h4 className="text-lg font-bold">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

// Technology Highlight Component
const Technology = ({ icon, name }) => (
  <motion.div
    className="flex items-center space-x-3 p-4 border border-gray-300 rounded-lg shadow-md hover:bg-red-50 transition-all duration-300 ease-in-out hover:shadow-xl"
    whileHover={{ scale: 1.05 }}
  >
    <div className="text-3xl text-red-500">{icon}</div>
    <p className="text-lg font-semibold">{name}</p>
  </motion.div>
);

// AboutMe Component
const AboutMe = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Professional Photo */}
          <motion.div
            className="w-64 h-64 mb-6 lg:mb-0 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img
              src="https://via.placeholder.com/300"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Personal Information */}
          <div className="lg:ml-12 text-center lg:text-left">
            <motion.h2
              className="text-3xl font-bold text-red-500"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Sakib Who?
            </motion.h2>
            <motion.p
              className="mt-4 text-lg text-gray-700"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Hi, I’m Sakib Nahid, a passionate Full Stack Developer with a
              knack for building powerful digital experiences. When I’m not
              coding, you might find me exploring new tech trends, gaming, or
              experimenting with creative design ideas.
            </motion.p>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-red-500 text-center">
            Career Milestones
          </h3>
          <div className="mt-6">
            <div className="flex flex-col items-center">
              <Milestone
                year="2023"
                title="Started Freelancing"
                description="Began offering freelance web development services to various clients, focusing on custom React applications."
                alignment="left"
              />
              <Milestone
                year="2022"
                title="Graduated University"
                description="Completed a degree in Computer Science, specializing in Full Stack Web Development."
                alignment="right"
              />
              <Milestone
                year="2021"
                title="Internship at Tech Company"
                description="Worked as a web development intern, gaining hands-on experience in a professional setting."
                alignment="left"
              />
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-red-500 text-center">
            Technologies I Master
          </h3>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Technology icon={<FaReact />} name="React" />
            <Technology icon={<FaNode />} name="Node.js" />
            <Technology icon={<FaJs />} name="JavaScript" />
            <Technology icon={<FaCss3Alt />} name="CSS3" />
            <Technology icon={<FaGithub />} name="GitHub" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
