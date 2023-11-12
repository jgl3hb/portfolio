import React, { useState } from 'react';

function Resume() {
  const [message, setMessage] = useState('');

  const handleDownload = (e) => {
    e.preventDefault(); // Prevent default anchor link behavior
    setMessage('Your resume is downloading...');

    // Start file download manually
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + '/jefflewisresume.pdf'; // Create a link to the file
    link.download = 'Jeff_Lewis_Resume.pdf'; // Set the filename for download
    link.style.display = 'none'; // Hide the link
    document.body.appendChild(link); // Append to the page
    link.click(); // Trigger the download
    document.body.removeChild(link); // Remove the link from the document

    // Change message after 1 second
    setTimeout(() => {
      setMessage('Resume downloaded.'); // Update message after 1 second
      // Optionally reset message after another delay
      setTimeout(() => {
        setMessage(''); // Clear message after another delay if desired
      }, 2000); // Clear after 2 seconds for user to see 'downloaded' message
    }, 1000);
  };

  return (
    <div className="resume-page text-center mt-5">
      <button
        onClick={handleDownload}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Download Resume
      </button>
      {message && <div className="download-message mt-2 text-sm text-gray-600">{message}</div>}
      {/* Iframe container for displaying the PDF */}
      <div className="resume-container mt-5">
        <iframe
          src={process.env.PUBLIC_URL + '/jefflewisresume.pdf'}
          type="application/pdf"
          width="100%"
          height="800px"
          style={{ display: 'block', maxWidth: '100%', maxHeight: '90vh', margin: 'auto' }}
          title="Jeff Lewis Resume"
        >
          <p>Your browser does not support iframes.</p>
        </iframe>
      </div>
    </div>
  );
}

export default Resume;
