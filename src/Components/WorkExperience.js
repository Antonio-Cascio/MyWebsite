import React from 'react';
import { useNavigate } from 'react-router-dom';

function WorkExperience() {
    const navigate = useNavigate();

    return (
        <div style={{
            padding: '40px',
            minHeight: '100vh',
            position: 'relative',
        }}>
            <h2 style={{
                textAlign: 'center',
                fontSize: '2.5em',
                marginTop: '50px',
                marginBottom: '100px',
                color: '#2F4858',
                textShadow: '2px 2px 4px rgba(51, 107, 135, 0.2)',
            }}>
                Work Experience
            </h2>

            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '30px',
                padding: '20px',
            }}>
                <div
                    className="work-card"
                    onClick={() => navigate('/work-experience/trickyleaf')}
                    onKeyDown={(e) => e.key === 'Enter' && navigate('/work-experience/trickyleaf')}
                    role="button"
                    tabIndex={0}
                    style={{
                        background: 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '15px',
                        padding: '30px',
                        cursor: 'pointer',
                        border: '1px solid rgba(51, 107, 135, 0.2)',
                        color: '#2F4858',
                        textAlign: 'center',
                        alignItems: 'center',
                        transition: 'all 0.3s ease',
                        transform: 'translateY(0)',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-8px)';
                        e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)';
                        e.target.style.background = 'rgba(255, 255, 255, 0.95)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
                        e.target.style.background = 'rgba(255, 255, 255, 0.9)';
                    }}
                >
                    <h3 style={{ fontSize: '1.8em', marginBottom: '20px', color: '#2F4858' }}>TrickyLeaf 🧑‍💻</h3>
                    <p style={{ fontSize: '1.1em', opacity: 0.9, color: '#617D8A' }}>Explore my role at TrickyLeaf</p>
                </div>

                <div
                    className="work-card"
                    onClick={() => navigate('/work-experience/aldos')}
                    onKeyDown={(e) => e.key === 'Enter' && navigate('/work-experience/aldos')}
                    role="button"
                    tabIndex={0}
                    style={{
                        background: 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '15px',
                        padding: '30px',
                        cursor: 'pointer',
                        border: '1px solid rgba(51, 107, 135, 0.2)',
                        color: '#2F4858',
                        textAlign: 'center',
                        alignItems: 'center',
                        transition: 'all 0.3s ease',
                        transform: 'translateY(0)',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-8px)';
                        e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)';
                        e.target.style.background = 'rgba(255, 255, 255, 0.95)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
                        e.target.style.background = 'rgba(255, 255, 255, 0.9)';
                    }}
                >
                    <h3 style={{ fontSize: '1.8em', marginBottom: '20px', color: '#2F4858' }}>Aldo&apos;s Pane e Vino 🥖</h3>
                    <p style={{ fontSize: '1.1em', opacity: 0.9, color: '#617D8A' }}>Discover my experience at Aldo&apos;s</p>
                </div>
            </div>
        </div>
    );
}

export default WorkExperience;
