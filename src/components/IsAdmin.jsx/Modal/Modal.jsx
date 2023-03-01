import React from 'react'
import './Modal.css'
const Modal = ({children, isOpen, closeModal}) => {
    // controlar que no se cierre el modal cuando hacemos click dentro de el
    const handleModalContainerClick=(e)=>{
        e.stopPropagation();
    }
  return (
    <article className={`modal ${isOpen && 'is-open'}`} onClick={closeModal}>
        <div className='modal-container' onClick={handleModalContainerClick}>
            <button className='modal-close' onClick={closeModal}>X</button>
            {children}
        </div>
    </article>
  )
}

export default Modal