import About from './Components/About';
import Contact from './Components/Contact';
import BackIcon from './images/back.png';
import Skills from './Components/Skills';
import WorkExperience from './Components/WorkExperience';
import ProgrammingLanguages from './Components/SkillPages/ProgrammingLanguages';
import ProfessionalDevelopment from './Components/SkillPages/ProfessionalDevelopment';
import ToolsAndFrameworks from './Components/SkillPages/ToolsAndFrameworks';
import Languages from './Components/SkillPages/Languages';
import AldosPaneVino from './Components/WorkPages/AldosPaneVino';
import TrickyLeaf from './Components/WorkPages/Trickyleaf';
import Education from './Components/Education';
import ImageContainer from './images/HelpImage.jpeg';
import Projects from './Components/Projects';
import './App.css'; 
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
// Add your profile image here - replace 'profile.jpg' with your actual image filename
import profileImage from './images/profile.jpg';

function NavigationButtons() {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  if (!isHomePage) {
    return (
      <div className="back-container">
        <a className="back-link" onClick={() => navigate('/')}>
          <img 
            src={BackIcon} 
            alt="Back to Home" 
            className="back-icon"
          />
        </a>
      </div>
    );
  }

  return (
    <>
      <div className="component-button-1" onClick={() => navigate('/work-experience')}>
        <p>Work Experience</p>
      </div>
      <div className="component-button-2" onClick={() => navigate('/skills')}>
        <p>Skills</p>
      </div>
      <div className="component-button-3" onClick={() => navigate('/education')}>
        <p>Education</p>
      </div>
      <div className="component-button-4" onClick={() => navigate('/projects')}>
        <p>Projects</p>
      </div>
    </>
  );
}

// Layout for main section pages that include Contact
function MainPageLayout({ children }) {
  return (
    <>
      {children}
      <div className="contact-section">
        <Contact />
      </div>
    </>
  );
}

function MainContent() {
  return (
    <>
      <div className="contact-section">
        <Contact />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <div className="profile-section">
          <img 
            src={profileImage} 
            alt="Antonio Cascio"
            className="profile-image"
          />
          <div className="image-section">
            <img 
              src={ImageContainer} 
              alt="Antonio Cascio"
              className="image-container"
            />
          </div>
          <h1>Hello, I'm Antonio Cascio</h1>
        </div>
        <p style={{ margin: '2rem 0', textAlign: 'center' }}>Welcome to my personal website!</p>
        
        <div className="about-section">
          <About />
        </div>

        <NavigationButtons />

        <Routes>

          <Route path="/skills" element={<MainPageLayout><Skills /></MainPageLayout>} />
          <Route path="/skills/programming-languages" element={<ProgrammingLanguages />} />
          <Route path="/skills/professional-development" element={<ProfessionalDevelopment />} />
          <Route path="/skills/tools-and-frameworks" element={<ToolsAndFrameworks />} />
          <Route path="/skills/languages" element={<Languages />} />
          <Route path="/work-experience" element={<MainPageLayout><WorkExperience /></MainPageLayout>} />
          <Route path="/work-experience/aldos" element={<AldosPaneVino />} />
          <Route path="/work-experience/trickyleaf" element={<TrickyLeaf />} />
          <Route path="/education" element={<MainPageLayout><Education /></MainPageLayout>} />
          <Route path="/projects" element={<MainPageLayout><Projects /></MainPageLayout>} />
          <Route path="*" element={<MainContent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
