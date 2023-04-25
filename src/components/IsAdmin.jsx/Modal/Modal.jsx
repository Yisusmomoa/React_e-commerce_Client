import React from 'react'
import './Modal.css'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { ModalArticle, ModalClose_Btn, ModalContainer } from './Modal.style';

const Modal = ({children, isOpen, closeModal}) => {
    // controlar que no se cierre el modal cuando hacemos click dentro de el
    const handleModalContainerClick=(e)=>{
        e.stopPropagation();
    }
  return (
    <ModalArticle isOpen={isOpen} onClick={closeModal}>
      <ModalContainer onClick={handleModalContainerClick}>
        <ModalClose_Btn onClick={closeModal}>
          <CloseOutlinedIcon fontSize='large'/>
        </ModalClose_Btn>
        {children}
      </ModalContainer>
    </ModalArticle>
  )
}

export default Modal

/*
return (
    <article className={`modal ${isOpen && 'is-open'}`} onClick={closeModal}>
        <div className='modal-container' onClick={handleModalContainerClick}>
            <button className='modal-close' 
            onClick={closeModal}><CloseOutlinedIcon/></button>
            {children}
        </div>
    </article>
  )

*/