import React from 'react';
import { useLocation } from 'react-router-dom';

function About() {
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';

  return (
    <div className="about-page flex flex-col items-center justify-center text-center p-4">
      <img src="/profile.png" alt="Jeff Lewis" className="max-w-xs rounded-full" />
      <h1 className="text-2xl font-bold my-2">Jeff Lewis</h1>
      <h3 className="text-xl mb-2">Software Engineer | Hardware Hobbyist</h3>
      {isAboutPage && (
        <>
          <p className="mb-4">I design and build AI agent systems and scalable data architectures for web, edge, and hardware applications—spanning facial and object detection models, MCP servers, and in-memory knowledge graphs.</p>
          <p className="mb-4">I reside in southern Maine and enjoy skiing, surfing, reading, and hiking with my fiance and our dogs in my free time.</p>
        </>
      )}
      <div className="contact-info mb-4">
        <ul>
          <li>Email: <a href="mailto:lewis.jeffreyg@gmail.com" className="text-black-800 hover:underline">lewis.jeffreyg@gmail.com</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/jeffrey-g-lewis" target="_blank" rel="noopener noreferrer" className="text-black-800 hover:underline">jeffrey-g-lewis</a></li>
          <li>GitHub: <a href="https://github.com/jgl3hb" target="_blank" rel="noopener noreferrer" className="text-black-800 hover:underline">jgl3hb</a></li>
        </ul>
      </div>
    </div>
  );
}

export default About;
