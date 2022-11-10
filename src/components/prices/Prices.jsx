import React from 'react'
import Pricing from '../pricing/Pricing'
import basic from '../../assets/basic.webp'
import standard from '../../assets/standard2.webp'
import premium from '../../assets/premium.webp'
import navidada from '../../assets/astrid1.webp'
import navidadb from '../../assets/astrid2.webp'
import './prices.css'
const PricingList = ({handleToggleTerms}) => {
  return (
    <section id='prices' className="pricing">
      <h1 className="section__title">Precios</h1>
        <div className="pricing-list__container">
            
            <Pricing 
             handleToggleTerms={handleToggleTerms}
              img={basic}
              title='Paquete Basico' 
              price='1790'
              details={['5 fotografias digitales', '5 fotografias impresas (mismas entregadas)', ' 30 minutos de sesion','Una galeria digital con 5 fotografias editadas y listas para compartir en redes sociales.']}/>
             
              <Pricing 
              handleToggleTerms={handleToggleTerms}
              img={standard}
              title='Paquete Standard' 
              price='2190'
              details={['10 fotografias digitales', '10 fotografias impresas (mismas entregadas)', ' 1 hora de sesion','Una galeria digital con 10 fotografias editadas y listas para compartir en redes sociales.']}/>
             
              <Pricing 
              handleToggleTerms={handleToggleTerms}
              img={premium}
              title='Paquete Premium' 
              price='2990'
              details={['15 fotografias digitales', '15 fotografias impresas (mismas entregadas)', ' 1 hora de sesion','Una galeria digital con 15 fotografias editadas y listas para compartir en redes sociales.', 'canva']}/>
             
              <Pricing 
              especial={true}
              handleToggleTerms={handleToggleTerms}
              img={navidada}
              title='Paquete Navideño A' 
              description='Las sesion se realiza en el estudio con tematica navideña. '
              price='2100'
              details={['10 fotografias digitales', '10 fotografias impresas (mismas entregadas)', ' 1 hora de sesion','Set navideño']}/>
             
              <Pricing 
              especial={true}
              handleToggleTerms={handleToggleTerms}
              img={navidadb}
              title='Paquete Navideño B' 
              description='Las sesion se realiza en el estudio con tematica navideña. '
              price='2700'
              details={['15 fotografias digitales', '15 fotografias impresas (mismas entregadas)', ' 1 hora de sesion','Set navideño']}/>
        </div>
    </section>
  )
}

export default PricingList