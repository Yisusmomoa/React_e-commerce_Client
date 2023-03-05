
import React, { useEffect, useState } from 'react'
import { Modal_InputStyled } from '../../Modal/Modal.style'
import ButtonAddModal from '../../Modal/ButtonAddModal'
import Modal from '../../Modal/Modal'
import { useUpdateCategoryMutation } from '../../../../state/store/service/CategoryService'
import Swal from 'sweetalert2'

const UpdateCategory = ({isOpenModalUpdate, closeModalUpdate, category}) => {
  const [
      updateCategory,
      {isLoading, isSuccess, isError, error}
  ]=useUpdateCategoryMutation()
  
  const [name, setName] = useState("");
  
  const onSubmit=(ev)=>{
    ev.preventDefault()
    updateCategory({
      id:category.id,
      name
    })
  }
  useEffect(() => {
        if(isLoading){
            Swal.fire({
                title:'Loading',
                allowEscapeKey: false,
                allowOutsideClick: false,
                didOpen:()=>{
                    Swal.showLoading()
                }
            })
        }
        if (isSuccess) {
            Swal.fire({
                icon: 'success',
                title: 'successfully modified'
            }).then(()=>closeModalUpdate())
        }
        else if(isError){
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error?.data.message,
            })
        }
        return ()=>{
          setName("")
        }
  }, [isLoading]);
  
  return (
    <Modal isOpen={isOpenModalUpdate}
    closeModal={closeModalUpdate} >
        <h4>Update</h4>
        <form onSubmit={onSubmit} >
        <p>
            <label htmlFor="name">Category name: </label>
            <Modal_InputStyled type='text' name='name' 
              value={name}
              onChange={ev=>setName(ev.target.value)}
                  />
        </p>
        <ButtonAddModal/>
        </form>
     </Modal>
  )
}

export default UpdateCategory