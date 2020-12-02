import React from 'react';
import './Webdevelopment.css';

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

      <section className="webdev-about" id="about">

      </section>

      <section className="webdev-projects">

      </section>
    </div>
  );
}

export default Webdevelopment;
