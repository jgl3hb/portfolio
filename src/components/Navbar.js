// components/Navbar.js
import React from 'react';
import { useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  // Define the navigation links
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Software', path: '/software' },
    { name: 'Hardware', path: '/hardware' },
    { name: 'Resume', path: '/resume' },
  ];

  return (
    <nav className="py-4">
      <div className="flex flex-col items-center">
        {/* Loop through navLinks to render them conditionally */}
        <div className="flex space-x-4">
          {navLinks.map((link) =>
            location.pathname !== link.path ? (
<a key={link.name} href={link.path} className="text-black-800 hover:underline">
                {link.name}
              </a>
            ) : null
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
