import React from 'react';

function Projects() {
  return (
    <div className="flex flex-col items-center min-h-screen space-y-8">
      
      {/* RootLedger - Featured Project on Top */}
      <div className="project text-center">
        <img
          src="/cryptotree.jpg"
          alt="RootLedger Website Thumbnail"
          className="w-80 h-80 object-cover mx-auto mt-6"
        />
        <h2 className="text-2xl font-bold mt-4">RootLedger</h2>
        <p className="text-gray-700 text-lg">Modern Estate Planning Platform</p>
        <div className="mt-2">
          <a
            href="https://therootledger.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 visited:text-purple-600 text-lg font-semibold"
          >
            Visit RootLedger
          </a>
        </div>
      </div>
      
      {/* Bottom row: Oracle-GPT and Blackjack Game side by side */}
      <div className="flex flex-row justify-center items-start space-x-8">
        {/* Oracle-GPT */}
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
        
        {/* Blackjack Game */}
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
              href="https://lambent-bonbon-76f0c6.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
            >
              Play the game
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
