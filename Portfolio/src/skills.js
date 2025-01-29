import React from 'react';
import './App.css';
import pythonLogo from './python.png'; // Add relevant logos
import javaLogo from './java.png';
import vscodeLogo from './vscode.png';
import cpp from './c++.png';
import git from './git.png';
import html from './html.png';
import css from './css.png';

export const Skills = () => {
  return (
    <div className="skills-container">
      {/* Title */}
      <h2 className="skills-title">Technical Skills</h2>

      {/* Programming Languages Section */}
      <h2 className="section">Programming Languages</h2>
      <div className="skills-list">
        <div className="skill-item">
          <img src={pythonLogo} alt="Python" />
          <h4>Python</h4>
        </div>
        <div className="skill-item">
          <img src={javaLogo} alt="Java" />
          <h4>Java</h4>
        </div>
        <div className="skill-item">
          <img src={cpp} alt="C++" />
          <h4>C++</h4>
        </div>
        <div className="skill-item">
          <img src={html} alt="HTML" />
          <h4>HTML</h4>
        </div>
        <div className="skill-item">
          <img src={css} alt="CSS" />
          <h4>CSS</h4>
        </div>
      </div>

      {/* Tools Section */}
      <h2 className="section">Tools</h2>
      <div className="skills-list">
        <div className="skill-item">
          <img src={vscodeLogo} alt="VSCode" />
          <h4>VSCode</h4>
        </div>
        <div className="skill-item">
          <img src={git} alt="GitHub" />
          <h4>GitHub</h4>
        </div>
      </div>

      {/* Core Concepts Section */}
      <h2 className="section">Core Concepts</h2>
      <div className="skills-list">
        <div className="skill-item">
          <h4>Data Structures & Algorithms (Basics)</h4>
        </div>
        <div className="skill-item">
          <h4>Object Oriented Programming (Basics)</h4>
        </div>
      </div>
    </div>
  );
};
