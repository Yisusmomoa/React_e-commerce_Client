import { Modal } from '@mui/material'
import React from 'react'
import { Modal_InputStyled } from '../../Modal/Modal.style'
import ButtonAddModal from '../../Modal/ButtonAddModal'

const UpdateCategory = ({isOpenModalUpdate,closeModalUpdate }) => {
    // const [
    //     updateCategory,
    //     {isLoading, isSucces}
    // ]=useUpdat
  return (
    <Modal isOpen={isOpenModalUpdate}
    closeModal={closeModalUpdate} >
        <h4>Update</h4>
        <form >
        <p>
            <label>{categoryToUpdate.name}</label>
            <label htmlFor="CategoryName">Category name: </label>
            <Modal_InputStyled type='text' name='CategoryName' />
        </p>
        <ButtonAddModal/>
        </form>
     </Modal>
  )
}

export default UpdateCategory