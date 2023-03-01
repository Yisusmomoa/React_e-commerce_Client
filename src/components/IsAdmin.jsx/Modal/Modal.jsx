import React from 'react'
import './Modal.css'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
const Modal = ({children, isOpen, closeModal}) => {
    // controlar que no se cierre el modal cuando hacemos click dentro de el
    const handleModalContainerClick=(e)=>{
        e.stopPropagation();
    }
  return (
    <article className={`modal ${isOpen && 'is-open'}`} onClick={closeModal}>
        <div className='modal-container' onClick={handleModalContainerClick}>
            <button className='modal-close' 
            onClick={closeModal}><CloseOutlinedIcon/></button>
            {children}
        </div>
    </article>
  )
}

export default Modal