import React from 'react';
import './Webdevelopment.css';

// Images
import Speed from '../Assets/icons/speed.png';
import Responsive from '../Assets/icons/responsive.png';
import Dynamic from '../Assets/icons/dynamic.png';
import { LangList } from './comps/LangList';


function Webdevelopment() {





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
              <img src={Responsive} alt="" />
            </div>
            <div className="about-bio">
              <h2>Who am I?</h2>
              <p>I'm a Junior Full-Stack Developer from Hungary. I have high passing for interactive dynamic websites</p>

            </div>
          </div>



          <div className="about-languages">

            <LangList />

          </div>

        </div>


      </section>


      <section className="webdev-projects">

      </section>

    </div>
  );
}






export default Webdevelopment;
