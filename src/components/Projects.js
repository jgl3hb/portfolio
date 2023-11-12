// src/components/Projects.js
import React from 'react';

function Projects() {
  return (
    <div className="projects-page space-y-4">
      <h1 className="text-2xl font-bold">Projects</h1>

      <div className="project space-y-2">
        <h2 className="text-xl font-semibold">Blackjack Game</h2>
        <p className="text-gray-700">Javascript, React, Tailwind CSS</p>
        <a
          href="https://github.com/jgl3hb/blackjack"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
        >
          View on GitHub
        </a>
      </div>

      <div className="project space-y-2">
        <h2 className="text-xl font-semibold">Raspberry Pi Projects</h2>
        <p className="text-gray-700">Description of your Raspberry Pi projects</p>
        <a
          href="https://github.com/jgl3hb/raspberry-pi-projects"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
        >
          View on GitHub
        </a>
      </div>

      <div className="project space-y-2">
        <h2 className="text-xl font-semibold">BookNerd Website</h2>
        <p className="text-gray-700">Javascript</p>
        <a
          href="https://github.com/jgl3hb/booknerd.git"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
        >
          Visit Website
        </a>
      </div>
    </div>
  );
}

export default Projects;
