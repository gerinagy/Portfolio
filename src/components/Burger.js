import React, { useState } from 'react';
import './Burger.css';
import { Link } from 'react-router-dom';







const Burger = () => {

  const [open, setOpen] = useState(false)

  const menuButton = () => {
    const menuBtn = document.querySelector('.menu-btn');
    const nav = document.querySelector('.nav-sidebar');
    menuBtn.classList.toggle('open');
    nav.classList.toggle('nav-active')
    setOpen(true)
  };




  return (
    <div>
      <div className="menu-btn"  onClick={menuButton} >
        <div className="menu-btn_burger"></div>
      </div>
     
      <aside className="nav-sidebar">
        <ul>
          <li><Link to="/" className="menulinks">Home</Link></li>
          <li>Kiteboarding</li>
          <li>Web Development</li>
          <li>Portfolio</li>

        </ul>
        <div className="profile">
          <div className="profile-wrapper">
            <div className="profilePic">
              <img src="./image/captain.JPG" alt="" />
            </div>

            <div className="profileBio">
              <h1>Hi!</h1>
              <p>Welcome to my Portfolio! This Website briefly explain what am I doing. Please take your time and scroll around.</p>

            </div>

            <div className="contactinfo">
              <h1>Contact</h1>

              <li><a className="profil-email" href="mailto:nagy.gergi6@gmail.com">nagy.gergi6@gmail.com</a></li>

              <li><a to="https://api.whatsapp.com/send?phone=+36%2030%204764%20552" target="_blank"><i className="fa fa-whatsapp" aria-hidden="hidden"></i> +36 30 4764 552</a></li>

              <div className="profil-social">



              </div>
            </div>

          </div>
        </div>
      </aside>
    </div>
  )
}

export default Burger;
