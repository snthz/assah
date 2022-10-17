import React from 'react'
import Pricing from '../pricing/Pricing'
import './prices.css'
const PricingList = () => {
  return (
    <section id='prices' className="pricing">
      <h1 className="section__title">Precios</h1>
        <div className="pricing-list__container">
            
            <Pricing 
              title='Sesio Normal' 
              description='La sesion se hace en estudio o  ustede decide el lugar'
              price='5000'
              details={['Album', '10 fotos', '1 hora','Album', '10 fotos', '1 hora']}/>
              <Pricing 
              title='Sesio Normal' 
              description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, natus.'
              price='5000'/>
              <Pricing 
              title='Sesio Normal' 
              description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, natus.'
              price='5000'/>
            
            

        </div>
    </section>
  )
}

export default PricingList