import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/loginpage.js';
import DashboardPage from './components/dashboard.js';
import Projects from './components/projects.js';
import ProjectDetails from './components/projectdetails.js';
import Billing from './components/billing.js';
import projectData from './components/data.js'; // Importing the project data

function App() {
  // Use the first project from projectData
  const firstProject = projectData[0];

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/projects" element={<Projects />} />
        {/* Static route for the first project */}
        <Route path="/projectdetails" element={<ProjectDetails project={firstProject} />} />
        <Route path="/billing" element={<Billing />} />
      </Routes>
    </Router>
  );
}

export default App;
