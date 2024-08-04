import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const projects = [
  {
    name: "Pinterest Clone",
    description: "A web application mimicking Pinterest with user authentication, image pinning, and dynamic boards.",
    technologies: "Node.js, Express, MongoDB, Ejs, BootStrap, Authentication & Security",
    link: "https://github.com/BhushanJadhao/dataAssociation-Pintrest"
  },
  {
    name: "Live Location Tracker",
    description: "An app that tracks and displays live locations of users on a map, integrating real-time updates.",
    technologies: "Node.js, Express, Socket.io, LeafLeat, Ejs",
    link: "https://github.com/BhushanJadhao/TravelTracker"
  },
  {
    name: "To-Do List App",
    description: "A task management application that allows users to add, delete, and manage tasks with backend integration.",
    technologies: "Node.js, Express, MongoDB, Html, Css",
    link: "https://github.com/BhushanJadhao/to_do_list"
  },
  // Add more projects as needed
];

const Project = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="border-b border-neutral-900 pb-4"
    >
      <h1 className="my-20 text-center text-4xl text-white">
        My <span className="text-neutral-500">Projects</span>
      </h1>
      <div className="flex flex-col items-center space-y-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full max-w-lg p-6 border border-neutral-600 rounded-lg bg-neutral-900"
          >
            <h2 className="text-xl font-semibold text-white">{project.name}</h2>
            <p className="text-white mt-2 mb-4">{project.description}</p>
            <p className="text-neutral-400">Technologies: {project.technologies}</p>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-400 underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Project;
