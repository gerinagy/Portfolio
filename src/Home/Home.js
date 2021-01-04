import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';


function Home() {


  return (
    <div>
      <div className="hero-content">
        
        <div className="heroimage"></div>
        <div className="block-wrapper">
          <div className="grid-wrapper-1">              
            <Link to="/Kiteboarding" className='block-link-1 block-link'>
              <span>Kiteboarding</span>
            </Link>
            <Link to="/Webdevelopment" className='block-link-2 block-link'>
              <span>Web Development</span>
            </Link>
          </div>
          <div className="grid-wrapper-2">   
            <Link to="/Portfolio" className='block-link-3 block-link'>
              <span>Portfolio</span>
            </Link>
          </div>
          </div>
      </div>
    </div>
  );
}

export default Home;
