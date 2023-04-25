import React from 'react'
import Modal from '../../Modal/Modal'
import { ButtonAddModalStyle, Modal_InputStyled } from '../../Modal/Modal.style'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'

const AddSale = ({isOpenModalAdd, closeModalAdd}) => {
  return (
    <Modal isOpen={isOpenModalAdd} 
    closeModal={closeModalAdd}>
        <h4>Add sale</h4>
        <form >
          <ButtonAddModal/>
        </form>
    </Modal>
  )
}

export default AddSale