import React from 'react';
import './Menu.css';



const Menu = () => {

  // let menuOpen = false;
  const [menuOpen, setmenuOpen] = useState(null)

  
  
  const menuClick = (e) => {
    const menuBtn = document.querySelector('.menu-btn');
    menuBtn.classList.toggle('open')
    setmenuOpen()
  }


  return (
    <div className="menu-btn" onClick={menuClick}>
      <div className="menu-btn_burger"></div>
    </div>
  )
}

export default Menu;
