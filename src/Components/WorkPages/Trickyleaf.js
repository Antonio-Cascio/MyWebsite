import React from 'react';
import { useNavigate } from 'react-router-dom';

function TrickyLeaf() {
    const navigate = useNavigate();
    
    return (
        <div className="work-page">
            <button className="back-button" onClick={() => navigate('/')}>
                Back to Home
            </button>
            <h2>TrickyLeaf</h2>
            <h3>Intern Developer</h3>
            <p className="work-location">Milano, Italy</p>
            <p className="work-duration">May 2025 – July 2025</p>
            <div className="work-details">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div> 
    );
}

export default TrickyLeaf;