"use client"

import Image from 'next/image';
import { useState } from 'react';

interface Skill {
  name: string;
  description: string;
  examples: string[]; // Array of image URLs or paths
}

export default function Skills() {
  const skills: Skill[] = [
    { name: 'JavaScript / TypeScript', description: 'Used extensively in frontend and backend development. I prefer TS over JS, for obvious reasons.', examples: [] },
    { name: 'React', description: 'Most of my projects are done with React.', examples: [] },
    { name: 'Delphi', description: 'Got familiar with Delphi while working at Polycon, so used professionally for three years.', examples: [] },
    { name: 'Python', description: `We use a Flask backend for our startup. I've also built a few telegram bots and miscellaneous programs along the years.`, examples: [] },
    { name: 'Spring Boot', description: `Used for the backed on my Master's thesis project.`, examples: []},
    { name: 'Node.js', description: `Used here and there, majorly during the course Full Stack Open.`, examples: []},
    { name: 'Docker', description: 'Containerized applications for development and deployment.', examples: [] },
    { name: 'Next.js', description: 'Starting to use NextJS over React due to extra features. Still learning.', examples: [] },
    { name: 'CSS', description: 'Used mostly pure CSS while working at Polycon. I consider myself experienced with CSS, but still use Google when centering an element and flexbox fails me.', examples: [] },
    { name: 'Tailwind CSS', description: 'Started using Tailwind as it comes recommended with NextJS projects. It is very quick and easy but I often use Google/Chatgpt to figure out the keywords.', examples: [] },
    { name: 'Git', description: 'Version control and collaboration in various projects.', examples: [] },
  ];

  const [modalContent, setModalContent] = useState<Skill | null>(null);

  const openModal = (skill: Skill) => {
    setModalContent(skill);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <section id="skills" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">Skills</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white px-4 py-2 border-gray-300 border rounded-md shadow-md text-center text-gray-800 cursor-pointer hover:bg-gray-200"
              onClick={() => openModal(skill)}
            >
              {skill.name}
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalContent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75"
          onClick={closeModal} // Close modal on overlay click
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()} // Prevent click propagation from modal
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={closeModal}
            >
              &times;
            </button>
            <h3 className="text-xl font-bold text-gray-900">{modalContent.name}</h3>
            <p className="mt-4 text-gray-600">{modalContent.description}</p>
            {modalContent.examples.length > 0 && (
              <div className="mt-4">
                {modalContent.examples.map((example, index) => (
                  <Image
                    key={index}
                    src={example}
                    alt={`${modalContent.name} example ${index + 1}`}
                    className="w-full rounded-md mt-2"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
