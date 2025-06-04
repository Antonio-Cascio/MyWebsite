import React from 'react';
import { useNavigate } from 'react-router-dom';

function ToolsAndFrameworks() {
    const navigate = useNavigate();
    
    return (
        <div className="skill-page">
            <button className="back-button" onClick={() => navigate('/')}>
                Back to Home
            </button>
            <h2>Tools & Frameworks</h2>
            <div className="skill-list">
                <div className="skill-item">
                    <h3>React</h3>
                    <p>Frontend development with React and related libraries</p>
                </div>
                <div className="skill-item">
                    <h3>Git</h3>
                    <p>Version control and collaboration</p>
                </div>
                <div className="skill-item">
                    <h3>Cursor</h3>
                    <p>Advanced IDE usage and extensions</p>
                </div>
                <div className="skill-item">
                    <h3>ReactJS</h3>
                    <p>Frontend development with ReactJS</p>
                </div>
            </div>
        </div>
    );
}

export default ToolsAndFrameworks; 