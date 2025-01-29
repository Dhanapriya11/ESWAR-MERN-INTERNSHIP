import React from 'react';

export const Projects = () => {
  return (
    <div className="projects-container">
      <h4 className="projects-title">PROJECTS</h4>

      <div className="projects-list"> 
        <div className="project-item">
          <div className="project-image">
            <img src="https://via.placeholder.com/100" alt="AI Assistant" />
          </div>
          <p>
            <a href="https://github.com/Dhanapriya11/AI-chatbot" target="_blank" className="project-link">
              <strong>AI Desktop Assistant - [ChatBot]</strong> (2024)
            </a>
          </p>
          <p className="project-description">
            This assistant is a user-friendly, interactive tool designed to respond to both command inputs and voice commands. Built with Tkinter for the graphical user interface and Python as the backend, it seamlessly integrates task automation, including opening applications, searching the web, and managing files.
          </p>
          <p><strong>Tool used:</strong> VScode</p>
        </div>
        
        <div className="project-item">
          <div className="project-image">
            <img src="https://via.placeholder.com/100" alt="Food Delivery" />
          </div>
          <p>
            <a href="https://github.com/Dhanapriya11/Food-Delivery-System" target="_blank" className="project-link">
              <strong>Food Delivery System</strong> (2024)
            </a>
          </p>
          <p className="project-description">
            This Food Delivery System project is designed to simulate a real-world food delivery application. It includes modules for customer registration and login, enabling customers to browse and place orders from a predefined menu.
          </p>
          <p><strong>Tool used:</strong> Eclipse, MySQL</p>
        </div>
      </div>
    </div>
  );
}
