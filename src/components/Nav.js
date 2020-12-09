import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import Burger from './Burger';



function Nav() {
  

  return (
    <>
      <nav className='nav'>

        <Burger />

        <Link to="/" className='logo-name' >
          <h3 className='first-name'>Gergo </h3><h3 className='surname'>Nagy</h3>
        </Link>
        
      </nav>
    </>

  );
}

export default Nav;
