import React from "react";
import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  ServerIcon,
  BookOpenIcon,
  RectangleGroupIcon,
} from "@heroicons/react/24/outline";

// Skill categories with colors, icons, and names
const skillCategories = {
  frontend: {
    name: "Frontend",
    color: "from-blue-500 to-blue-300",
    icon: <CodeBracketIcon className="h-6 w-6" />,
  },
  backend: {
    name: "Backend",
    color: "from-green-500 to-green-300",
    icon: <ServerIcon className="h-6 w-6" />,
  },
  database: {
    name: "Database",
    color: "from-yellow-500 to-yellow-300",
    icon: <ServerIcon className="h-6 w-6" />,
  },
  languages: {
    name: "Languages",
    color: "from-purple-500 to-purple-300",
    icon: <BookOpenIcon className="h-6 w-6" />,
  },
  UIUX: {
    name: "UI/UX",
    color: "from-pink-500 to-pink-300",
    icon: <RectangleGroupIcon className="h-6 w-6" />,
  },
};

// Skill data with categories
const skillData = [
  { name: "HTML5", percentage: 85, category: "frontend" },
  { name: "CSS3", percentage: 80, category: "frontend" },
  { name: "JavaScript (ES6)", percentage: 90, category: "frontend" },
  { name: "React", percentage: 85, category: "frontend" },
  { name: "Node.js", percentage: 80, category: "backend" },
  { name: "Express", percentage: 70, category: "backend" },
  { name: "MongoDB", percentage: 75, category: "database" },
  { name: "Tailwind CSS", percentage: 75, category: "frontend" },
  { name: "Bootstrap", percentage: 80, category: "frontend" },
  { name: "PHP", percentage: 75, category: "backend" },
  { name: "MySQL", percentage: 70, category: "database" },
  { name: "Adobe XD", percentage: 75, category: "UIUX" },
  { name: "Python", percentage: 80, category: "languages" },
  { name: "Java", percentage: 75, category: "languages" },
  { name: "C", percentage: 70, category: "languages" },
  { name: "Figma", percentage: 75, category: "UIUX" },
];

// Memoized Skill Card Component
const SkillCard = React.memo(({ name, percentage, category }) => {
  const glowColor = skillCategories[category].color;

  // Hover animation variants
  const cardVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
      y: -5,
      transition: { duration: 0.3, type: "spring", stiffness: 300 },
    },
    rest: {
      scale: 1,
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      y: 0,
      transition: { duration: 0.3, type: "spring", stiffness: 300 },
    },
  };

  return (
    <motion.div
      className="relative w-full sm:w-64 p-6 rounded-lg shadow-lg bg-white transition-transform duration-300 z-0"
      variants={cardVariants}
      initial="rest"
      whileHover="hover"
    >
      {/* Gradient Background */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${glowColor} opacity-30 rounded-lg`}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
        <div className="w-full bg-gray-200 rounded-full h-3 mb-2 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </div>
        <span className="text-sm text-gray-600">{percentage}%</span>
      </div>
    </motion.div>
  );
});

// Skills Component
const Skills = () => {
  const categories = Object.keys(skillCategories);

  return (
    <div
      className="bg-gray-100 p-4 px-4 sm:px-6 lg:px-8 mt-12 md:mt-2 z-0" // Added margin-top to prevent overlap
      id="skills"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-8">
          My Skillset
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          A glimpse into the tools and technologies I'm proficient in.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category} className="flex flex-col items-center">
              {/* Category Icon and Name */}
              <div className="flex items-center mb-4 text-primary-500">
                {skillCategories[category].icon}
                <span className="ml-2 text-xl font-semibold">
                  {skillCategories[category].name}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {skillData
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <SkillCard
                      key={skill.name}
                      name={skill.name}
                      percentage={skill.percentage}
                      category={category}
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
