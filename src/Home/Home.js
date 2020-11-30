import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';


function Home() {
  const blockHover = document.querySelectorAll('.block-link');

    // blockHover ('mouseover', () => {
    //   blockHover.addClassName('block-active');
    // })

  // blockHover.addEventListener('mouseover', () => { blockHover.classList.add('.block-active') });
  console.log(blockHover)


  return (
    <div>
      <div className="hero-content">
        
        <div className="heroimage"></div>
        <div className="block-wrapper">
          <div className="grid-wrapper-1">              
            <Link to="/Kiteboarding" className='block-link-1 block-link'>
              <li>Kiteboarding</li>
            </Link>
            <Link to="/Webdevelopment" className='block-link-2 block-link'>
              <li>Web Development</li>
            </Link>
          </div>
          <div className="grid-wrapper-2">   
            <Link to="/Portfolio" className='block-link-3 block-link'>
              <li>Portfolio</li>
            </Link>
          </div>
          </div>
      </div>
    </div>
  );
}

export default Home;
