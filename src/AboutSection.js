// AboutSection.js
import React from 'react';
import profileImg from './images/headshot.jpg'; // Add your photo to src/images/

function AboutSection() {
  return (
    <section className="about">
      <div className="about-content">
        <img src={profileImg} alt="Elizabeth Altenau" className="about-image" />
        <div className="about-text">
          <h2 className="about-title">ABOUT ME</h2>
          <p>
            Hi there! I love nature, design, and analytics. It’s only fitting I am passionate 
            about geospatial science which sits at the intersection of all these disciplines. 
            I have 10+ years of experience in collecting, managing, analyzing, and visualizing 
            spatial data for diverse applications in hydrology. Strong expertise in Python, R, QGIS, 
            and ESRI products. Driven by a passion for solving complex problems and delivering 
            user-friendly solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
