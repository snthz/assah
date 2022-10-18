import React, { useState } from 'react'
import './pricing.css'
import PricingModal from './PricingModal'

const Pricing = ({especial = false, handleToggleTerms,img,title, description = 'La sesion puede ser realizada en el estudio o en algun lugar de su preferencia.', price, details}) => {
    const [toggleModal, setToggleModal] = useState(false);
    const handleToggleModal = () => {
        setToggleModal(!toggleModal)
    }
  return (
   <div className="pricing__card">
    <div className="pricing__card-container">

        <div style={{backgroundImage:  `url(${img})`}} className="pricing__card-img"></div>
        {especial && <div className="pricing__card-especial">
            <span>Especial</span>
        </div>}
        <div className="pricing__card-info">
            <h4 >{title}</h4>
            <span>{description}</span>
            <span className='pricing__price'>{`L.${price}`}</span>
            <button onClick={handleToggleModal}>Ver mas</button>
        </div>
        {toggleModal && <PricingModal 

                            title={title} 
                            description={description} 
                            price={price}  
                            details={details} 
                            handleToggleModal={handleToggleModal}
                            handleToggleTerms={handleToggleTerms}/>}
    </div>
   </div>
  )
}

export default Pricing