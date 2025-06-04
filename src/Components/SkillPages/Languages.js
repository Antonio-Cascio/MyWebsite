import React from 'react';
import { useNavigate } from 'react-router-dom';

function Languages() {
    const navigate = useNavigate();
    
    return (
        <div>
            <button className="back-button" onClick={() => navigate('/')}>
                Back to Home
            </button>
            <h2>Languages</h2>
            <div className="skill-list">
                <div className="skill-item">
                    <h3>English</h3>
                    <p>Native proficiency</p>
                    <h3>Italian</h3>
                    <p>Literate proficiency</p>
                    <h3>Spanish</h3>
                    <p>Beginner proficiency</p>
                </div>
            </div>
        </div>
    );
}

export default Languages;