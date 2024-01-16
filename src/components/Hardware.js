import React from "react";

function Hardware() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 max-w-2xl mx-auto text-center">
          <h2 className="text-xl font-semibold">Yankee Sunrises</h2>
          <p>
            A nod to Sunrise Earth, Planet Earth's unheralded sibling. This
            project documents sunrises primarily shot around Southern Maine.
            The Raspberry Pi setup can be attributed to a user called fotosyn.
          </p>
          <p className="mt-4">
            While staying with family in Missouri during the pandemic, I
            realized how deeply I missed the sunrises around Portland, Maine,
            my adopted home. I began learning to code writing basic Python
            scripts with a Raspberry Pi.
          </p>
          <div className="flex flex-col items-center mt-4">
            <a
              href="https://www.instructables.com/Simple-timelapse-camera-using-Raspberry-Pi-and-a-c/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 visited:text-purple-600 mb-2"
            >
              Inspiration
            </a>
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
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="w-full md:w-1/2 max-w-2xl mx-auto text-center">
          <h2 className="text-xl font-semibold mt-8">MNIST/CIFAR ML Databases</h2>
          <p>
            I replicated digit and object recognition machine learning
            experiments using NVIDIA GPU and the MNIST and CIFAR databases.
          </p>
          <a
            href="https://github.com/jgl3hb/mnist"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
          >
            View on GitHub
          </a>
          <img
            src="/image.png"
            alt="MNIST #3"
            className="w-64 h-64 object-cover mx-auto mt-4"
          />
        </div>
      </div>
    </div>
  );
}

export default Hardware;
