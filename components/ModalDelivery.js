import React from 'react'
import { useStateContext } from '../context/StateContext'


const ModalDelivery = ({deliveryOpen,deliveryClose, children}) => {
    if(!deliveryOpen) return null
    return (
   <>
  
   <div className='other-content-style' onClick={ document.body.classList.remove("hidden")}>
   <div className='modal-backdrop' onClick={deliveryClose}></div>
    <div className='modal-styles' style={{height:"84vh"}}>
    <button className="modal-close-btn" type="button" onClick={deliveryClose} aria-label="Close" data-autom="overlay-close"><span><svg width="21" height="21" role="img" aria-hidden="true"><path fill="none" d="M0 0h21v21H0z"></path><path d="M12.12 10l4.07-4.06a1.5 1.5 0 10-2.11-2.12L10 7.88 5.94 3.81a1.5 1.5 0 10-2.12 2.12L7.88 10l-4.07 4.06a1.5 1.5 0 000 2.12 1.51 1.51 0 002.13 0L10 12.12l4.06 4.07a1.45 1.45 0 001.06.44 1.5 1.5 0 001.06-2.56z"></path></svg></span></button>
        {children}
        
    </div>
    </div>
    </>)
};
export default ModalDelivery
