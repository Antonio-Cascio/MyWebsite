import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProgrammingLanguages() {
    const navigate = useNavigate();
    
    return (
        <div className="skill-page">
            <button className="back-button" onClick={() => navigate('/')}>
                Back to Home
            </button>
            <h2>Programming Languages</h2>
            <div className="skill-list">
                <div className="skill-item">
                    <h3>Java</h3>
                    <p>Advanced proficiency in object-oriented programming</p>
                </div>
            </div>
        </div>
    );
}

export default ProgrammingLanguages; 