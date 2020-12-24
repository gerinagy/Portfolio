import React, { Component } from 'react'
// import { motion } from 'framer-motion';


class Projects extends Component {

  state = {
    title: this.props.title,
    description: this.props.description,
    image: this.props.image,
    skill: this.props.skill,

    isHovered: false
  }



  handleClick = () => {
    this.props.onProjectClick(this.state);
  }

  isHover = () => {
    this.setState(prevState => ({ isHovered: true }));
  }
  isNotHover = () => {
    this.setState({ isHovered: false });
  }

  render() {
    return (
      <div className="project-item"
        onMouseEnter={this.isHover} onMouseLeave={this.isNotHover}
      >
        <img src={this.props.image} alt="" />
        {this.state.isHovered ?
          <div style={{
            backgroundColor: "white", height: "100%", width: "100%", position: "absolute", top: "0",
            left: "0"
          }} >
            <h1>{this.props.title}
              <p>{this.props.skill}</p>
            </h1>

            <span onClick={this.handleClick}>More Details</span>
          </div> : null
        }
      </div>
    )
  }
}


export default Projects;
