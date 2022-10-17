import React from 'react'
import background from '../../assets/fondo.jpg'
import './header.css'
const Header = () => {
  return (
    <header id='home' className="header">
        <img className='header__background' src={background} alt="fondo" />
        <h2>Quieres guardar tus mejores momentos?</h2>
        <a aria-current="page" href="#prices" rel="noreferrer" >Agenda ahora!</a>
    </header>
  )
}

export default Header