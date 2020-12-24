import React, { Component } from 'react'
import { motion } from 'framer-motion';


class Projects extends Component {

  state = {
    title: this.props.title,
    description: this.props.description,
    image: this.props.image,
    skill: this.props.skill,
    url: this.props.url,
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
      <motion.div className="project-item"
        onMouseEnter={this.isHover} onMouseLeave={this.isNotHover}
        initial={{ scale: 0}}
        animate= {{scale: 1}}
        transition={{ duration: 1 }}
        
      >
        <img src={this.props.image} alt="" />
        {this.state.isHovered ?
          <div className="project-hover" >
            <h1>{this.props.title}
              <p>{this.props.skill}</p>
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