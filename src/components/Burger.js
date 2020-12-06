import React, { useState } from 'react';
import './Burger.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Profpic from '../Assets/image/captain.JPG';



const Burger = () => {

  const [open, setOpen] = useState(false)
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector ('.nav-sidebar');

  const BurgerOpen = (e) => {

    // nav.classList.toggle('active');
    menuBtn.classList.toggle('open');
    nav.classList.toggle('active');

    
  }




  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setOpen(false);
      menuBtn.classList.remove('open');
    }
  }
// asldkasldklasdk

  function Slide() {

    return (
      <motion.div className="backdrop" onClick={handleClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >


        <aside className="nav-sidebar"
          initial={{ x: "-100vh" }}
          animate={{ x: 0 }}>
          <ul>
            <li onClick={() => setOpen(false)}><Link to="/" className="menulinks">Home</Link></li>
            <li onClick={() => setOpen(false)}><Link to="/Kiteboarding" className="menulinks">Kiteboarding</Link></li>
            <li onClick={() => setOpen(false)}><Link to="/Webdevelopment" className="menulinks">Web Development</Link></li>
            <li onClick={() => setOpen(false)}><Link to="/Portfolio" className="menulinks">Portfolio</Link></li>

          </ul>
          <div className="profile">
            <div className="profile-wrapper">
              <div className="profilePic">
                <img src={Profpic} alt="" />
              </div>

              <div className="profileBio">
                <h1>Hi!</h1>
                <p>Welcome to my Portfolio! This Website briefly explain what am I doing. Please take your time and scroll around.</p>

              </div>

              <div className="contactinfo">
                <h1>Contact</h1>

                <li><a className="profil-email" href="mailto:nagy.gergi6@gmail.com">nagy.gergi6@gmail.com</a></li>

                <li><a to="https://api.whatsapp.com/send?phone=+36%2030%204764%20552" target="_blank" rel="noopener noreferrer"><i className="fa fa-whatsapp" aria-hidden="hidden"></i> +36 30 4764 552</a></li>

                <div className="profil-social">
                  <a href="https://facebook.com/gergo.nagy.545/" target="_blank" rel="noopener noreferrer"><i class="fa fa-facebook" aria-hidden="true"></i></a>

                  <a href="https://instagram.com/ngeri6/" target="_blank" rel="noopener noreferrer"><i class="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                  <a href="https://www.youtube.com/channel/UCXUUylIJiLE_uBLszlAqNAA" target="_blank" rel="noopener noreferrer"><i class="fa fa-youtube" aria-hidden="true"></i>
                  </a>


                </div>
              </div>

            </div>
          </div>
        </aside>


      </motion.div >


    )
  }



  return (
    <div>
      <div className="menu-btn" onClick={BurgerOpen} >
        <div className="menu-btn_burger"></div>
      </div>
      {open && <Slide />}

    </div>
  )
}






export default Burger;
