// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Resume from './components/Resume';
import Software from './components/Software';
import Hardware from './components/Hardware';
import Home from './components/Home'



function App() {
  return (
    <Router>
      <div className="app-container mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
        <div className="content mt-10 mb-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/software" element={<Software />} />
            <Route path="/hardware" element={<Hardware />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
