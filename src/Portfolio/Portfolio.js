import React, { useState } from 'react';
import './Portfolio.css';

// Comps
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';

function Portfolio() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="Portfolio">
      <Title/>
      <UploadForm/>
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> }
    </div>
  );
}

export default Portfolio;
