import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';


const MyImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('myimages');

  return (
    <div className="portfolio-img-grid">
      { docs && docs.map(doc => (
        <motion.div className="portfolio-img-wrap" key={doc.id}
          layout
          whileHover={{ opacity: 0.7 }}
          onClick={() => setSelectedImg(doc.url)}>

          <motion.img src={doc.url} alt="uploaded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          />
        </motion.div>
      ))}
    </div>
  )
}

export default MyImageGrid;
