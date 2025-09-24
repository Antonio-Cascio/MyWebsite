import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Skills from './Components/Skills';
import WorkExperience from './Components/WorkExperience';
import ProgrammingLanguages from './Components/SkillPages/ProgrammingLanguages';
import ProfessionalDevelopment from './Components/SkillPages/ProfessionalDevelopment';
import ToolsAndFrameworks from './Components/SkillPages/ToolsAndFrameworks';
import Languages from './Components/SkillPages/Languages';
import AldosPaneVino from './Components/WorkPages/AldosPaneVino';
import TrickyLeaf from './Components/WorkPages/Trickyleaf';
import Education from './Components/Education';
import Projects from './Components/Projects';
import BackIcon from './images/back.png';
import profileImage from './images/profile.jpg';
import emailLogo from './images/Gmail.png';
import helpImage from './images/HelpImage.jpeg';
import phoneLogo from './images/Phone.png';
import linkedinLogo from './images/Linked.webp';
import resumeLogo from './images/Resume.png';
import githubLogo from './images/Github.png';
import resume from './images/CasResume.pdf';
import ModalPortal from './Components/ModalPortal';
import './App.css';

function HomeContent() {
    const [isModalOpen, setIsModalOpen] = useState(false);


    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resume;
        link.download = 'Antonio-Cascio-Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setIsModalOpen(false);
    };

    return (
        <div className="home-container">
            <div className="main-content-wrapper">
                {/* Hero Section */}
                <div >
                    <div className="profile-section">
                        <div className="profile-image-container">
                            <img
                                src={profileImage}
                                alt="Antonio Cascio"
                                className="profile-image"
                            />
                        </div>

                        <div className="profile-info">
                            <h1 className="profile-name">Antonio Cascio</h1>
                            <p className="profile-title">Computer Science Student at Villanova University</p>
                            <p className="profile-description">
                Passionate about software development and always seeking new opportunities.
                I'm a student from Wyckoff, NJ, currently pursuing a Bachelor's degree in Computer Science.
                            </p>
                        </div>

                        <div className="personality-image-container">
                            <img
                                src={helpImage}
                                alt="Antonio helping others"
                                className="personality-image"
                            />
                            <div className="image-caption">Forza Milan ❤️🖤</div>
                        </div>
                    </div>


                    {/* Navigation Buttons */}
                    <div className="navigation-section" style={{ marginTop: '40px', marginBottom: '40px' }}>
                        <div style={{ fontSize: '1.5em', fontWeight: 'bold', color: '#2F4858', marginBottom: '20px' }}>Explore My Website 🌐 </div>
                        <div className="nav-grid">
                            <button
                                className="nav-button"
                                onClick={() => window.location.href = '/work-experience'}
                            >
                Work Experience 💼
                            </button>

                            <button
                                className="nav-button"
                                onClick={() => window.location.href = '/skills'}
                            >
                Skills 💻
                            </button>

                            <button
                                className="nav-button"
                                onClick={() => window.location.href = '/education'}
                            >
                Education 🎓
                            </button>

                            <button
                                className="nav-button"
                                onClick={() => window.location.href = '/projects'}
                            >
                Projects 🚀
                            </button>
                        </div>
                    </div>
                    {/* Contact Links */}
                    <div className="contact-section">
                        <div style={{ fontSize: '1.5em', fontWeight: 'bold', color: '#2F4858' }}>Contact Me 📞</div>

                        <div className="contact-links">
                            <a
                                href="mailto:antoniocascio06@gmail.com"
                                className="contact-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={emailLogo} alt="Email" className="contact-icon" />
                                <span>Email</span>
                            </a>

                            <a
                                href="tel:201-466-7272"
                                className="contact-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={phoneLogo} alt="Phone" className="contact-icon" />
                                <span>Phone</span>
                            </a>

                            <a
                                href="https://linkedin.com/in/antonio-cascio-4713a6327"
                                className="contact-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={linkedinLogo} alt="LinkedIn" className="contact-icon" />
                                <span>LinkedIn</span>
                            </a>

                            <button
                                className="contact-link"
                                onClick={() => setIsModalOpen(true)}
                            >
                                <img src={resumeLogo} alt="Resume" className="contact-icon" />
                                <span>Resume</span>
                            </button>

                            <a
                                href="https://github.com/Antonio-Cascio"
                                className="contact-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={githubLogo} alt="GitHub" className="contact-icon" />
                                <span>GitHub</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Resume Modal */}
            <ModalPortal>
                {isModalOpen && (
                    <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
                        <div className="modal-content" onClick={e => e.stopPropagation()}>
                            <button className="modal-close" onClick={() => setIsModalOpen(false)}>×</button>
                            <iframe
                                src={resume}
                                title="Resume Preview"
                                width="100%"
                                height="500px"
                            />
                            <div className="modal-actions">
                                <button className="modal-button download" onClick={handleDownload}>
                  Download Resume
                                </button>
                                <button className="modal-button cancel" onClick={() => setIsModalOpen(false)}>
                  Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </ModalPortal>
        </div>
    );
}

