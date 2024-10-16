import React from 'react';
import Navbar2 from './navbar2.js'; // Adjust this path as necessary
import '../styles/dashboard.css'; // Adjust this path as necessary
import Footer from './footer.js';
const Dashboard = () => {
    return (
        <>
            <Navbar2 /> {/* Using the new Navbar2 component */}

            {/* Main Content */}
            <main className="main-content">
                <h1>Welcome to the Project Management Dashboard</h1>
                <p>Stay updated with your latest projects, tasks, and reports at a glance.</p>

                {/* Quick Stats Section */}
                <section className="quick-stats">
                    <h2>Quick Stats</h2>
                    <div className="stats-grid">
                        <div className="stat-card">
                            <h3>Ongoing Projects</h3>
                            <p>5</p>
                        </div>
                        <div className="stat-card">
                            <h3>Tasks Due Today</h3>
                            <p>3</p>
                        </div>
                        <div className="stat-card">
                            <h3>Completed Projects</h3>
                            <p>12</p>
                        </div>
                        <div className="stat-card">
                            <h3>Upcoming Deadlines</h3>
                            <p>4</p>
                        </div>
                    </div>
                </section>

                {/* Recent Activity Section */}
                <section className="recent-activity">
                    <h2>Recent Activity</h2>
                    <ul>
                        <li>Project <strong>PG CRC</strong> updated by <strong>ABC</strong>.</li>
                        <li>Task <strong>Swimming Pool</strong> completed by <strong>XYZ</strong>.</li>
                        <li>Deadline for <strong>Tender Release</strong> approaching in 2 days.</li>
                    </ul>
                </section>
            </main>

            {/* Footer Section */}
            <Footer /> 
        </>
    );
}

export default Dashboard;
