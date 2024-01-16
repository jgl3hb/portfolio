import React from 'react';

function Projects() {
  return (
    <div className="flex flex-row justify-center items-center flex-wrap min-h-screen space-x-4">
      
      <div className="project text-center">
        <img
          src="/oracle.jpg"
          alt="Oracle-GPT Thumbnail"
          className="w-64 h-64 object-cover mx-auto mt-4"
        />
        <h2 className="text-xl font-semibold">Oracle-GPT</h2>
        <p className="text-gray-700">A GPT-3.5 Wrapper</p>
        <div>
          <a
            href="https://github.com/jgl3hb/chatbot"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
          >
            See the code
          </a>
        </div>
        <div>
          <a
            href="https://chatbot-psi-pink.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
          >
            Ask the Oracle
          </a>
        </div>
      </div>

      <div className="project text-center">
        <img
          src="/blackjack.png"
          alt="Blackjack Game Thumbnail"
          className="w-64 h-64 object-cover mx-auto mt-4"
        />
        <h2 className="text-xl font-semibold">Blackjack Game</h2>
        <p className="text-gray-700">Javascript, React, Tailwind CSS</p>
        <div>
          <a
            href="https://github.com/jgl3hb/react-jack"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
          >
            See the code
          </a>
        </div>
        <div>
          <a
            href="https://655441424d4d01509ac9e02b--lambent-bonbon-76f0c6.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
          >
            Play the game
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
