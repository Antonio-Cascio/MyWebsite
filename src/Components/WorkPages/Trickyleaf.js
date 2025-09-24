import React from 'react';
import { useNavigate } from 'react-router-dom';
import Image from '../../images/TrickyLeaf.jpeg';
import Tricky from '../../images/trick.png';
import Computer from '../../images/Computer.png';

function TrickyLeaf() {
    const navigate = useNavigate();

    const floatingAnimation = `
    @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(-15deg); }
        50% { transform: translateY(-20px) rotate(-10deg); }
    }
    
    @keyframes float2 {
        0%, 100% { transform: translateY(0px) rotate(10deg); }
        50% { transform: translateY(-15px) rotate(15deg); }
    }
    
    @keyframes float3 {
        0%, 100% { transform: translateY(0px) rotate(5deg); }
        50% { transform: translateY(-25px) rotate(0deg); }
    }
    
    @keyframes float4 {
        0%, 100% { transform: translateY(0px) rotate(-8deg); }
        50% { transform: translateY(-18px) rotate(-3deg); }
    }
    
    @keyframes pulse {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 0.6; }
    }
    
    @keyframes pulse2 {
        0%, 100% { opacity: 0.4; }
        50% { opacity: 0.7; }
    }
    
    @keyframes pulse3 {
        0%, 100% { opacity: 0.25; }
        50% { opacity: 0.5; }
    }
    
    @keyframes pulse4 {
        0%, 100% { opacity: 0.35; }
        50% { opacity: 0.65; }
    }
`;

    return (
        <div style={{
            padding: '40px',
            minHeight: '100vh',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Add CSS animations */}
            <style>{floatingAnimation}</style>

            {/* Background decorative images */}
            <div style={{
                position: 'absolute',
                top: '80px',
                left: '50px',
                zIndex: 1,
                animation: 'float 6s ease-in-out infinite, pulse 4s ease-in-out infinite',
            }}>
                <img src={Tricky} alt="Tricky" style={{
                    width: '150px',
                    height: '150px',
                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
                }} />
            </div>

            <div style={{
                position: 'absolute',
                top: '80px',
                right: '60px',
                zIndex: 1,
                animation: 'float2 7s ease-in-out infinite, pulse2 5s ease-in-out infinite',
            }}>
                <img src={Computer} alt="Computer" style={{
                    width: '140px',
                    height: '140px',
                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
                }} />
            </div>

            <div style={{
                position: 'absolute',
                bottom: '100px',
                left: '80px',
                zIndex: 1,
                animation: 'float3 8s ease-in-out infinite, pulse3 6s ease-in-out infinite',
            }}>
                <img src={Computer} alt="Computer" style={{
                    width: '100px',
                    height: '150px',
                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
                }} />
            </div>

            <div style={{
                position: 'absolute',
                bottom: '90px',
                right: '80px',
                zIndex: 1,
                animation: 'float4 5s ease-in-out infinite, pulse4 4.5s ease-in-out infinite',
            }}>
                <img src={Tricky} alt="Tricky" style={{
                    width: '130px',
                    height: '130px',
                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
                }} />
            </div>

            <h2 style={{
                textAlign: 'center',
                fontSize: '2.5em',
                marginTop: '50px',
                marginBottom: '100px',
                color: '#2F4858',
                textShadow: '2px 2px 4px rgba(51, 107, 135, 0.2)',
                position: 'relative',
                zIndex: 2,
            }}>
                TrickyLeaf
            </h2>

            <div style={{
                maxWidth: '1000px',
                margin: '0 auto',
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                padding: '40px',
                border: '1px solid rgba(51, 107, 135, 0.2)',
                color: '#2F4858',
                position: 'relative',
                zIndex: 2,
            }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '30px', marginBottom: '30px' }}>
                    <img
                        className="personality-image"
                        src={Image}
                        alt="TrickyLeaf"
                        style={{
                            width: '400px',
                            height: '350px',
                            borderRadius: '10px',
                            objectFit: 'cover',
                            border: '3px solid rgba(255, 255, 255, 0.3)',
                            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
                            flexShrink: 0,
                        }}
                    />
                    <div style={{ flex: 1 }}>
                        <h3 style={{ fontSize: '1.8em', marginBottom: '20px', color: '#2F4858' }}>Intern Developer</h3>
                        <p style={{ fontSize: '1.2em', marginBottom: '10px', color: '#617D8A' }}>Milano, Italy</p>
                        <p style={{ fontSize: '1.2em', marginBottom: '30px', color: '#617D8A' }}>May 2025 – July 2025</p>
                        <div style={{
                            fontSize: '1.1em',
                            lineHeight: '1.6',
                        }}>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '15px', color: '#617D8A' }}>• Collaborated on full-stack web and mobile development using JavaScript, ReactJS, and React Native</li>
                                <li style={{ marginBottom: '15px', color: '#617D8A' }}>• Assisted in backend integration and data handling with SQL</li>
                                <li style={{ marginBottom: '15px', color: '#617D8A' }}>• Gained hands-on experience in UI development, API communication, and dynamic frontend behavior</li>
                                <li style={{ marginBottom: '15px', color: '#617D8A' }}>• Contributed to ongoing technical projects involving hardware interaction and data logging via web interfaces</li>
                                <li style={{ marginBottom: '15px', color: '#617D8A' }}>• Worked in an agile environment, building teamwork and version control skills with Git</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TrickyLeaf;
