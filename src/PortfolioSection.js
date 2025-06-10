import React from 'react';
import { Link } from 'react-router-dom';
// Import images directly from src/images/
import modelImg from '/images/model_img.png';
import swordImg from '/images/sword_fig.png';
import airswotImg from '/images/airswot_img.jpg';

const projects = [
  {
    id: "sword",
    title: "A Global River Database for Satellite Data",
    description: "Project encompasses developing, improving, and maintaining the SWOT River Database (SWORD). SWORD is the foundation for the SWOT river vector products.",
    image: swordImg,  // Use imported image variable here
    // link: "#",
  },
  {
    id: "airswot",
    title: "Airborne IfSAR Water Surface Elevation Validation",
    description: "Project involves processing and validating novel airborne IfSAR measurements from AirSWOT - a precursor to the Surface Water and Ocean Topography (SWOT) Satellite Mission.",
    image: airswotImg,
    // link: "#",
  },
  {
    id: "modeling",
    title: "Hydrodynamic Modeling in Complex Rivers",
    description: "Project looks at how model resolution and dimensionality impacts surface water hydraulics in an anabranching river.",
    image: modelImg,
    // link: "#",
  },
];

// function PortfolioSection() {
//   return (
//     <section className="portfolio">
//       <h2 className="portfolio-title">FEATURED WORK</h2>
//       <div className="portfolio"></div>
//       {projects.map((project, idx) => (
//         <div className="card" key={idx}>
//           <h3>{project.title}</h3>
//           {/* Display the imported image */}
//           <img src={project.image} alt={project.title} className="project-image" />
//           <p>{project.description}</p>
//           <Link to={`/project/${project.id}`}>View Details</Link>
//         </div>
//       ))}
//     </section>
//   );
// }

function PortfolioSection() {
  return (
    <section className="portfolio-section">
      <h2 className="portfolio-title">FEATURED WORK</h2>
      <div className="portfolio-cards">
        {projects.map((project, idx) => (
          <div className="card" key={idx}>
            <h3>{project.title}</h3>
            <img src={project.image} alt={project.title} className="project-image" />
            <p>{project.description}</p>
            <Link to={`/project/${project.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PortfolioSection;
