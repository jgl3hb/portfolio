// src/components/About.js
import React from 'react';

function About() {
  return (
    <div className="about-page">
      <h1>Jeff Lewis</h1>
      <h3>Web Developer | Creative Enthusiast</h3>
      <p>Welcome to my portfolio. Here's a bit about me...</p>
      <div className="contact-info">
        <h3>Contact Info</h3>
        <ul>
          <li>Email: <a href="mailto:lewis.jeffreyg@gmail.com">lewis.jeffreyg@gmail.com</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/jeffrey-g-lewis" target="_blank" rel="noopener noreferrer">yourprofile</a></li>
          <li>GitHub: <a href="https://github.com/jgl3hb" target="_blank" rel="noopener noreferrer">yourusername</a></li>
        </ul>
      </div>
    </div>
  );
}

export default About;
