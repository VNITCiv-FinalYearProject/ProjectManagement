import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/loginpage';
import DashboardPage from './components/dashboard';
import Projects from 'C:/coding/fyp the champ/my_project/fypproject/frontend/src/components/projects.js';
import ProjectDetails from 'C:/coding/fyp the champ/my_project/fypproject/frontend/src/components/projectdetails.js';
import Billing from './components/billing';
import projectData from 'C:/coding/fyp the champ/my_project/fypproject/frontend/src/components/data.js'; // Importing the project data

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
