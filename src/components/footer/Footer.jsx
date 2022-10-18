import React from 'react'
import './footer.css'
const Footer = ({handleToggleTerms}) => {
  return (
    <footer className="footer">
        <div className="footer__container">
            <h1 className="navbar__logo-title">ASSAH</h1>
            <div className="footer__links-container">
              <div className="footer__nav">
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
             <button onClick={handleToggleTerms}>Terminos y condiciones</button>
            </div>
            <p>by Axl Santos</p>
        </div>
    </footer>
  )
}

export default Footer