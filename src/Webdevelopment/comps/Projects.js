import React, { Component } from 'react'
// import { motion } from 'framer-motion';


class Projects extends Component {

  state = {
    title: this.props.title,
    description: this.props.description,
    image: this.props.image
  }



  handleClick = () => {
    this.props.onProjectClick(this.state);
  }

  render() {
    return (
      <div className="project-item" onClick={this.handleClick}>
        <img src={this.props.image} alt="" />
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}


export default Projects;
