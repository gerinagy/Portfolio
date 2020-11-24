import React from 'react';
import './Kiteboarding.css';

function Kiteboarding() {
  return (
    <div>
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
          <p>Feel free to contact about Kitelessons and details.</p>
          <a name="Contact me." id="" class="btn btn-primary" href="#" role="button"></a>
        </div>

        <div className="k-kite-image"></div>

      </section>

      <section className="k-eleveight-wrapper">
        <div className="k-eleveight-imgtext">
          <div className="k-eleveight-image"></div>
          <h3>2020 FS</h3>
        </div>


        <div className="k-eleveight-text">

          <h3>Eleveight Kites</h3>
          <p>Kites. Boards. Other Equipments.
            <br></br>Check the website and contact me.
          </p>
          <div className="k-buttons">
            <a href="https://www.eleveightkites.com" target="_blank" rel="noopener noreferrer"><button>Visit website</button></a>

            <a href="https://www.eleveightkites.com" target="_blank" rel="noopener noreferrer"><button>contact me</button></a>
          </div>
        </div>



      </section>
    </div>
  )
}

export default Kiteboarding;
