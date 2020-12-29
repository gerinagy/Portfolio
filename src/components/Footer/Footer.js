import React, { useState } from 'react'
import './Footer.css'

function Footer() {
  
  let time = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(time);

  
  const UpdateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCtime(time);
    
  };
  
  setInterval(UpdateTime, 1000);

  return (
    <div>
      <footer className='footer'>
        <div className="footer-content">
          <h2 className="licence">Hungary © 2020</h2>
          <div className="social-icons">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

            <a href="mailto:nagy.gergi6@gmail.com" ><i className="fa fa-envelope" ></i></a>

            <a href="https://www.facebook.com/gergo.nagy.545/" target='_blank' rel="noreferrer"><i className="fa fa-facebook"></i></a>

            <a href="https://www.instagram.com/ngeri6" target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a>

            <a href="https://www.youtube.com/channel/UCXUUylIJiLE_uBLszlAqNAA" target="_blank" rel="noreferrer"><i className="fa fa-youtube"></i></a>

            <a href="https://api.whatsapp.com/send?phone=+36%2030%204764%20552" target="_blank" rel="noreferrer" ><i className="fa fa-whatsapp"></i></a>

          </div>
          <h2 className="time">{ctime}</h2>
          

        </div>
      </footer>
    </div>
  )
}

export default Footer;




