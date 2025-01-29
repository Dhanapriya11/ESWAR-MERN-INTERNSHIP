import React from 'react';
import DHANA from './me.jpg';
import './App.css';

export const Home = () => {
  
  return (
    <div className="home-section">
      {/* Left side: Text Content */}
      <div className="text-content">
        <h2 className="subheading">Hello! I am</h2>
        <h1 className="subheading">Dhanapriya</h1>
        <p className="typing">BE CSE Student | AI/ML Enthusiast</p>
        <p className="intro-text"><storng>
          I’m passionate about leveraging AI to create innovative solutions. Always eager to collaborate and grow while contributing to meaningful projects.
          </storng>  </p>
        <a href="/RESUME2024.pdf" className="btn-download" download>
          Download Resume 
        </a>
      </div>

      {/* Right side: Profile Image */}
      <div className="profile-image-container">
        <img src={DHANA} alt="Dhanapriya VA" className="profile-image-circle" />
      </div>
    </div>
  );
};
