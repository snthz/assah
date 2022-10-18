import React from 'react'
import {v4 as uuid} from 'uuid'
const PricingModal = ({handleToggleTerms,title, description, price, details = ['hola', 'mundo', 'equisde'], handleToggleModal}) => {
  return (
    <div className="pricing__modal">
        <div className="pricing__modal-container">
            <div className="modal__title-container">
            <h4 className='pricing__modal-title'>{title}</h4>
            <svg onClick={handleToggleModal} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            </div>

            <span className='pricing__modal-description'>{description}</span>
            <h4 className='pricing__modal-title'>Detalles</h4>
            <ul className='pricing__modal-details'>
                {details.map(detail => <li key={uuid()}>{`- ${detail}`}</li>)}
                
            </ul>
            <h4 className='pricing__modal-price'>{'L.' + price}</h4>
            
            <a href={`https://api.whatsapp.com/send?phone=50498164469&text=Hola%2C%20me%20gustar%C3%ADa%20contratar%20el%20${title}`}>Agendar</a>
            <p onClick={handleToggleTerms}>Terminos y condiciones</p>
        </div>
    </div>
  )
}

export default PricingModal