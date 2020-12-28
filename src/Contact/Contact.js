import React from 'react'
import './Contact.css'

import InstaImg from '../Assets/image/instaprof.jpg'

function Contact() {



  return (
    <>
      <div className="contact-page" >
        <div className="contact-modal">
          <section className="contact-title">
            <img src={InstaImg} alt="" />
            <div>
              <a href="https://instagram.com/ngeri6/" target="_blank" rel="noopener noreferrer">@ngeri6</a>
            </div>
          </section>

          <section className="contact-links">
            <h3>Reach me at</h3>

            <a href="mailto:nagy.gergi6@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope" aria-hidden="true"></i> Email</a>

            <a href="https://www.linkedin.com/in/gergo-nagy-1b12181ab" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" aria-hidden="true"></i> LinkedIn </a>

            <a href="https://api.whatsapp.com/send?phone=+36%2030%204764%20552" target="_blank" rel="noopener noreferrer"><i className="fa fa-whatsapp" aria-hidden="true"></i> WhatsApp </a>
            <a href="https://github.com/gerinagy" target="_blank" rel="noopener noreferrer"><i className="fa fa-github" aria-hidden="true"></i> GitHub  </a>

            <a href="https://www.youtube.com/channel/UCXUUylIJiLE_uBLszlAqNAA" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube" aria-hidden="true"></i>YouTube</a>

          </section>

        </div>
      </div>
    </>
  )
}

export default Contact
