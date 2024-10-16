import React from 'react';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">Project Management</div>
      <div className="auth-buttons">
        <button onClick={() => window.location.href = '/login'}>Login</button>
        <button onClick={() => window.location.href = '/signup'}>Signup</button>
      </div>
    </div>
  );
};

export default Navbar;