import React from 'react'
import './terms.css'
const Terms = ({closeModal}) => {
  return (
    <section className="terms__modal">
        <div className="terms__modal-container">
            <div className="terms__modal-title-container">
                <h4 className='terms__modal-title'>Terminos y Condiciones</h4>
                <svg onClick={closeModal}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
        
            <ol className='terms__content'>
                <li>Algunas fotos pueden ser publicadas por motivos de publicidad. Debe Informar al no estar de acuerdo.</li>
                <li>No se hace envíos de fotografías sin editar. Ya que el trabajo no estaría completamente terminado.</li>
                <li>Una vez que se haga envío de las imágenes para escoger las fotografías,NO HACER screenshot a las mismas, ya que infringe los derechos de autor.</li>
                <li>Asistirá a la cita de la sesión a la fecha y hora acordada. La máxima espera será de 15 minutos, de lo contrario se cobrará una multa de L 150.00 por cada media hora.
                    le sugiero salir con suficiente tiempo para llegar puntual a su cita.</li>
                <li>Si desea fotografías adicionales, el precio es de L200 por C/U</li>
                <li>Conservo únicamente las fotografías editadas, en caso que pierda su backup, y necesite envío nuevamente de la misma, deberá pagar un recargo de L400 (Es obligatorio que
                    usted realice su backup y lo conserve en un almacenamiento seguro).</li>
                <li>Se conservará las fotografías impresas para su reclamo por 5 meses, en caso que no pase por ellas en ese tiempo las mismas seran descartadas.</li>
                <li>El monto restante del valor de su paquete fotográfico se cancela el día de la sesión.</li>
                <li>Presentarse  a la sesión únicamente las personas participantes. Al necesitar ayuda, se permite 1 acompañante.</li>
            </ol>
        </div>
    
    </section>
  )
}

export default Terms