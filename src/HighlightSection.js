import React from 'react';
import highlightImg from '/images/sword_explorer.png'; // Replace with your actual image

function HighlightSection() {
  return (
    <section className="highlight-section">
      <div className="highlight-content">
        <div className="highlight-text">
          <h2 className="highlight-title">HIGHLIGHT</h2>
          <p>
            Explore an in-depth interactive dashboard on the SWOT River Database (SWORD) 
            featured in the project section above. SWORD is used as the foundation for the 
            vector products produced by the Surface Water and Ocean Topography (SWOT) satellite 
            mission. You can explore the most up-to-date SWORD version, and report areas for 
            improving the database. The data is free to explore and download, go check it out!
          </p>
        </div>
        <div className="highlight-image">
          <a href="https://www.swordexplorer.com/" target="_blank" rel="noopener noreferrer">
            <img src={highlightImg} alt="Highlighted Project" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default HighlightSection;
