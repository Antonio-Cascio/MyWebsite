import React from 'react';
import { useNavigate } from 'react-router-dom';

function Skills() {
    const navigate = useNavigate();

    return (
        <div style={{ 
            padding: '40px',
            minHeight: '100vh',
            position: 'relative'
        }}>
            <h2 style={{ 
                textAlign: 'center', 
                fontSize: '2.5em',
                marginTop: '50px',
                marginBottom: '100px',
                color: '#2F4858',
                textShadow: '2px 2px 4px rgba(51, 107, 135, 0.2)'
            }}>
                My Skills
            </h2>
            
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '40px',
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '20px'
            }}>
                <div 
                    className="skill-card"
                    onClick={() => navigate('/skills/programming-languages')}
                    style={{
                        background: 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '15px',
                        padding: '30px',
                        cursor: 'pointer',
                        border: '1px solid rgba(9, 9, 9, 0.2)',
                        color: '#2F4858',
                        textAlign: 'center',
                        transition: 'all 0.3s ease',
                        transform: 'translateY(0)',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
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
                    <h3 style={{ fontSize: '1.8em', marginBottom: '20px', color: '#2F4858' }}>Programming Languages</h3>
                    <p style={{ fontSize: '1.1em', opacity: 0.9, color: '#617D8A' }}>Explore my coding expertise</p>
                </div>

                <div 
                    className="skill-card"
                    onClick={() => navigate('/skills/professional-development')}
                    style={{
                        background: 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '15px',
                        padding: '30px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        transform: 'translateY(0)',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        border: '1px solid rgba(9, 9, 9, 0.2)',
                        color: '#2F4858',
                        textAlign: 'center'
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
                    <h3 style={{ fontSize: '1.8em', marginBottom: '20px', color: '#2F4858' }}>Professional Development</h3>
                    <p style={{ fontSize: '1.1em', opacity: 0.9, color: '#617D8A' }}>My growth journey</p>
                </div>

                <div 
                    className="skill-card"
                    onClick={() => navigate('/skills/tools-and-frameworks')}
                    style={{
                        background: 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '15px',
                        padding: '30px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        transform: 'translateY(0)',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        border: '1px solid rgba(9, 9, 9, 0.2)',
                        color: '#2F4858',
                        textAlign: 'center'
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
                    <h3 style={{ fontSize: '1.8em', marginBottom: '20px', color: '#2F4858' }}>Tools & Frameworks</h3>
                    <p style={{ fontSize: '1.1em', opacity: 0.9, color: '#617D8A' }}>Technologies I work with</p>
                </div>

                <div 
                    className="skill-card"
                    onClick={() => navigate('/skills/languages')}
                    style={{
                        background: 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '15px',
                        padding: '30px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        transform: 'translateY(0)',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        border: '1px solid rgba(9, 9, 9, 0.2)',
                        color: '#2F4858',
                        textAlign: 'center'
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
                    <h3 style={{ fontSize: '1.8em', marginBottom: '20px', color: '#2F4858' }}>Languages</h3>
                    <p style={{ fontSize: '1.1em', opacity: 0.9, color: '#617D8A' }}>My linguistic abilities</p>
                </div>
            </div>
        </div>
    );
}

export default Skills;