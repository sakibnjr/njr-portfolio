import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Dummy icons for links

// Project Card Component
const ProjectCard = ({
  image,
  title,
  techStack,
  description,
  link,
  github,
}) => (
  <motion.div
    className="relative bg-gray-50 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
      <div className="text-center text-white p-4">
        <h4 className="text-xl font-semibold">{title}</h4>
        <p className="mt-2">{description}</p>
        <p className="mt-2 font-mono text-sm text-gray-300">{techStack}</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-300"
          >
            <FaExternalLinkAlt className="text-2xl" />
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-300"
          >
            <FaGithub className="text-2xl" />
          </a>
        </div>
      </div>
    </div>
  </motion.div>
);

// Filter Tabs Component
const FilterTabs = ({ categories, activeCategory, onSelectCategory }) => (
  <div className="flex space-x-4 mb-6">
    {categories.map((category) => (
      <button
        key={category}
        className={`py-2 px-4 rounded-lg text-white ${
          activeCategory === category ? "bg-red-500" : "bg-gray-300"
        } hover:bg-red-400 transition-colors duration-300`}
        onClick={() => onSelectCategory(category)}
      >
        {category}
      </button>
    ))}
  </div>
);

// Projects Component
const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      category: "Web Development",
      image: "https://via.placeholder.com/400x300",
      title: "Project One",
      techStack: "React, Node.js, Express",
      description: "An innovative web app using React and Node.js.",
      link: "#",
      github: "#",
    },
    {
      category: "Mobile Apps",
      image: "https://via.placeholder.com/400x300",
      title: "Project Two",
      techStack: "React Native, Firebase",
      description: "A mobile application built with React Native.",
      link: "#",
      github: "#",
    },
    // Add more projects here
  ];

  const categories = ["All", "Web Development", "Mobile Apps"];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-red-500 text-center mb-8">
          Showtime
        </h2>

        <FilterTabs
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              techStack={project.techStack}
              description={project.description}
              link={project.link}
              github={project.github}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block py-2 px-6 bg-red-500 text-white font-semibold rounded-lg shadow-lg hover:bg-red-400 transition-colors duration-300"
          >
            View More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
