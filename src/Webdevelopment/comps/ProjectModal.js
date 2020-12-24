import React, { Component } from 'react'
import { motion } from 'framer-motion';

class ProjectModal extends Component {

  render() {

    // const closing = () => {
    //   console.log("yes");
    // }

    // const asdasd = () => {
    //   console.log("asdasd")
    // }

    console.log(this.props.url)

    return (
      <motion.div className="backdrop2"
        show={this.props.show} onClick={this.props.modalClosed}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="project-modal"
        >
          <span className="close" onClick={this.props.modalClosed} />

          <div className="project-modal-image">
            <img src={this.props.Image} alt="" />
          </div>

          <div className="project-modal-description">
            <h2>{this.props.Title}</h2>

            <h3>{this.props.Skill}</h3>

            <div style={{ height: "1px", width: "100%", backgroundColor: "#333", margin: "20px 0", opacity: ".3" }} />

            <p>{this.props.Description}</p>

            <a href={this.props.Url} target="_blank" rel="noopener noreferrer">Visit Website</a>

          </div>

        </div>
      </motion.div>
    )
  }
}

export default ProjectModal;