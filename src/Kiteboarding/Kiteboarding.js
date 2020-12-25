import React from 'react';
import './Kiteboarding.css';

function Kiteboarding() {
  return (
    <div className="kiteboarding-body">
      <section className="k-hero-wrapper">
        <div className="k-hero-image">
          <div className="k-hero-content">
            <h2>Eleveight Kites</h2>
            <h1>Kiteboarding</h1>
            <h3>Sport. Train. Fun.</h3>
          </div>

        </div>
      </section>

      <section className="k-teaching-wrapper">

        <div className="k-teaching-text">
          <h3>Teaching</h3>
          <p>Kitelessons with brand new kites.
          <br/>Feel free to contact about lessons and details. </p>
          
          <div className="k-buttons">
            <a href="https://www.eleveightkites.com" target="_blank" rel="noopener noreferrer"><span>contact me</span></a>
          </div>
        </div>

        <div className="k-kite-image"></div>

      </section>

      <section className="k-eleveight-wrapper">
        <div className="k-eleveight-imgtext">
          <div className="k-eleveight-image-wrapper">
            <div className="k-eleveight-image" />
          </div>
          <h3>2021 FS</h3>
        </div>


        <div className="k-eleveight-text">

          <h3>Eleveight Kites</h3>
          <p>Kites. Boards. Equipments.
            <br/>Check the website and contact me for prices.
          </p>
          <div className="k-buttons">
            <a href="https://www.eleveightkites.com/kites" target="_blank" rel="noopener noreferrer"><span>Visit website</span></a>

            <a href="https://www.eleveightkites.com" target="_blank" rel="noopener noreferrer"><span>contact me</span></a>
          </div>
        </div>




      </section>
    </div>
  )
}

export default Kiteboarding;
