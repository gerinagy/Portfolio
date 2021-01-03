import React, { Component } from 'react'
import { motion } from 'framer-motion';


class Projects extends Component {

  state = {
    title: this.props.title,
    description: this.props.description,
    image: this.props.image,
    skill: this.props.skill,
    url: this.props.url,
    github: this.props.github,
    githuburl: this.props.githuburl,

    isHovered: false
  }



  handleClick = () => {
    this.props.onProjectClick(this.state);
  }

  isHover = () => {
    this.setState({ isHovered: true });
  }
  isNotHover = () => {
    this.setState({ isHovered: false });
  }

  render() {
    
    return (
      <motion.div className="project-item"
        onMouseLeave={this.isNotHover} onMouseOver={this.isHover}
        initial={{ scale: 0}}
        animate= {{scale: 1}}
        transition={{ duration: 1 }}
        
      >
        <img src={this.props.image} alt="" />
        {this.state.isHovered ?
          <div className="project-hover" >
            <h1>{this.props.title}
              <p className="project-hover-p">{this.props.skill}</p>
            </h1>

            <span onClick={this.handleClick}>More Details</span>
          </div> : null
        }
      </motion.div>
    )
  }
}


export default Projects;



// style = {{
//   backgroundColor: "white", height: "100%", width: "100%", position: "absolute", top: "0",
//     left: "0"
// }} 