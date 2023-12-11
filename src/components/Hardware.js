import React from "react";

function Hardware() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="text-center"> 
        <h2 className="text-xl font-semibold">Yankee Sunrises</h2>
        <p>A nod to Sunrise Earth, Planet Earth's unheralded little sibling. This project documents sunrises primarily shot around Southern Maine. The general setup can be attributed to a user called fotosyn.</p>
        <p>While staying with family in Missouri during the pandemic, I realized how deeply I missed the sunrises around Portland, Maine, my adopted home. 
          I began the journey of coding with basic Python scripts with a Raspberry Pi.</p>
        <div>
          <a
            href="https://www.instructables.com/Simple-timelapse-camera-using-Raspberry-Pi-and-a-c/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
          >
            Inspiration
          </a>
        </div>
        <div>
          <a
            href="https://github.com/jgl3hb/raspicam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
          >
            View on GitHub
          </a>
        </div>
        <div className="video-container mx-auto w-max m-4">
          <iframe
            width="320"   
            height="180"  
            src="https://www.youtube.com/embed/vID4VyUPosI"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <h2 className="text-xl font-semibold mt-8">MNIST/CIFAR ML Databases</h2>
        <p>I replicated digit and object recognition machine learning expiriments using NVIDIA GPU and the MNIST and CIFAR databases.</p>
        <div>
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
    </div>
  );
}

export default Hardware;
