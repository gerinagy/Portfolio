import React, { useState } from 'react';
import './Portfolio.css';

// Comps
import Title from './comps/Title';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import MyImageGrid from './comps/MyImageGrid';

function Portfolio() {
  const [selectedImg, setSelectedImg] = useState(null);


  return (
    <section className="portfolio-body">
      <div className="Portfolio" >
        <Title />
        <MyImageGrid setSelectedImg={setSelectedImg} />
        <ImageGrid setSelectedImg={setSelectedImg} />
        {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
      </div>
    </section>
  );
}

export default Portfolio;
