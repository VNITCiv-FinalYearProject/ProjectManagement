// src/components/Navbar2.js

import React from 'react';
import '../styles/navbar2.css'; // Import the CSS for the Navbar

const Navbar2 = () => {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="#tasks">Notifications</a></li>
                <li><a href="#reports">About</a></li>
            </ul>
        </nav>
    );
}

export default Navbar2;
