import React from 'react';
import ReactLogo from '../../images/React.png';
import MaterialUI from '../../images/MUI.png';

function ToolsAndFrameworks() {

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

            <div style={{
                padding: '40px',
                minHeight: '100vh',
                position: 'relative',
                overflow: 'hidden',
            }}>

                <style>{floatingAnimation}</style>

                <div style={{
                    position: 'absolute',
                    top: '100px',
                    left: '100px',
                    zIndex: 1,
                    animation: 'float 6s ease-in-out infinite, pulse 4s ease-in-out infinite',
                }}>

                    <img src={ReactLogo} alt="React" style={{
                        width: '100px',
                        height: '100px',
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
                    <img src={MaterialUI} alt="MaterialUI" style={{
                        width: '100px',
                        height: '100px',
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
                }}>
                Tools and Frameworks
                </h2>

                <div>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '30px',
                        marginTop: '20px',
                    }}>
                        <div style={{
                            background: 'rgba(186, 217, 217, 0.4)',
                            padding: '20px',
                            borderRadius: '10px',
                            border: '2px solid rgba(51, 107, 135, 0.2)',
                        }}>
                            <h3 style={{ fontSize: '1.5em', marginBottom: '15px', color: '#2F4858' }}>React</h3>
                            <p style={{ fontWeight: 'bold' }}>Beginner proficiency in React development</p>
                        </div>

                        <div style={{
                            background: 'rgba(186, 217, 217, 0.4)',
                            padding: '20px',
                            borderRadius: '10px',
                            border: '2px solid rgba(51, 107, 135, 0.2)',
                        }}>
                            <h3 style={{ fontSize: '1.5em', marginBottom: '15px', color: '#2F4858' }}>Material UI</h3>
                            <p style={{ fontWeight: 'bold' }}>Frontend development with Material UI</p>
                        </div>

                        <div style={{
                            background: 'rgba(186, 217, 217, 0.4)',
                            padding: '20px',
                            borderRadius: '10px',
                            border: '2px solid rgba(51, 107, 135, 0.2)',
                        }}>
                            <h3 style={{ fontSize: '1.5em', marginBottom: '15px' }}>SQLite</h3>
                            <p style={{ fontWeight: 'bold' }}>Database management system</p>
                        </div>

                        <div style={{
                            background: 'rgba(186, 217, 217, 0.4)',
                            padding: '20px',
                            borderRadius: '10px',
                            border: '2px solid rgba(51, 107, 135, 0.2)',
                        }}>
                            <h3 style={{ fontSize: '1.5em', marginBottom: '15px' }}>JWT Authentication</h3>
                            <p style={{ fontWeight: 'bold'   }}>Authentication and authorization</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ToolsAndFrameworks;
