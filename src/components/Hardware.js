import React from "react";

function Hardware() {
  // Wrap the content with a flex container and center it using justify-center and items-center
  // The min-h-screen class ensures that the container takes at least the full height of the screen
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="text-center"> {/* Center text alignment for all child elements */}
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
    </div>
  );
}

export default Hardware;
