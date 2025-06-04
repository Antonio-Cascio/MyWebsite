import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProfessionalDevelopment() {
    const navigate = useNavigate();
    
    return (
        <div className="skill-page">
            <button className="back-button" onClick={() => navigate('/')}>
                Back to Home
            </button>
            <h2>Professional Development</h2>
            <div className="skill-list">
                <div className="skill-item">
                    <h3>Villanova Leadership Program</h3>
                    <p>• Participated in modules demonstrating how to be a better leader.</p>
                    <p>• Networked with other Villanova Students and Alumni.</p>
                    <p>• Received a Certificate of Leadership.</p>
                </div>
                <div className="skill-item">
                    <h3>American Legion Boys State</h3>
                    <p>• Partook in realistic simulations of the NJ state government, roleplaying as different types of government officials.</p>
                    <p>• Collaborated with other city members to achieve the title of best city.</p>
                    <p>• Assisted in development of a manual illustrating what we learned.</p>
                </div>
                <div className="skill-item">
                    <h3>Communication</h3>
                    <p>Excellent verbal and written communication skills</p>
                </div>
                <div className="skill-item">
                    <h3>Team Collaboration</h3>
                    <p>Experience working in agile development environments</p>
                </div>
            </div>
        </div>
    );
}

export default ProfessionalDevelopment; 