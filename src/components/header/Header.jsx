import React from 'react'
import background from '../../assets/fondo.webp'
import assah from '../../assets/assah.webp'
import './header.css'
const Header = () => {
  return (
    <header id='home' className="header">
        <img className='header__background' src={background} alt="fondo" />
       <div className="header__profile-photo">
        <img src={assah} alt="assah" />
       </div>
       <h1 className='header__intro'>Hola, soy Astrid Santos</h1>
       <h2>Fotografa profesional en Honduras</h2>
       <div className="header__button-container">
        <a aria-current="page" href="#prices" rel="noreferrer" >Agendar sesion <i class="fa-solid fa-arrow-right"></i></a>
       </div>
    </header>
  )
}

export default Header