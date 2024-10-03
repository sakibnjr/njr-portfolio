import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const SocialLinks = () => {
  const socials = [
    { href: "https://www.linkedin.com/in/yourprofile", icon: FaLinkedin },
    { href: "https://github.com/sakibnjr", icon: FaGithub },
    { href: "https://twitter.com/yourprofile", icon: FaTwitter },
  ];

  return (
    <div className="mt-12 flex justify-center space-x-6">
      {socials.map(({ href, icon: Icon }) => (
        <a href={href} target="_blank" rel="noopener noreferrer" key={href}>
          <Icon className="text-3xl text-red-500 hover:text-red-300 transition-colors duration-300" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
