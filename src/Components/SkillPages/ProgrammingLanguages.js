import React from 'react';
import Java from '../../images/Java.png';
import JavaScript from '../../images/JS.png';

function ProgrammingLanguages() {

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
        <div>

            <div style={{
                padding: window.innerWidth > 768 ? '40px' : '20px',
                minHeight: '100vh',
                position: 'relative',
                overflow: 'hidden',
            }}>
                {/* Add CSS animations */}
                <style>{floatingAnimation}</style>

                {/* Background decorative images */}
                <div style={{
                    position: 'absolute',
                    top: '100px',
                    left: '50px',
                    zIndex: 1,
                    animation: 'float 6s ease-in-out infinite, pulse 4s ease-in-out infinite',
                    display: window.innerWidth > 768 ? 'block' : 'none',
                }}>
                    <img src={Java} alt="Java" style={{
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
                    display: window.innerWidth > 768 ? 'block' : 'none',
                }}>
                    <img src={JavaScript} alt="JavaScript" style={{
                        width: '140px',
                        height: '140px',
                        filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
                    }} />
                </div>


                <div style={{
                    padding: window.innerWidth > 768 ? '40px' : '20px',
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
                    Programming Languages
                    </h2>

                    <div>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                            gap: '20px',
                            marginTop: '20px',
                        }}>
                            <div style={{
                                background: 'rgba(186, 217, 217, 0.4)',
                                padding: '20px',
                                borderRadius: '10px',
                                border: '2px solid rgba(51, 107, 135, 0.2)',
                            }}>
                                <h3 style={{ fontSize: '1.5em', marginBottom: '15px', color: '#2F4858' }}>Java</h3>
                                <p style={{ fontWeight: 'bold' }}>Proficiency in object-oriented programming</p>
                            </div>

                            <div style={{
                                background: 'rgba(186, 217, 217, 0.4)',
                                padding: '20px',
                                borderRadius: '10px',
                                border: '2px solid rgba(51, 107, 135, 0.2)',
                            }}>
                                <h3 style={{ fontSize: '1.5em', marginBottom: '15px', color: '#2F4858' }}>JavaScript</h3>
                                <p style={{ fontWeight: 'bold' }}> Proficiency in JavaScript</p>
                            </div>
                            <div style={{
                                background: 'rgba(186, 217, 217, 0.4)',
                                padding: '20px',
                                borderRadius: '10px',
                                border: '2px solid rgba(51, 107, 135, 0.2)',
                            }}>
                                <h3 style={{ fontSize: '1.5em', marginBottom: '15px', color: '#2F4858' }}>Python</h3>
                                <p style={{ fontWeight: 'bold' }}>Proficiency in Python</p>
                            </div>
                            <div style={{
                                background: 'rgba(186, 217, 217, 0.4)',
                                padding: '20px',
                                borderRadius: '10px',
                                border: '2px solid rgba(51, 107, 135, 0.2)',
                            }}>
                                <h3 style={{ fontSize: '1.5em', marginBottom: '15px', color: '#2F4858' }}>HTML</h3>
                                <p style={{ fontWeight: 'bold' }}>Proficiency in HTML</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default ProgrammingLanguages;
