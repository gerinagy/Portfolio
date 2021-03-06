import React, { Component } from 'react'
import { motion } from 'framer-motion';


class ProjectModal extends Component {



  render() {

    return (
      <motion.div className="backdrop2"
        show={this.props.show} onClick={this.props.modalClosed}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}>
        <div className="project-modal">
          

          <div className="project-modal-image">
            <img src={this.props.Image} alt="" />
          </div>

          <div className="project-modal-description">
            <h2>{this.props.Title}</h2>
            <h3>{this.props.Skill} 
            <span className="close" onClick={this.props.modalClosed} />
            </h3>

            <div style={{ height: "1px", width: "100%", backgroundColor: "#333", margin: "20px 0", opacity: ".3" }} />

            <p>{this.props.Description} </p>
            <div className="button-web">
              <a href={this.props.Url} target="_blank" rel="noopener noreferrer" className="button-web-a">Visit Website</a>
              <a href={this.props.GithubUrl} target="_blank" rel="noopener noreferrer" className="github-code">{this.props.Github}</a>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }
}

export default ProjectModal;