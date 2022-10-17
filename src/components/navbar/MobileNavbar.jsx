import React from 'react'
import { SocialIcons } from './SocialIcons'
const MobileNavbar = ({toggleMenu, handleToggleMenu}) => {
  return (
    <div
        className={`navbar__mobile ${
          toggleMenu ? "navbar__mobile-active" : ""
        }`}
      >
        <div className="navbar__mobile-links">
          <a
            aria-current="page"
            className="navbar__link"
            href="#home"
            onClick={handleToggleMenu}
          >
            Inicio
          </a>

          <a
            aria-current="page"
            className="navbar__link"
            href="#prices"
            onClick={handleToggleMenu}
          >
            Precios
          </a>
          <a
            aria-current="page"
            className="navbar__link"
            href="#contact"
            onClick={handleToggleMenu}
          >
            Contacto
          </a>
        </div>
        
        <div className="navbar__mobile-social-icons">
          <SocialIcons />
        </div>
        <span>by Axl Santos</span>
      </div>
  )
}

export default MobileNavbar