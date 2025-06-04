import React from 'react';
import { useNavigate } from 'react-router-dom';

function AldosPaneVino() {
    const navigate = useNavigate();
    
    return (
        <div className="work-page">
            <button className="back-button" onClick={() => navigate('/')}>
                Back to Home
            </button>
            <h2>Aldo's Pane Vino</h2>
            <h3>Team Member</h3>
            <p className="work-location">Wyckoff, NJ</p>
            <p className="work-duration">May 2021 – Present</p>
            <div className="work-details">
                <ul>
                    <li>Fostered positive workplace environment through quality customer service and consistent communication with management.</li>
                    <li>Developed talents through rigorous training.</li>
                    <li>Adapted through problems that have arisen during the workday.</li>
                </ul>
            </div>
        </div>
    );
}

export default AldosPaneVino; 