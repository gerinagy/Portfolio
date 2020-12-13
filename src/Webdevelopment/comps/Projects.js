import React from 'react'

import ProjectsData from './projectsData.json';
import { motion } from 'framer-motion';




export const Projects = () => {
  return (
    <div>
      <div className="project-wrapper">
        <div className="project-filters">
          <h1>All</h1>
        </div>
        <div className="project-items">
          {ProjectsData.map((projectDetails, index) => {
            return (
              <>

                <div className="project-item">
                  <div>
                    <img src={`../../Assets/ProjectsImg/${projectDetails.image}`} />
                    <h1>{projectDetails.title}</h1>
                  </div>
                </div>


              </>

            )

          })}
        </div>
      </div>
    </div>
  )
}

