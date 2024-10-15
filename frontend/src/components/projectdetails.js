import React from 'react';
import Navbar from 'C:/coding/fyp the champ/my_project/fypproject/frontend/src/components/navbar.js'; // Importing Navbar component
import Footer from 'C:/coding/fyp the champ/my_project/fypproject/frontend/src/components/footer.js'; // Importing Footer component
import 'C:/coding/fyp the champ/my_project/fypproject/frontend/src/styles/projectdetails.css'; // Importing the CSS file for the main content

const ProjectDetails = ({ project }) => {
    return (
        <div>
            <Navbar /> {/* Using the Navbar component */}

            <div className="container">
                <div className="left-section">
                    <ul>
                        <li><a href="/drawings" target="_blank">Drawings</a></li>
                        <li><a href="https://drive.google.com/file/d/1b5tlf2VyGhGH2Fb8K7yxRBrFVkJ87tBf/view?usp=sharing" target="_blank">Tender</a></li>
                        <li><a href={`/project/${project.id}/bill`} target="_blank">Bill</a></li>
                        <li><a href="/progress" target="_blank">Progress</a></li>
                        <li><a href="/comments" target="_blank">Comments</a></li>
                    </ul>
                </div>
              
                <div className="main-section">
                    <div className="content">
                        <h1>{project.title}</h1>
                        <p>
                            <strong>Project Overview:</strong> {project.overview}<br /><br />
                            <strong>Location:</strong> {project.location}<br /><br />
                            <strong>Project Duration:</strong> {project.duration}<br /><br />
                            <strong>Current Status:</strong> {project.status}
                        </p>
                    </div>

                    {/* New Mid Section - Project Team */}
                    <div className="team-section">
                        <h2>Project Team</h2>
                        {project.teamMembers && project.teamMembers.length > 0 ? (
                            <ul>
                                {project.teamMembers.map((member, index) => (
                                    <li key={index}>
                                        <strong>{member.name}</strong> - {member.role}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No team members assigned to this project.</p>
                        )}
                    </div>
                </div>

                <div className="right-section">
                    <h2>Add Comments</h2>
                    <form action="/add-comment" method="POST">
                        <textarea name="comment" placeholder="Write your comment here..."></textarea>
                        <button type="submit">Add Comment</button>
                    </form>
                </div>
            </div>

            <Footer /> {/* Using the Footer component */}
        </div>
    );
};

export default ProjectDetails;
