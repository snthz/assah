import React, { useState } from 'react'
import image from '../../assets/fondo.jpg'
import './pricing.css'
import PricingModal from './PricingModal'

const Pricing = ({title, description, price, details}) => {
    const [toggleModal, setToggleModal] = useState(false);
    const handleToggleModal = () => {
        setToggleModal(!toggleModal)
    }
  return (
   <div className="pricing__card">
    <div className="pricing__card-container">
        <img src={image} alt="sesion-one" />
        <div className="pricing__card-info">
            <h4 >{title}</h4>
            <span>{description}</span>
            <span>{`L.${price}`}</span>
            <button onClick={handleToggleModal}>Ver mas</button>
        </div>
        {toggleModal && <PricingModal 
                            title={title} 
                            description={description} 
                            price={price}  
                            details={details} 
                            handleToggleModal={handleToggleModal}/>}
    </div>
   </div>
  )
}

export default Pricing