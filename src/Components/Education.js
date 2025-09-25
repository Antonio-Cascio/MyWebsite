'use client';

import React from 'react';

import Nova from '../images/Nova.png';
import WildCat from '../images/WildCat.png';

function Education() {
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
                top: '100px',
                left: '100px',
                zIndex: 1,
                animation: 'float 6s ease-in-out infinite, pulse 4s ease-in-out infinite',
            }}>
                <img src={Nova} alt="Nova" style={{
                    width: '150px',
                    height: '150px',
                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
                }} />
            </div>

            <div style={{
                position: 'absolute',
                top: '100px',
                right: '100px',
                zIndex: 1,
                animation: 'float2 7s ease-in-out infinite, pulse2 5s ease-in-out infinite',
            }}>
                <img src={WildCat} alt="WildCat" style={{
                    width: '140px',
                    height: '140px',
                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
                }} />
            </div>


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
                Education
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
                }}>
                    <div style={{ marginBottom: '30px' }}>
                        <h3 style={{
                            fontSize: '2em',
                            marginBottom: '15px',
                            color: '#2F4858',
                            textShadow: '1px 1px 2px rgba(51, 107, 135, 0.1)',
                        }}>
                        Bachelor of Science in Computer Science
                        </h3>
                        <h4 style={{
                            fontSize: '1.5em',
                            marginBottom: '20px',
                            color: '#336B87',
                            opacity: 0.9,
                        }}>
                        Villanova University
                        </h4>
                    </div>

                    <div style={{
                        fontSize: '1.1em',
                        lineHeight: '1.6',
                        marginBottom: '30px',
                        color: '#617D8A',
                    }}>
                        <p style={{ marginBottom: '15px' }}>
                        I started my journey at Villanova&apos;s College of Liberal Arts and Sciences, studying Computer Science in the Fall of 2024. I am currently a Sophomore and expected to graduate in May 2028.
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '30px',
                        marginTop: '40px',
                    }}>
                        <div style={{
                            background: 'rgba(186, 217, 217, 0.3)',
                            padding: '20px',
                            borderRadius: '10px',
                            border: '1px solid rgba(51, 107, 135, 0.2)',
                        }}>
                            <h4 style={{ fontSize: '1.2em', marginBottom: '10px', color: '#2F4858' }}>Expected Graduation</h4>
                            <p style={{ color: '#617D8A' }}>May 2028</p>
                        </div>

                        <div style={{
                            background: 'rgba(186, 217, 217, 0.3)',
                            padding: '20px',
                            borderRadius: '10px',
                            border: '1px solid rgba(51, 107, 135, 0.2)',
                        }}>
                            <h4 style={{ fontSize: '1.2em', marginBottom: '10px', color: '#2F4858' }}>GPA</h4>
                            <p style={{ color: '#617D8A' }}>3.58</p>
                        </div>

                        <div style={{
                            background: 'rgba(186, 217, 217, 0.3)',
                            padding: '20px',
                            borderRadius: '10px',
                            border: '1px solid rgba(51, 107, 135, 0.2)',
                            gridColumn: 'span 2',
                        }}>
                            <h4 style={{ fontSize: '1.2em', marginBottom: '10px', color: '#2F4858' }}>Honors</h4>
                            <p style={{ color: '#617D8A' }}>Dean&apos;s List (Fall 2024, Spring 2025)</p>
                        </div>

                        <div style={{
                            background: 'rgba(186, 217, 217, 0.3)',
                            padding: '20px',
                            borderRadius: '10px',
                            border: '1px solid rgba(51, 107, 135, 0.2)',
                            gridColumn: 'span 2',
                        }}>
                            <h4 style={{ fontSize: '1.2em', marginBottom: '10px', color: '#2F4858' }}>Relevant Coursework</h4>
                            <p style={{ color: '#617D8A' }}>Algorithms and Data Structures I & II, Discrete Structures, Platform Based Computing, Principles of Database Systems, Statistics for Computing, and more.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;
