import React from 'react';

function Projects() {
  // Use flex and flex-col to create a column flex container
  // Use justify-center and items-center to center the content vertically and horizontally
  // Use min-h-screen to ensure the container takes at least the full height of the viewport
  return (
    <div className="flex flex-col justify-center items-center min-h-screen space-y-4">
      <h1 className="text-2xl font-bold">Projects</h1>

      <div className="project space-y-2 text-center">
        <h2 className="text-xl font-semibold">Blackjack Game</h2>
        <p className="text-gray-700">Javascript, React, Tailwind CSS</p>
        <a
          href="https://github.com/jgl3hb/react-jack"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
        >
          See the code
        </a>
        <a
          href="https://655441424d4d01509ac9e02b--lambent-bonbon-76f0c6.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
        >
          Play the game
        </a>
      </div>

      <div className="project space-y-2 text-center">
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
