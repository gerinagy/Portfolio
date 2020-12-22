import React, { Component } from 'react'
import Aux from './aux'
import { motion } from 'framer-motion';
import Backdrop from './Backdrop';



class ProjectModal extends Component {

  state = {
    description: true,
    review: false,
    info: false
  }

  showHandler = () => {
    this.setState({ show: !this.state.show })
  }



  // handleClick = (e) => {
  //   if (e.target.classList.contains('backdrop')) {
  //     this.setState({ this.props.modalClosed })
  //     // onClick = { this.props.modalClosed }
  //   }
  // }



  render() {
    return (
      <Aux>
        <motion.Backdrop
          show={this.props.show} onClick={this.props.modalClosed}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div className="project-modal"
            style={{ opacity: this.props.show ? '1' : '0' }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            <a href="#close" className="close" onClick={this.props.modalClosed} />

            <div className="project-modal-image">
              <img src={this.props.projectImage} alt="" />


            </div>
            <div className="project-modal-description">
              <h1>{this.props.projectTitle}</h1>
              <p>{this.props.projectDescription}</p>

            </div>



          </motion.div>

        </motion.Backdrop>
      </Aux>
    )
  }
}


export default ProjectModal;