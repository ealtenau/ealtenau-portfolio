// ProjectDetail.js
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const projectData = {
  "sword": {
    title: "SWOT River Database (SWORD): A Global River Database for Satellite Data",
    description: "The Surface Water and Ocean Topography (SWOT) satellite mission, which launched in 2022, provides unprecedented observations of river water surface elevation (WSE), width, and slope for global rivers. For practical application of SWOT vector products, a global prior database of river networks and reaches is required. The SWOT River Database (SWORD) was first released in 2021 and is the foundation for the SWOT river single-pass vector products. SWORD was produced by combining seven different global databases to create one congruent hydrography database that incorporates over 45 hydrologic and SWOT-relevant variables including topology. SWORD has three different spatial resolutions: The centerline resolution at ~30 m point spacing, the node resolution at ~200 m point spacing, and the reach resolution at ~10 km polyline spacing on average.",
    link: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2021WR030054",
    linkText: "Read the full publication in Water Resources Research",
    subtitle: "Project Highlights",
    content: [
        {
            // image: require('/images/sword-1.jpg'),
            image: '/images/sword-1.jpg',
            caption: "Datasets used in SWORD development."
        },
        {
            image: '/images/sword-2.jpg',
            caption: "Corrections to the original SWORD centerlines which are derived from the Global Widths from Landsat (GRWL) database."
        },
        {
            image: '/images/sword-3.png',
            caption: "Merged attributes from the various auxillary datasets onto the SWORD cenerlines in the Mississippi Basin."
        },
        {
            image: '/images/sword-4.png',
            caption: "Schematic of the logic used for reach definition in SWORD."
        },
        {
            image: '/images/sword-5.jpg',
            caption: "Example of SWORD reaches in the upper Mississippi Basin."
        },
        {
            image: '/images/sword-6.jpg',
            caption: "SWORD Reach ID, Node ID, and topological structure."
        },
        {
            image: '/images/sword-7.png',
            caption: "SWORD reach numbers per continent and derived distance from outlet."
        },
        {
            image: '/images/sword-8.png',
            caption: "Topology validation using a modified lumped routing code."
        },
    ],
  },
  "airswot": {
    title: "Airborne IfSAR (AirSWOT) Water Surface Elevation Validation",
    description: "In this project I analyzed new measurements of river WSE and slope from AirSWOT, an airborne analogue to the Surface Water and Ocean Topography (SWOT) mission aimed at addressing limitations in current remotely sensed observations of surface water. To evaluate its capabilities, I compared AirSWOT WSEs and slopes to in situ measurements along the Tanana River, Alaska. Root-mean-square error is 9.0 cm for WSEs averaged over 1 km2 areas and 1.0 cm/km for slopes along 10 km reaches. Results indicate that AirSWOT can accurately reproduce the spatial variations in slope critical for characterizing reach-scale hydraulics. AirSWOT's high-precision measurements are valuable for hydrologic analysis, flood modeling studies, and for validating future SWOT measurements.",
    link1: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2016GL071577",
    link2: "https://www.sciencedirect.com/science/article/pii/S0034425719300495?casa_token=S9NeMavbVOsAAAAA:IL05pCTyw56yN_ifmm46kGA19evcgO_Z876XSq0lajyQEVxB_Rp3C0d2Rw6OaHrEUgta2Q",
    linkText1: "Geophysical Research Letters",
    linkText2: "Remote Sensing of Environment",
    subtitle: "Project Highlights",
    content: [
        {
            image: '/images/airswot-1.jpg',
            caption: "AirSWOT extent and field data collection."
        },
        {
            image: '/images/airswot-2.jpg',
            caption: "Binary water mask creation from color infrared imagery."
        },
        {
            image: '/images/airswot-3.jpg',
            caption: "AirSWOT data filtering."
        },
        {
            image: '/images/airswot-4.jpg',
            caption: "AirSWOT data aggregation onto GPS profile."
        },
        {
            image: '/images/airswot-5.jpg',
            caption: "Along profile comparisons of water surface elevation between AirSWOT and GPS measurements."
        },
        {
            image: '/images/airswot-6.jpg',
            caption: "Along profile comparisons of slope between AirSWOT and GPS measurements."
        },
    ],
  },
  "modeling": {
    title: "Hydrodynamic Modeling in Complex Rivers",
    description: "For this project, I tested a simple, raster-based model's capabilities to simulate 2-D, in-channel patterns of WSE and inundation extent along a ~90 km stretch of the Tanana River, AK. I compared finer resolution (≤25 m) 2-D models to four other models of lower dimensionality and coarser resolution (100–500 m) to determine the effects of simplifying process representation. Results indicate that simple, raster-based models can accurately simulate 2-D, in-channel hydraulics in the Tanana. Also, the fine-resolution, 2-D models produce lower errors in spatiotemporal outputs of WSE and inundation extent compared to coarse-resolution, 1-D models. Incorporating the anabranching channel network using subgrid representations for smaller channels is important for simulating accurate hydraulics and lowers RMSE in spatially distributed WSE by at least 16%. As a result, better representation of the converging and diverging multichannel network by using subgrid solvers or downscaling techniques in multichannel rivers is encouraged to improve errors in regional to global-scale models.",
    link: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2016WR019396",
    linkText: "Read the full publication in Water Resources Research",
    subtitle: "Project Highlights",
    content: [
        {
            image: '/images/modeling-1.jpg',
            caption: "Model structure."
        },
        {
            image: '/images/modeling-2.jpg',
            caption: "Field collection of GPS surveys and pressure transducer data."
        },
        {
            image: '/images/modeling-3.jpg',
            caption: "Custom interpolation of river bathymetry."
        },
        {
            image: '/images/modeling-4.jpg',
            caption: "Bathymetry correction of submerged river bars and islands."
        },
        {
            image: '/images/modeling-5.jpg',
            caption: "Spatial results of model water surface elevation and associated errors."
        },
        {
            image: '/images/modeling-6.jpg',
            caption: "Temporal results of model water surface elevation and associated errors."
        },
    ],
  },
};


