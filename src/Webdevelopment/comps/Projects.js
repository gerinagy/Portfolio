import React from 'react'
import Project from './Project'

import ProjectsData from './projectsData.json';
// import { motion } from 'framer-motion';





export const Projects = (props) => {
  return (
    <div>

      <div className="project-items">
        <div className="project-item">
          <img src={`/ProjectsImg/${props.image}`} alt="" />
          <h1>{props.title}</h1>
        </div>
      </div>
    </div>
  )
}

