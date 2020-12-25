import React from 'react'

function ContactModal({setContactModal}) {


  const clickHandle = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setContactModal(null);
    }
  }

  const closingHandle = (e) => {
    setContactModal(null)
  }

  return (
    <>
      <div className="contact-backdrop" onClick={clickHandle}>
        <div className="contact-modal">
          <h3>Contact</h3>

        </div>
      </div>
    </>
  )
}

export default ContactModal
