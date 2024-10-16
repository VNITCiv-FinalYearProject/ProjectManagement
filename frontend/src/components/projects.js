import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../styles/projects.css'; // Use relative path for CSS import
import data from './data.js'; // Adjust to the correct relative path to data.js

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="main-content">
      {/* Navigation */}
      <nav>
        <ul>
          <li><a href="/dashboard">Home</a></li>
          <li><a href="/listofprojects">Projects</a></li> {/* Updated link to match the route */}
          <li><a href="#tasks">Notifications</a></li>
          <li><a href="#reports">About</a></li>
        </ul>
      </nav>

      {/* Projects Section */}
      <div className="container">
        <h1>Projects</h1>
        <div className="project-grid">
          {data.map((project) => (
            <div
              className="project-card"
              key={project.title} 
              onClick={() => navigate(`frontend/src/styles/projects/${project.title.replace(/\s+/g, '-')}`)} 
            >
              <div className="project-name">{project.title}</div>
              <div className="project-info">Supervisor: {project.supervisor}</div>
              <div className="project-info">Company: {project.company}</div>
              <div className="project-completion">{project.progress}% Complete</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <p>&copy; 2024 Project Management. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Projects;
