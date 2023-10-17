// src/components/About.js
import React from 'react';

function About() {
  return (
    <div className="about-page">
      <h1>About Me</h1>
      <h3>Web Developer | Creative Enthusiast</h3>
      <p>Welcome to my portfolio. Here's a bit about me...</p>
      <div className="contact-info">
        <h3>Contact Info</h3>
        <ul>
          <li>Email: <a href="mailto:youremail@example.com">youremail@example.com</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">yourprofile</a></li>
          <li>GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">yourusername</a></li>
          <li>Twitter: <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">yourhandle</a></li>
        </ul>
      </div>
    </div>
  );
}

export default About;
