import React, { useState } from 'react'
import {SocialIcons} from '../navbar/SocialIcons'
import emailJs from '@emailjs/browser'
import './contact.css'
const Contact = () => {
    const [contact, setContact] = useState({})
    const handleSendEmail = (e) => {
        e.preventDefault();
        emailJs.send('service_pjs6dht', 'template_xofy0xt', contact,'C94Skc5mfNoIkBmPm').then(result => e.target.reset());
    }
    const handleChange = ({target}) => {
        setContact({...contact, [target.name]: target.value});
    }
  return (
    <section id='contact' className="contact">
        <div className="contact__container">
            <div className="contact__title">
                <h2>Contactame</h2>
                <p>Puedes contactarme a traves de mis redes sociales o enviame un correo,
                     y te respondere lo mas pronto posible.</p>
            </div>
            
            <form onSubmit={handleSendEmail}  className="contact__form">
                <input onChange={handleChange} type="text" name='name' placeholder='Nombre' className="contact__form-input" autoComplete='nope' required/>
                <input onChange={handleChange} type="email" name='email' placeholder='Correo' className="contact__form-input" autoComplete='nope' required />
                <textarea onChange={handleChange} minLength={10} name="description" className="contact__form-input" placeholder='Tienes alguna duda?' required></textarea>
                <div className="contact__button-container">
                    <button>Enviar</button>
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
            </form>
            <div className="contact__social-icons">
                <SocialIcons/>
            </div>
        </div>
    </section>
  )
}

export default Contact