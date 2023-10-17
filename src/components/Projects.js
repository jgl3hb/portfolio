// src/components/Projects.js
import React from 'react';

function Projects() {
  return (
    <div className="projects-page">
      <h1>Projects</h1>

      <div className="project">
        <h2>Blackjack Game</h2>
        <p>Description of Blackjack game, technologies used, challenges faced, etc.</p>
        <a href="https://github.com/yourusername/blackjack-game" target="_blank" rel="noopener noreferrer">View on GitHub</a>

      </div>

      <div className="project">
        <h2>Raspberry Pi Projects</h2>
        <p>Description of your Raspberry Pi projects</p>
        <a href="https://github.com/yourusername/raspberry-pi-projects" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>

      <div className="project">
        <h2>BookNerd Website</h2>
        <p>Description of BookNerd, technologies used, challenges faced, etc.</p>
        <a href="https://your-booknerd-website-link.com" target="_blank" rel="noopener noreferrer">Visit Website</a>
      </div>
    </div>
  );
}

export default Projects;
