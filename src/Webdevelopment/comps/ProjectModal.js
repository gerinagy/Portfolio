import React from 'react'
import { motion } from 'framer-motion';

const ProjectModal = ({ selectedProject, setSelectedProject }) => {

  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedProject(null);
    }
  }


  return (
    <motion.div className="backdrop" onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div className="project-modal" src={selectedProject.id} alt="project"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >

        <div className="project-modal-image">
          <img src={selectedProject} alt="" />


        </div>
        <div className="project-modal-description">
          <h1>{selectedProject}</h1>
          <p>{selectedProject.description}</p>

        </div>



      </motion.div>

    </motion.div>
  )
}

export default ProjectModal;
