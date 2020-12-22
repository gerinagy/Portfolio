import React, { Component } from 'react';
import './Webdevelopment.css';
import axios from 'axios';

// Images
import Speed from '../Assets/icons/speed.png';
import Responsive from '../Assets/icons/responsive.png';
import Dynamic from '../Assets/icons/dynamic.png';
import AboutProf from '../Assets/image/sunsetprof.jpg';

// Components
import { LangList } from './comps/LangList';
import { Projects } from './comps/Projects';
import Line from '../components/Line';
// import ProjectModal from './comps/ProjectModal';

// Data
// import ProjectsData from './comps/projectsData.json';


class Webdevelopment extends Component {



  state = {
    projectList: [],
    showProjects: null
  };

  // const projectModalHandler = () => {

  // }

  componentDidMount() {

    axios.get('/ProjectsData.json')
      .then(response => {
        console.log(Object.values(response.data));

        this.setState({ projectList: Object.values(response.data) })
      })
  }





  render() {

    const projects = this.state.projectList.map(detail => {
      return <Projects key={detail.id} title={detail.title} image={detail.image}/>
    });


    // if ( this.state.showProjects)  {
    //   project = <Projects 
    //     title={projectDetails.title}
    //     image={projectDetails.image}
    //     key={projectDetails.id}/>
    // }

    return (
      <div>
        <section className="webdev-hero">
          <div className="webdev-content">
            <div className="first-row">
              <h1>Hello, I'm </h1>
              <h1 className="webdev-hero-name"> Gergo Nagy.</h1>
            </div>
            <h1>I'm a Junior full-stack web developer.</h1>
            <a href="#about"><h3>View my work</h3> <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
          </div>
        </section>


        <section className="webdev-about" id="about" >
          <div className="about-title">
            <h2>About</h2>
          </div>
          <Line />
          <div className="skills-wrapper">
            <div className="skill-info-wrapper">
              <div className="skill-image">
                <img src={Speed} alt="" />
              </div>
              <h2>Fast</h2>
              <p>Scaled on fast load times and a great user experience.</p>
            </div>


            <div className="skill-info-wrapper">
              <div className="skill-image">
                <img src={Responsive} alt="" />
              </div>
              <h2>Responsive</h2>
              <p>Scaled on fast load times and a great user experience.</p>
            </div>

            <div className="skill-info-wrapper">
              <div className="skill-image">
                <img src={Dynamic} alt="" />
              </div>
              <h2>Dynamic</h2>
              <p>Scaled on fast load times and a great user experience.</p>
            </div>
          </div>


          <div className="about-content-wrapper">

            <div className="about-info-wrapper">
              <div className="about-img-holder">
                <img src={AboutProf} alt="" />
              </div>
              <div className="about-bio">
                <h2>Who am I?</h2>
                <p>I'm a Junior Full-Stack Developer from Hungary.
                <br />I have a high passion to create interactive dynamic websites.  As well as with great functions and solid Back-End.
                <br />
                  <br /><a href=""> Let's create something special. </a> </p>

              </div>
            </div>

            <div className="about-languages">
              <LangList />
            </div>

          </div>

        </section>


        <section className="webdev-projects">
          <div className="about-title">
            <h2>Projects</h2>
          </div>
          <Line />
          <div className="project-wrapper">
            <div className="project-filters">
              <h1>All</h1>
              {projects}
            </div>

          </div>


        </section>

      </div>
    );
  }
}






export default Webdevelopment;
