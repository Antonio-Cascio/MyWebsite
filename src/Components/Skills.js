import React from 'react';
import { useNavigate } from 'react-router-dom';

function Skills() {
    const navigate = useNavigate();

    return (
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <h2>My Skills</h2>
            <div className="skills-button-container">
                <button 
                    className="skill-button"
                    onClick={() => navigate('/skills/programming-languages')}
                >
                    Programming Languages
                </button>
                <button 
                    className="skill-button"
                    onClick={() => navigate('/skills/professional-development')}
                >
                    Professional Development
                </button>
                <button 
                    className="skill-button"
                    onClick={() => navigate('/skills/tools-and-frameworks')}
                >
                    Tools & Frameworks
                </button>
                <button 
                    className="skill-button"
                    onClick={() => navigate('/skills/languages')}
                >
                    Languages
                </button>
            </div>
        </div>
    );
}

export default Skills;