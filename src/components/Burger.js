import React, { useState } from 'react';
import './Burger.css';
import { Link } from 'react-router-dom';
import Profpic from '../Assets/image/captain.jpg';



const Burger = () => {


  const [open, setOpen] = useState(false)


  const handleClick = (e) => {
    if (e.target.classList.contains('side-backdrop')) {
      setOpen(false);
    }
  }

  const onLinkHandle = () => {
    setOpen(false)
  }

  return (
    <div>
      <div className={open ? "menu-btn open" : "menu-btn"}
        onClick={() => setOpen(!open)} >
        <div className="menu-btn_burger"></div>
      </div>
      <div className={open ? "side-backdrop active" : "side-backdrop"} onClick={handleClick}></div>
      <aside className={open ? "nav-sidebar active" : "nav-sidebar"}>
        <div className="sidebar-wrapper">
          <ul>
            <li onClick={onLinkHandle}><Link to="/" className="menulinks">Home</Link></li>
            <li onClick={onLinkHandle}><Link to="/Kiteboarding" className="menulinks">Kiteboarding</Link></li>
            <li onClick={onLinkHandle}><Link to="/Webdevelopment" className="menulinks">Web Development</Link></li>
            <li onClick={onLinkHandle}><Link to="/Portfolio" className="menulinks">Portfolio</Link></li>
            <li onClick={onLinkHandle}><Link to="/Contact" className="menulinks">Contact</Link></li>

          </ul>
          <div className="profile">
            <div className="profile-wrapper">
              <div className="profilePic">
                <img src={Profpic} alt="" />
              </div>

              <div className="profileBio">
                <h1>Hi !</h1>
                <p>Welcome to my Portfolio! This Website briefly present what I'm doing. You can find details about Kiteboarding, Webdevelopment and watch my photos.</p>

              </div>

              <div className="contactinfo">
                <div>
                  <h1>Contact</h1>

                  <div className="profile-social-wrapper">

                    <div className="profile-social">

                      <a href="mailto:nagy.gergi6@gmail.com"><i className="fa fa-envelope"/></a>

                      <a href="https://www.linkedin.com/in/gergo-nagy-1b12181ab" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" aria-hidden="true"></i>
                      </a>

                      <a href="https://api.whatsapp.com/send?phone=+36%2030%204764%20552" target="_blank" rel="noopener noreferrer"><i className="fa fa-whatsapp" aria-hidden="true"/> </a>

                    </div>
                  </div>
                </div>
                <div>
                  <h1>Social Media</h1>
                  <div className="profile-social-wrapper">
                    <div className="profile-social">

                      <a href="https://facebook.com/gergo.nagy.545/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" aria-hidden="true"></i> </a>

                      <a href="https://instagram.com/ngeri6/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" aria-hidden="true"></i> </a>

                      <a href="https://www.youtube.com/channel/UCXUUylIJiLE_uBLszlAqNAA" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube" aria-hidden="true"></i> </a>

                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </aside>
    </div>

  )
}






export default Burger;
