import React from 'react';
import PreviewVideo from './PreviewVideo';
import githubLogo from '../images/Github.png';

function Projects() {
    return (
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
                Projects
            </h2>

            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                padding: window.innerWidth > 768 ? '40px' : '20px',
                border: '1px solid rgba(51, 107, 135, 0.2)',
                color: '#2F4858',
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: window.innerWidth > 768 ? 'row' : 'column',
                    gap: window.innerWidth > 768 ? '40px' : '20px',
                    alignItems: 'flex-start',
                }}>

                    <div style={{
                        flex: '1',
                        maxWidth: '600px',
                    }}>
                        <div style={{
                            borderRadius: '15px',
                            overflow: 'hidden',
                            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                            border: '1px solid rgba(51, 107, 135, 0.2)',
                        }}>
                            <PreviewVideo />

                        </div>
                    </div>

                    {/* Right Side - Project Description */}
                    <div style={{
                        flex: '1',
                        padding: '20px',
                    }}>
                        <h3 style={{
                            color: '#2F4858',
                            marginBottom: '20px',
                            fontSize: '2em',
                            fontWeight: 'bold',
                        }}>
                            KitchenKing Website
                        </h3>

                        <p style={{
                            color: '#617D8A',
                            marginBottom: '25px',
                            fontSize: '1.1em',
                            lineHeight: '1.6',
                        }}>
                            Built a recipe discovery and social cooking platform using React.js, Node.js/Express.js, SQLite, and Material-UI. Integrated Spoonacular API for recipe data and implemented JWT authentication for secure user sessions. Features include ingredient-based recipe search, social engagement system (likes, comments, ratings), real-time leaderboard, user favorites management, and responsive pagination. Demonstrates RESTful API design, database schema design, React hooks for state management, responsive CSS Grid/Flexbox layouts, and secure authentication. The platform helps users find recipes for available ingredients while fostering community engagement.
                        </p>

                        <div style={{
                            marginBottom: '25px',
                        }}>
                            <h4 style={{
                                color: '#2F4858',
                                marginBottom: '15px',
                                fontSize: '1.2em',
                                fontWeight: 'bold',
                            }}>
                                Technologies Used
                            </h4>
                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '10px',
                            }}>
                                <span style={{
                                    background: 'rgba(51, 107, 135, 0.2)',
                                    color: '#2F4858',
                                    padding: '8px 16px',
                                    borderRadius: '20px',
                                    fontSize: '0.9em',
                                    fontWeight: '500',
                                }}>
                                    React
                                </span>
                                <span style={{
                                    background: 'rgba(51, 107, 135, 0.2)',
                                    color: '#2F4858',
                                    padding: '8px 16px',
                                    borderRadius: '20px',
                                    fontSize: '0.9em',
                                    fontWeight: '500',
                                }}>
                                    JavaScript
                                </span>
                                <span style={{
                                    background: 'rgba(51, 107, 135, 0.2)',
                                    color: '#2F4858',
                                    padding: '8px 16px',
                                    borderRadius: '20px',
                                    fontSize: '0.9em',
                                    fontWeight: '500',
                                }}>
                                    Material-UI
                                </span>
                                <span style={{
                                    background: 'rgba(51, 107, 135, 0.2)',
                                    color: '#2F4858',
                                    padding: '8px 16px',
                                    borderRadius: '20px',
                                    fontSize: '0.9em',
                                    fontWeight: '500',
                                }}>
                                    Spoonacular API
                                </span>
                                <span style={{
                                    background: 'rgba(51, 107, 135, 0.2)',
                                    color: '#2F4858',
                                    padding: '8px 16px',
                                    borderRadius: '20px',
                                    fontSize: '0.9em',
                                    fontWeight: '500',
                                }}>
                                    SQLite
                                </span>
                                <span style={{
                                    background: 'rgba(51, 107, 135, 0.2)',
                                    color: '#2F4858',
                                    padding: '8px 16px',
                                    borderRadius: '20px',
                                    fontSize: '0.9em',
                                    fontWeight: '500',
                                }}>
                                    JWT authentication
                                </span>
                            </div>
                        </div>

                        <button style={{
                            background: 'rgba(0, 170, 255, 0.2)',
                            color: 'black',
                            border: 'blacks',
                            padding: '12px 24px',
                            borderRadius: '8px',
                            fontSize: '1em',
                            fontWeight: '500',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            transition: 'all 0.3s ease',
                            marginTop: '20px',
                            '&:hover': {
                                background: 'rgba(1, 35, 52, 0.8)',
                                color: 'white',
                            },
                        }}
                        onClick={() => window.open('https://github.com/Antonio-Cascio/KitchenKing', '_blank')}
                        >
                            <img src={githubLogo} alt="GitHub Logo" style={{ width: '20px', height: '20px', marginRight: '8px' }} />
                            <span> View Project on GitHub </span>
                        </button>
                    </div>
                </div>
            </div>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                padding: '40px',
                border: '1px solid rgba(51, 107, 135, 0.2)',
                color: '#2F4858',
                textAlign: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '30px',

            }}>
                <h3 style={{ fontSize: '2em', marginBottom: '20px', color: '#2F4858' }}>More Projects Coming Soon!</h3>
                <p style={{ fontSize: '1.1em', opacity: 0.9, color: '#617D8A' }}>I am constantly working on new projects and learning new technologies. Check back soon to see what I am working on!</p>
            </div>
        </div>
    );
}

export default Projects;
