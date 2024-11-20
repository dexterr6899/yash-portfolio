"use client";

import React, { useState } from "react";

interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    company: "Interface Infosoft Solutions Private Limited, Pune",
    role: "Software Engineer",
    duration: "July 2021 - January 2024",
    description: [
      "Developed and maintained RESTful APIs using Java with Spring Boot.",
      "Integrated AWS S3 storage solutions to enhance application functionality.",
      "Crafted secure V3 APIs implementing OAuth 2 for authentication.",
      "Managed version control with Git repositories for QA and PRODUCTION branches.",
      "Deployed builds via Jenkins and handled post-release SQL queries for stability.",
      "Contributed to frontend development by creating HTML and CSS templates.",
    ],
  },
  {
    company: "Freelance Project (USA)",
    role: "Tile-Based Rendering Engine Developer",
    duration: "January 2024 - May 2024",
    description: [
      "Developed a dynamic tile-based rendering engine for interactive 2D world visualization using Java and StdDraw.",
      "Designed the TERenderer utility class for efficient 2D grid rendering with adjustable screen offsets.",
      "Implemented a Union-Find data structure for managing connectivity with path compression and union-by-size operations.",
      "Created modular tile abstractions (TETile) supporting dynamic world generation and rendering.",
      "Optimized performance for rendering large grids with dynamic size configurations, ensuring memory efficiency.",
    ],
  },
];

const WorkExperience: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section className="relative min-h-screen py-16 text-white w-full mx-0">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <video
          className="w-full h-full object-cover opacity-30"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/experienceVid2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 opacity-40"></div>
      </div>

      <div className="container relative z-10 px-6 lg:px-20">
        {/* Section Header */}
        <h1 className="text-5xl font-medium text-center tracking-wide text-teal-400 mb-3">
          Work Experience
        </h1>
        <div className="flex justify-center mb-16">
          <div className="h-1 w-32 bg-teal-400"></div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-gray-500"></div>

          {/* Experience Cards */}
          <div className="space-y-16">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`flex flex-col items-center lg:flex-row ${
                  index % 2 === 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content Card */}
                <div
                  className={`relative bg-gray-800 backdrop-blur-lg border border-gray-600 shadow-xl p-8 max-w-3xl lg:max-w-xl rounded-lg ${
                    index % 2 === 0 ? "lg:ml-16" : "lg:mr-16"
                  }`}
                  style={{
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.37)",
                  }}
                >
                  <h2 className="text-2xl font-semibold text-teal-400 mb-4">
                    {experience.role}
                  </h2>
                  <h3 className="text-lg text-gray-400 mb-2">
                    {experience.company}
                  </h3>
                  <p className="text-sm text-gray-500 mb-6">
                    {experience.duration}
                  </p>

                  {/* Truncated Content */}
                  <ul className="list-disc ml-6 text-gray-300 space-y-2">
                    {experience.description
                      .slice(0, expanded === index ? experience.description.length : 3)
                      .map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                  </ul>

                  {/* View More Button */}
                  {experience.description.length > 3 && (
                    <button
                      onClick={() => toggleExpand(index)}
                      className="mt-4 text-sm text-blue-400 hover:underline focus:outline-none"
                    >
                      {expanded === index ? "View Less" : "View More"}
                    </button>
                  )}
                </div>

                {/* Connector Dot */}
                <div className="w-6 h-6 bg-teal-400 rounded-full flex items-center justify-center z-10 relative">
                  <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
