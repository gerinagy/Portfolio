import React from 'react';
import './Portfolio.css';

// Comps
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';

function Portfolio() {
  return (
    <div className="Portfolio">
      <Title/>
      <UploadForm/>
    </div>
  );
}

export default Portfolio;
