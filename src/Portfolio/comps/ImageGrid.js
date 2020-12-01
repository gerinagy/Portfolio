import React from 'react';
import useFirestore from '../hooks/useFirestore';


const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images');
  console.log(docs);

  return (
    <div className="portfolio-img-grid">
      { docs && docs.map(doc => (
        <div className="portfolio-img-wrap" key={doc.id}
          onClick={() => setSelectedImg(doc.url)}
        >
          <img src={doc.url} alt="uploaded"/>
        </div>
      )) }
    </div>
  )
}

export default ImageGrid;
