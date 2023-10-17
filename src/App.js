import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="content">
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/resume" component={Resume} />
        </div>
      </div>
    </Router>
  );
}

export default App;
