import React from 'react';
import { projects } from '../data/projects';
import {
  FaGithub,
  FaAngular,
  FaReact,
  FaAws,
  FaJava,
  FaPython,
  FaLock,
  FaKey,
} from "react-icons/fa";
import {
  SiDotnet,
  SiElasticsearch,
  SiMaterialdesign,
  SiNetlify,
  SiTailwindcss,
} from "react-icons/si";

const techIcons = {
  angular: { icon: <FaAngular className="text-red-600" />, label: "Angular" },
  react: { icon: <FaReact className="text-blue-500" />, label: "React" },
  aws: { icon: <FaAws className="text-yellow-500" />, label: "AWS" },
  dotnet: { icon: <SiDotnet className="text-purple-700" />, label: ".NET Core" },
  elastic: { icon: <SiElasticsearch className="text-orange-500" />, label: "Elasticsearch" },
  material: { icon: <SiMaterialdesign className="text-pink-500" />, label: "Material Design" },
  netlify: { icon: <SiNetlify className="text-green-500" />, label: "Netlify" },
  jwt: { icon: <FaLock className="text-yellow-700" />, label: "JWT" },
  oauth: { icon: <FaKey className="text-blue-700" />, label: "OAuth 2.0" },
  java: { icon: <FaJava className="text-red-700" />, label: "Java" },
  python: { icon: <FaPython className="text-green-700" />, label: "Python" },
  tailwind: { icon: <SiTailwindcss className="text-teal-400" />, label: "Tailwind CSS" },
};

const Projects = () => {
  return (
    <section className="py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-16 text-center lg:text-left">My Projects</h1>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-start gap-8">

              {project.image && (
                <div className="lg:w-1/2 w-full rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition hover:scale-105 duration-300"
                  />
                </div>
              )}

              <div className="flex-1 p-6 rounded-2xl shadow-md hover:shadow-xl transition space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h2 className="text-2xl font-semibold">{project.name}</h2>
                  {project.link && (
                    <a
                      href={project.link}
                      className="hover:underline flex items-center gap-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="inline" /> View Project
                    </a>
                  )}
                </div>

                <p>{project.description}</p>

                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-3 py-1 rounded-full shadow-sm"
                    >
                      {techIcons[tech]?.icon}
                      <span className="text-sm">{techIcons[tech]?.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;