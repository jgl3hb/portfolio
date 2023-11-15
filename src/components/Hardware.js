import React from "react";

function Hardware() {
  // Wrap the content with a flex container and center it using justify-center and items-center
  // The min-h-screen class ensures that the container takes at least the full height of the screen
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="text-center"> {/* Center text alignment for all child elements */}
        <h2 className="text-xl font-semibold">Yankee Sunrises</h2>
        <p className="text-gray-700">A nod to Sunrise Earth, Planet Earth's unheralded little sibling. This project documents sunrises primarily shot around Southern Maine. </p>
        <p>The general setup can be attributed to user called fotosyn.</p>
        <p>While staying with family in Missouri during the pandemic, I realized how deeply I missed the sunrises around Portland, Maine, my adopted home. 
          I began the journey of coding with basic Python scripts with a Raspberry Pi for hobby projects so I could yada yada yada</p>
        <p>https://www.instructables.com/Simple-timelapse-camera-using-Raspberry-Pi-and-a-c/</p>
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
