import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Skill categories with colors
const skillCategories = {
  frontend: "from-blue-500 to-blue-300",
  backend: "from-green-500 to-green-300",
  database: "from-yellow-500 to-yellow-300",
  languages: "from-purple-500 to-purple-300",
  uiux: "from-pink-500 to-pink-300",
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
  { name: "Adobe XD", percentage: 75, category: "uiux" },
  { name: "Python", percentage: 80, category: "languages" },
  { name: "Java", percentage: 75, category: "languages" },
  { name: "C", percentage: 70, category: "languages" },
  { name: "Figma", percentage: 75, category: "uiux" },
];

// Skill Card Component
const SkillCard = ({ name, percentage, category }) => {
  const [animatePercentage, setAnimatePercentage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatePercentage(percentage);
    }, 100); // Small delay for animation

    return () => clearTimeout(timer);
  }, [percentage]);

  const glowColor = skillCategories[category];

  return (
    <div
      className={`relative w-64 p-4 rounded-lg shadow-lg overflow-hidden bg-white`}
    >
      {/* Gradient Background */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${glowColor} opacity-50`}
      ></div>
      <h3 className="relative z-10 text-xl font-semibold mb-2">{name}</h3>
      <div className="relative pt-1">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-medium text-gray-600">
            {animatePercentage}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full">
          <motion.div
            className="h-2 bg-red-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${animatePercentage}%` }}
            transition={{ duration: 1 }} // Animation duration
          />
        </div>
      </div>
    </div>
  );
};

// Skills Component
const Skills = () => {
  const categories = Object.keys(skillCategories);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-red-500 mb-10">
          Skills
        </h2>
        {categories.map((category) => (
          <div key={category} className="mb-12">
            <h3 className="text-3xl font-semibold text-gray-800 mb-6 capitalize">
              {category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
  );
};

export default Skills;
