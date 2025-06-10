// AboutSection.js
import React from 'react';

function AboutSection() {
  return (
    <section className="about">
      <div className="about-content">
        <img
          src={`${process.env.PUBLIC_URL}/images/headshot.jpg`}
          alt="Elizabeth Altenau"
          className="about-image"
        />
        <div className="about-text">
          <h2 className="about-title">ABOUT ME</h2>
          <p>
            Hi there! I'm passionate about geospatial science because it brings 
            together my love of nature, design, and analytics. With over 10 years 
            of experience in hydrology-focused projects, I specialize in collecting, 
            managing, analyzing, and visualizing spatial data to solve real-world problems.
            I have deep expertise in tools like Python, R, QGIS, and ESRI products, 
            and I enjoy building intuitive, user-friendly solutions that support 
            informed decision-making. Whether it's working with satellite imagery 
            or modeling complex river systems, I bring curiosity, creativity, and 
            technical skill to every project.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
