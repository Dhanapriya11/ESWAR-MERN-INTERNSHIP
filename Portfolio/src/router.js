import React from 'react';
import './App.css';
import { Home } from './home';
import { Marks } from './marks';
import { Projects } from './projects';
import { Certificates } from './certificates';
import { Skills } from './skills';
import { Contact } from './contact';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function App2() {
  return (
    <Router>
      <div className="app-container">
        {/* Navigation Bar */}
        <nav className="navbar">
          <h1 className="logo">PORTFOLIO</h1>
          <div className="nav-links">
            <Link to="/home">Home</Link>
            <Link to="/marks">Education</Link>
            <Link to="/certificates">Certificates</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="social-links">
            <a href="https://github.com/Dhanapriya11" target="_blank" rel="noopener noreferrer">
              <FaGithub className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/dhana-priya-b210412a5" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="mailto:dhanapriya.v2023aiml@sece.ac.in" target="_blank" rel="noopener noreferrer">
              <FaEnvelope className="social-icon" />
            </a>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/marks" element={<Marks />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App2;