function NavigationButtons() {
    const navigate = useNavigate();
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resume;
        link.download = 'Antonio-Cascio-Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setIsModalOpen(false);
    };

    if (!isHomePage) {
        return (
            <>
                <div className="real-nav-bar-custom">
                    <div className="nav-name">Antonio Cascio</div>
                    <div className="social-links">
                        <a
                            href="mailto:antoniocascio06@gmail.com"
                            className="social-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={emailLogo} alt="Email" className="social-icon" />
                        </a>
                        <a
                            href="tel:201-466-7272"
                            className="social-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={phoneLogo} alt="Phone" className="social-icon" />
                        </a>
                        <a
                            href="https://linkedin.com/in/antonio-cascio-4713a6327"
                            className="social-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={linkedinLogo} alt="LinkedIn" className="social-icon" />
                        </a>
                        <button
                            className="social-link"
                            onClick={() => setIsModalOpen(true)}
                        >
                            <img src={resumeLogo} alt="Resume" className="social-icon" />
                        </button>
                        <a
                            href="https://github.com/Antonio-Cascio"
                            className="social-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={githubLogo} alt="GitHub" className="social-icon" />
                        </a>
                    </div>
                    <div className="back-container" onClick={() => navigate(-1)}>
                        <img src={BackIcon} alt="Back to Home" className="back-icon" />
                    </div>
                </div>

                {/* Resume Modal for Navigation Bar */}
                <ModalPortal>
                    {isModalOpen && (
                        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
                            <div className="modal-content" onClick={e => e.stopPropagation()}>
                                <button className="modal-close" onClick={() => setIsModalOpen(false)}>×</button>
                                <iframe
                                    src={resume}
                                    title="Resume Preview"
                                    width="100%"
                                    height="500px"
                                />
                                <div className="modal-actions">
                                    <button className="modal-button download" onClick={handleDownload}>
                    Download Resume
                                    </button>
                                    <button className="modal-button cancel" onClick={() => setIsModalOpen(false)}>
                    Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </ModalPortal>
            </>
        );
    }

    return null;
}

function App() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div className="App">
            {!isHomePage && <NavigationButtons />}
            <div className={!isHomePage ? 'main-content-with-nav' : ''}>
                <Routes>
                    <Route path="/" element={<HomeContent />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/skills/programming-languages" element={<ProgrammingLanguages />} />
                    <Route path="/skills/professional-development" element={<ProfessionalDevelopment />} />
                    <Route path="/skills/tools-and-frameworks" element={<ToolsAndFrameworks />} />
                    <Route path="/skills/languages" element={<Languages />} />
                    <Route path="/work-experience" element={<WorkExperience />} />
                    <Route path="/work-experience/aldos" element={<AldosPaneVino />} />
                    <Route path="/work-experience/trickyleaf" element={<TrickyLeaf />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            </div>
        </div>
    );
}

// Wrap App with Router
function AppWrapper() {
    return (
        <Router>
            <App />
        </Router>
    );
}

export default AppWrapper;

