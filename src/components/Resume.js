// src/components/Resume.js
import React, { useState } from 'react';

function Resume() {
  const [message, setMessage] = useState('');

  const handleDownload = () => {
    setMessage('Your resume is downloading...');
    // Reset message after 5 seconds
    setTimeout(() => {
      setMessage('');
    }, 5000);
  };

  return (
    <div className="resume-page">
      <h1>Resume</h1>
      <a
        href="/jefflewisresume.pdf"
        download="jefflewisresume.pdf"
        onClick={handleDownload}
      >
        Download Resume
      </a>
      {message && <div className="download-message">{message}</div>}
    </div>
  );
}

export default Resume;