import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';
import UploadForm from './UploadForm';


const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images');


  return (
    <div>
      <h1 style={{ padding: "0 10px" }}>Share your moments with me. <UploadForm/></h1>
      <div className="portfolio-img-grid">
        { docs && docs.map(doc => (
          <motion.div className="portfolio-img-wrap" key={doc.id}
            layout
            whileHover={{opacity: 0.7}}
            onClick={() => setSelectedImg(doc.url)}
          >
            <motion.img src={doc.url} alt="uploaded"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            />
          </motion.div>
        )) }
      </div>
      <h1 style={{ textAlign: "center", padding: "40px" }} >You are welcomed here anytime.</h1>
    </div>
  )
}

export default ImageGrid;
