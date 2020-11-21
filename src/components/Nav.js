import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';



function Nav() {

  return (
    <>
      <nav className='nav'>
        <Link to="/" className='nav-link'>
          <h3 className='first-name'>Gergo </h3><h3 className='surname'>Nagy</h3>
        </Link>
        <ul>
          <Link to="/" className='nav-link'>
            <li>Home</li>
          </Link>
          <Link to="/Kiteboarding" className='nav-link'>
            <li>Kiteboarding</li>
          </Link>
          <Link to="/Webdewelopment" className='nav-link'>
            <li>Web Development</li>
          </Link>
          <Link to="/Portfolio" className='nav-link'>
            <li>Portfolio</li>
          </Link>
        </ul>
      </nav>
    </>

  );
}

export default Nav;