function ProjectDetail() {
  const { projectId } = useParams();
  const project = projectData[projectId];
  const [selectedImage, setSelectedImage] = useState(null);

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <div className="project-detail" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h2>{project.title}</h2>
      
      {/* {project.link && (
        <p style={{ margin: '0.5rem 0 1rem' }}>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#3498db',
              fontWeight: 'bold',
              textDecoration: 'none'
            }}
          >
            {project.linkText || 'View Full Project Site'}
          </a>
        </p>
      )} */}

      {project.link1 && project.link2 ? (
        <p style={{ margin: '0.5rem 0 1rem', color: '#3498db', fontWeight: 'bold' }}>
            Read the full publications in{' '}
            <a
            href={project.link1}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#3498db', fontWeight: 'bold' }}
            >
            {project.linkText1}
            </a>{' '}
            and{' '}
            <a
            href={project.link2}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#3498db', fontWeight: 'bold' }}
            >
            {project.linkText2}
            </a>.
        </p>
        ) : project.link && (
        <p style={{ margin: '0.5rem 0 1rem' }}>
            <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
                color: '#3498db',
                fontWeight: 'bold',
                textDecoration: 'none'
            }}
            >
            {project.linkText || 'View Full Project Site'}
            </a>
        </p>
        )}
      
      <p style={{ marginBottom: '1.5rem', color: '#555' }}>{project.description}</p>

      <h3>{project.subtitle}</h3>
      
        <div style={{ columnCount: 2, columnGap: '1.5rem' }}>
            {project.content.map((item, idx) => (
                <div key={idx} style={{ breakInside: 'avoid', marginBottom: '1.5rem' }}>
                <img
                    src={item.image}
                    alt={item.caption}
                    onClick={() => setSelectedImage(item.image)}
                    style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '4px',
                    display: 'block',
                    cursor: 'pointer'
                    }}
                />
                <p style={{ marginTop: '0.5rem', fontStyle: 'italic' }}>{item.caption}</p>
                </div>
            ))}
            </div>


        {/* Fullscreen Modal */}
        {selectedImage && (
            <div
            onClick={() => setSelectedImage(null)}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'rgba(0,0,0,0.8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1000,
            }}
            >
            <img
                src={selectedImage}
                alt="Full size"
                style={{
                maxWidth: '90%',
                maxHeight: '90%',
                borderRadius: '8px',
                boxShadow: '0 0 10px rgba(0,0,0,0.5)',
                }}
            />
            </div>
        )}

    
      <Link to="/" style={{ display: 'block', marginTop: '2rem', color: '#3498db' }}>← Back to Main Page</Link>
    </div>
  );
}


export default ProjectDetail;
