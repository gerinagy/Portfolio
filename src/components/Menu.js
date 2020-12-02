import React, { useState } from 'react';
import './Menu.css';




const Menu = () => {

  // let menuOpen = false;
  const [status, setStatus] = useState('open')

  // const menuClick = (e) => {
  //   const menuBtn = document.querySelector('.menu-btn');
  //   menuBtn.classList.toggle('open')
  //   setmenuOpen()
  // }

  const menuButton = () => {
    const menuBtn = document.querySelector('.menu-btn');
    const nav = document.querySelector('.nav-sidebar');
    // let menuOpen = false;

    menuBtn.addEventListener('click', () => {
      menuBtn.addclass.toggle('open');
      nav.className.toggle('nav-active')
    });
  };

  return (
    <div className="menu-btn" onClick={menuButton}>
      <div className="menu-btn_burger"></div>
    </div>
  )
}

export default Menu;
