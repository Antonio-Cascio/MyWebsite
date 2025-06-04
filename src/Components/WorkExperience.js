import React from 'react';
import { useNavigate } from 'react-router-dom';

function WorkExperience() {
    const navigate = useNavigate();

    return (
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <h2>Work Experience</h2>
            <div className="work-buttons-container">
                <button 
                    className="work-button"
                    onClick={() => navigate('/work-experience/aldos')}
                >
                    Aldo's Pane Vino
                </button>
                <button 
                    className="work-button"
                    onClick={() => navigate('/work-experience/trickyleaf')}
                >
                    TrickyLeaf
                </button>
            </div>
        </div>
    );
}

export default WorkExperience;