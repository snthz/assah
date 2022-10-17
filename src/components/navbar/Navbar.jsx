import "./navbar.css";
import { SocialIcons } from "./SocialIcons";
import { useState } from "react";
import MobileNavbar from "./MobileNavbar";
export const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  window.addEventListener('scroll',() => {
    const navbar = document.querySelector('.navbar');
      window.scrollY > 0? navbar.classList.add('scrolling') : navbar.classList.remove('scrolling');
  } );
  return (
    <>
      <nav className={`navbar ${toggleMenu? 'navbar__toggle-menu-active' : ''}`}>
        <div className="navbar__container">
          <div className="navbar__social-icons">
            <SocialIcons />
          </div>
          <h1 className="navbar__logo-title">ASSAH</h1>
          <svg
            onClick={handleToggleMenu}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="navbar__toggle-menu"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>

          <div className="navbar__links">

            <a aria-current="page" href="#home"  rel="noreferrer" className="navbar__link ">
              Inicio
            </a>
            <a aria-current="page" href="#prices" rel="noreferrer" className="navbar__link ">
              Precios
            </a>
            <a aria-current="page" href="#contact" rel="noreferrer" className="navbar__link ">
              Contacto
            </a>

          </div>
        </div>
        <MobileNavbar toggleMenu={toggleMenu} handleToggleMenu={handleToggleMenu}/>
      </nav>

      
    </>
  );
};
