import React from 'react';
import { FaGithub, FaAngular, FaReact, FaAws, FaJava, FaPython, FaLock, FaKey } from 'react-icons/fa';
import { SiDotnet, SiElasticsearch, SiMaterialdesign, SiNetlify, SiTailwindcss } from 'react-icons/si';

const techIcons = {
  angular: { icon: <FaAngular className="text-red-600" />, label: 'Angular' },
  react: { icon: <FaReact className="text-blue-500" />, label: 'React' },
  aws: { icon: <FaAws className="text-yellow-500" />, label: 'AWS' },
  dotnet: { icon: <SiDotnet className="text-purple-700" />, label: '.NET Core' },
  elastic: { icon: <SiElasticsearch className="text-orange-500" />, label: 'Elasticsearch' },
  material: { icon: <SiMaterialdesign className="text-pink-500" />, label: 'Material Design' },
  netlify: { icon: <SiNetlify className="text-green-500" />, label: 'Netlify' },
  jwt: { icon: <FaLock className="text-yellow-700" />, label: 'JWT' },
  oauth: { icon: <FaKey className="text-blue-700" />, label: 'OAuth 2.0' },
  java: { icon: <FaJava className="text-red-700" />, label: 'Java' },
  python: { icon: <FaPython className="text-green-700" />, label: 'Python' },
  tailwind: { icon: <SiTailwindcss className="text-teal-400" />, label: 'Tailwind CSS' },

};

const projects = [
  {
    name: 'Portfolio',
    description:
      'Constructed with React, Tailwind CSS, and a mobile-first approach. Configured Cloudflare and deployed with Git Actions to Netlify.',
    tech: ['react', 'tailwind', 'material', 'netlify'],
  },
  {
    name: 'Blogify',
    description:
      'Built a .NET Core Web API with Elasticsearch to index/search blog posts. Used React for the frontend.',
    tech: ['dotnet', 'elastic', 'react'],
  },
  {
    name: 'SafeStore',

    description:
      'Secure file upload API using AWS EC2, S3 for storage, SMTP for validation, and IAM access control.',
    tech: ['aws', 'python'],
  },
  {
    name: 'SecureCom',

    description:
      'Implemented JWT and OAuth 2.0 for app security. Integrated Google reCAPTCHA for bot protection.',
    tech: ['jwt', 'oauth', 'java'],
  },
];

const Projects = () => {
  return (
    <section className="py-16 px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start">

        <div className="lg:w-1/3 mb-12 lg:mb-0">
          <h1 className="text-5xl font-bold mb-6">My Projects</h1>
        </div>

        <div className="lg:w-2/3 space-y-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >

              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-semibold">{project.name}</h2>
                {project.link && (
                  <a
                    href={project.link}
                    className="text-indigo-600 hover:underline flex items-center gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="inline" /> View Project
                  </a>
                )}
              </div>

              <p className="mb-3">{project.description}</p>

              <div className="flex flex-wrap gap-4 text-lg">
                {project.tech.map((tech, i) => (
                  <div key={i} className="flex items-center gap-2 px-3 py-1 rounded-full shadow-sm bg-gray-100">
                    {techIcons[tech].icon}
                    <span className="text-sm">{techIcons[tech].label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
