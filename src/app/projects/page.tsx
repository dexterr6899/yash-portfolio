"use client";

import React, { useState } from "react";
import Image from "next/image";
import projectsData from "../data/projectsData";

const ProjectsPage: React.FC = () => {
  const [activeKey, setActiveKey] = useState<number | null>(null);

  return (
    <section className="min-h-screen bg-black py-16 text-white">
      <div className="container mx-auto px-6 text-center">
        {/* Header */}
        <h1 className="text-5xl font-bold uppercase tracking-wide mb-16">My Projects</h1>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className={`relative bg-gray-900 rounded-lg shadow-lg overflow-hidden group transform transition duration-300 ${
                activeKey === index ? "scale-105" : "hover:scale-105"
              }`}
              onMouseEnter={() => setActiveKey(index)} // Set activeKey on hover
              onMouseLeave={() => setActiveKey(null)} // Clear activeKey on hover out
            >
              {/* Project Image */}
              <div className="relative w-full h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className={`transition-transform duration-300 transform ${
                    activeKey === index ? "scale-110" : "group-hover:scale-110"
                  }`}
                />
              </div>

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-black bg-opacity-70 transition-opacity duration-300 flex flex-col justify-center items-center ${
                  activeKey === index ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              >
                <h2 className="text-xl font-bold text-white mb-2">{project.title}</h2>
                <p className="text-gray-300 mb-4 px-6 text-center">{project.description}</p>
                <div className="flex space-x-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                  >
                    View Project
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h2
                  className={`text-2xl font-bold mb-2 transition ${
                    activeKey === index ? "text-gray-300" : "group-hover:text-gray-300"
                  }`}
                >
                  {project.title}
                </h2>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm font-medium transition ${
                        activeKey === index ? "bg-gray-700" : ""
                      }`}
                    >
                      {tech}
                    </span>
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

export default ProjectsPage;