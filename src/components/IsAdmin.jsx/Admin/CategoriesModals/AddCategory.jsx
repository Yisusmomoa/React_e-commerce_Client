import React, { useEffect } from 'react'
import Modal from '../../Modal/Modal'
import { Modal_InputStyled } from '../../Modal/Modal.style'
import ButtonAddModal from '../../Modal/ButtonAddModal'
import { useForm } from 'react-hook-form'
import { useCreateCategoryMutation } from '../../../../state/store/service/CategoryService'
import Swal from 'sweetalert2'

const AddCategory = ({isOpenModalAdd, closeModalAdd}) => {

    //#region Services
        const [createCategory,
        {
            isError,
            isLoading,
            isSuccess,
            error
        }]=useCreateCategoryMutation()
        const onSubmit=(categ)=>{
            console.log(categ)
            createCategory(categ)
        }
        const {
            register:create,
            handleSubmit,
            watch, 
            formState:{errors}
        }=useForm()

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
                    title: 'successfull created'
                }).then(()=>closeModalAdd())
            }
            else if(isError){
                console.log(error)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error?.data.message,
                })
            }
        }, [isLoading]);
    //#endregion Services

  return (
    <Modal isOpen={isOpenModalAdd} 
    closeModal={closeModalAdd}>
        <h4>Add category</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>
            <label htmlFor="name">Category name: </label>
            <Modal_InputStyled type='text' name='name'
                {...create("name",
                    {required:true})} />
          </p>
          <p>
          {errors.name
                &&<span style={{color:"red", fontSize:"12px"}}>This field is required</span>}
          </p>
          <ButtonAddModal/>
        </form>
    </Modal>
  )
}

export default AddCategory