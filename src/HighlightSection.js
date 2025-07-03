import React from 'react';

function HighlightSection() {
  return (
    <section className="highlight-section">
      <div className="highlight-content">
        <div className="highlight-text">
          <h2 className="highlight-title">SPOTLIGHT</h2>
          <p>
            Explore an interactive dashboard on the SWOT River Database (SWORD) 
            featured in the project section above. SWORD is used as the foundation for the 
            river vector products produced by the Surface Water and Ocean Topography (SWOT) satellite 
            mission. You can browse the most up-to-date SWORD version and report areas for 
            improving the database. The data is free to download. Click the image to check it out!
          </p>
        </div>
        <div className="highlight-image">
          <a href="https://www.swordexplorer.com/" target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/images/sword_explorer.png`} alt="Highlighted Project" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default HighlightSection;
