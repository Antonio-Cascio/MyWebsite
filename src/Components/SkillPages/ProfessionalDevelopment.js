import React from 'react';
import Leadership from '../../images/leader.png';
import BoysState from '../../images/BoysState.png';

function ProfessionalDevelopment() {

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
                left: '50px',
                zIndex: 1,
                animation: 'float 6s ease-in-out infinite, pulse 4s ease-in-out infinite',
            }}>
                <img src={Leadership} alt="Leadership" style={{
                    width: '170px',
                    height: '170px',
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
                <img src={BoysState} alt="BoysState" style={{
                    width: '170px',
                    height: '170px',
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
                Professional Development
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
                            <h3 style={{ fontSize: '1.5em', marginBottom: '15px', color: '#2F4858' }}>Villanova Leadership Program</h3>
                            <h4 style={{ color: '#336B87' }}> <a href="https://www1.villanova.edu/university.html"> Villanova University, Pennsylvania</a></h4>
                            <h5>January 2025 - April 2025</h5>
                            <p style={{ fontWeight: 'bold' }}>• Participated in modules demonstrating how to be a better leader.</p>
                            <p style={{ fontWeight: 'bold' }}>• Networked with other Villanova Students and Alumni.</p>
                            <p style={{ fontWeight: 'bold' }}>• Received a Certificate of Leadership.</p>
                        </div>

                        <div style={{
                            background: 'rgba(186, 217, 217, 0.4)',
                            padding: '20px',
                            borderRadius: '10px',
                            border: '2px solid rgba(51, 107, 135, 0.2)',
                        }}>
                            <h3 style={{ fontSize: '1.5em', marginBottom: '15px' }}>American Legion Boys State</h3>
                            <h4> <a href="https://aljbs.org/"> American Legion, New Jersey</a></h4>
                            <h5>June 2023</h5>
                            <p style={{ fontWeight: 'bold' }}>• Partook in realistic simulations of the NJ state government, roleplaying as different types of government officials.</p>
                            <p style={{ fontWeight: 'bold' }}>• Collaborated with other city members to achieve the title of best city.</p>
                            <p style={{ fontWeight: 'bold' }}>• Assisted in development of a manual illustrating what we learned.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfessionalDevelopment;
