import React from 'react'

const Modal = ({ selectedImg, setSelectedImg }) => {

  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null);
    }  
  }

  const keyPress = (e) => {
    if (e.key === "Escape") {
      console.log("esc")
    }
  }

  return (
    <div className="backdrop" onClick={handleClick} onKeyPress={ keyPress }>
      <img src={selectedImg} alt="enlarged pic"/>
  
    </div>
  )
}

export default Modal;
