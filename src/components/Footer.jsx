import React from 'react';
import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center">

        <p className="text-sm text-center lg:text-left mb-4 lg:mb-0">
          Designed and Developed by <strong>Amit Vajrashetti</strong> Using <strong>React + Tailwind css 👋
          </strong>
        </p>

        <div className="flex gap-6 text-xl">
          <a
            href="/src/assets/Amit_Vajrashetti_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-indigo-500"
          >
            <FaFileAlt />
            <span className="hidden md:inline">View My Resume</span>
          </a>
          <a
            href="https://github.com/alderbee/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-indigo-500"
          >
            <FaGithub />
            <span className="hidden md:inline">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/vsamit/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-indigo-500"
          >
            <FaLinkedin />
            <span className="hidden md:inline">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
