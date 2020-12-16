import React from 'react'

import ProjectsData from './projectsData.json';
// import { motion } from 'framer-motion';





export const Projects = ({ setSelectedProject }) => {
  return (
    <div>
      <div className="project-wrapper">
        <div className="project-filters">
          <h1>All</h1>
        </div>
        <div className="project-items">
          {ProjectsData && ProjectsData.map((projectDetails, key) => (
              <>

              <div className="project-item" key={projectDetails.id} onClick={() => setSelectedProject(`/ProjectsImg/${projectDetails.image}`)}>
                  <div>
                    <img src={`/ProjectsImg/${projectDetails.image}`} alt=""/>
                    <h1>{projectDetails.title}</h1>
                  </div>
                </div>


              </>

            )

          )}
        </div>
      </div>
    </div>
  )
}

