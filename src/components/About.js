// src/components/About.js
import React from 'react';
import { useLocation } from 'react-router-dom';

function About() {
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';

  return (
    <div className="about-page flex flex-col items-center justify-center text-center p-4">
      <img src="/1669316304152.jpeg" alt="Jeff Lewis" className="max-w-xs rounded-full" />
      <h1 className="text-2xl font-bold my-2">Jeff Lewis</h1>
      <h3 className="text-xl mb-2">Software Engineer | Hardware Hobbyist</h3>
      {isAboutPage && (
        <>
          <p>I love technology</p>
          <p>In my spare time, I enjoy skiing, surfing, and building things.</p>
          <p>I reside in Portland, Maine.</p>
        </>
      )}
      <div className="contact-info">
        <ul>
          <li>Email: <a href="mailto:lewis.jeffreyg@gmail.com" className="text-blue-600 hover:text-blue-800 transition duration-300">lewis.jeffreyg@gmail.com</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/jeffrey-g-lewis" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition duration-300">jeffrey-g-lewis</a></li>
          <li>GitHub: <a href="https://github.com/jgl3hb" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition duration-300">jgl3hb</a></li>
        </ul>
      </div>
    </div>
  );
}

export default About;
