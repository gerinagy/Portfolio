import React, { Component } from 'react';
import './Webdevelopment.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Images
import Speed from '../Assets/icons/speed.png';
import Responsive from '../Assets/icons/responsive.png';
import Dynamic from '../Assets/icons/dynamic.png';
import AboutProf from '../Assets/image/sunsetprof.jpg';

// Components
import { LangList } from './comps/LangList';
import Projects from './comps/Projects';
import Line from '../components/Line';
import ProjectModal from './comps/ProjectModal';


// Data
// import ProjectsData from './comps/projectsData.json';


class Webdevelopment extends Component {



  state = {
    projectList: [],
    checking: false,
    tempProd: 0,
    show: false
  }

  checkProjectHandler = (prod) => {
    this.setState({ tempProd: prod })
    this.setState({ checking: true })
    this.setState({ show: true })
  }

  cancelCheckingHandler = (e) => {
    if (e.target.classList.contains('backdrop2') || 
        e.target.classList.contains('close')) {
      this.setState({ checking: false });
    }
  }


  componentDidMount() {

    axios.get('/ProjectsData.json')
      .then(response => {
        this.setState({ projectList: Object.values(response.data) })
      })
  }



  render() {

    const projects = this.state.projectList.map((detail, index) => {

      return (
        <Projects key={detail.id}
          title={detail.title}
          skill={detail.skill}
          description={detail.description}
          image={detail.image}
          url={detail.url}
          github={detail.github}
          githuburl={detail.githuburl}
          onProjectClick={this.checkProjectHandler} />
      )
    });

    let modal = null;

    if (this.state.checking) {
      modal = 
      
          <ProjectModal
            show={this.state.checking}
            modalClosed={this.cancelCheckingHandler}
            Title={this.state.tempProd.title}
            Skill={this.state.tempProd.skill}
            Image={this.state.tempProd.image}
            Description={this.state.tempProd.description}
            Url={this.state.tempProd.url}
            Github={this.state.tempProd.github}
            GithubUrl={this.state.tempProd.githuburl}
          />
    }

    // A Junior full - stack web developer.

    return (
      <div className="webdev-body">
        <section className="webdev-hero">
          <div className="webdev-left">
            <h2>Hi, I'm 
            <br/> Gergo Nagy.</h2>
          </div>
          <div className="webdev-right">
            <h3>A Junior Full-stack web developer.</h3>
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

        <Line/>
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
                  <br /><Link to="/Contact" className="about-bio-link" > Let's create something special. </Link> </p>

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

              <div className="project-items">
                {projects}
              </div>

            </div>

          </div>

          {modal}
        </section>

        

      </div>
    );
  }
}






export default Webdevelopment;
