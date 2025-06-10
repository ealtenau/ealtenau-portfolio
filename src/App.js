// src/App.js
import React from 'react';
// import { Routes, Route } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import PortfolioSection from './PortfolioSection';
import ProjectDetail from './ProjectDetail';
import AboutSection from './AboutSection';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';
import HighlightSection from './HighlightSection';

function App() {
  return (
    <div className="app">
      <header>
        <h1>Elizabeth H. Altenau</h1>
        <h2>Geospatial Science • Remote Sensing • Hydrology</h2>
      </header>

      <Routes>
        <Route path="/" element={
          <>
            <AboutSection />
            <PortfolioSection />
            <HighlightSection />
          </>
        } />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
      </Routes>
      
      {/* <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
        </Routes>
      </Router> */}

      <footer className="footer" >
        <div style={{ marginBottom: '0.5rem' }}>
          <a href="https://github.com/ealtenau" className="icon" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#777' }}>
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/ealtenau/" className="icon" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#0077b5' }}>
            <FaLinkedin size={24} />
          </a>
          <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C34&q=Elizabeth+Altenau&oq=e" className="icon" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#333' }}>
            <SiGooglescholar size={24} />
          </a>
          <a href="mailto:elizabeth.altenau@gmail.com" className="icon" style={{ margin: '0 10px', color: '#777' }}>
            <FaEnvelope size={24} />
          </a>
        </div>
        <p>© 2025 Elizabeth Altenau</p>
      </footer>
    </div>
  );
}

export default App;


