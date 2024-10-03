import React, { useState } from "react";

import ContactForm from "../components/ContactForm";
import SocialLinks from "../components/SocialLinks";
import MapComponent from "../components/MapComponent";
import ProjectTypeSelector from "../components/ProjectTypeSelector";

// Contact Form Component

// Project Type Selector Component

const Contact = () => {
  const [projectType, setProjectType] = useState("Web Apps");

  return (
    <div className="relative min-h-screen bg-gray-100 py-16 md:py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-7/10 w-full lg:pr-4 mb-8 lg:mb-0">
            <div className="relative bg-opacity-80 bg-gray-800 p-8 rounded-lg shadow-lg">
              <ProjectTypeSelector onSelect={setProjectType} />
              <ContactForm projectType={projectType} />
              <SocialLinks />
            </div>
          </div>
          <div className="lg:w-3/10 w-full z-0">
            <MapComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
