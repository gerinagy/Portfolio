import React from 'react';
import { Link } from 'react-router-dom';
import './Kiteboarding.css';

// Images
import Eleveight from '../Assets/image/FS-LGrey.png'
import KitePhoto from '../Assets/image/instructor.jpg'


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




      <section className="card-block">
        <div className="kite-content">
          <div className="kite-text">
            <h3>Teaching</h3>
            <p>Kitelessons with brand new kites.
            <br />Feel free to contact about lessons and details. </p>
          </div>
          <div className="k-buttons">
            <Link to="/Contact">contact me</Link>
          </div>
        </div>

        <div className="kite-image">
          <img src={KitePhoto} alt="" />
        </div>
      </section>




      <section className="card-block">
        <div className="kite-image">
          <img src={Eleveight} alt="" />
          <h3>2021 FS</h3>
        </div>
        <div className="kite-content">
          <h3>Eleveight Kites</h3>
          <p>Kites. Boards. Equipments.
            <br />Check the website and contact me for prices.
          </p>
          <div className="k-buttons">
            <Link to="/Contact">contact me</Link>
            <a href="https://www.eleveightkites.com/kites" target="_blank" rel="noopener noreferrer">Website</a>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Kiteboarding;
