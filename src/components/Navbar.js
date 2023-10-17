
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/about" className="nav-link">About</Link>
      <Link to="/projects" className="nav-link">Projects</Link>
      <Link to="/resume" className="nav-link">Resume</Link>
    </nav>
  );
}

export default Navbar;
