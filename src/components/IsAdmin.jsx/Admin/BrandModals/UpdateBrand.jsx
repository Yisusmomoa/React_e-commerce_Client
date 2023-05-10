import React, { useEffect, useState } from 'react'
import Modal from '../../Modal/Modal'
import { Modal_InputStyled } from '../../Modal/Modal.style'
import ButtonAddModal from '../../Modal/ButtonAddModal'
import { useUpdateBrandMutation } from '../../../../state/store/service/BrandService'
import Swal from 'sweetalert2'

const UpdateBrand = ({isOpenModalUpdate,
    closeModalUpdate, brandToUpdate }) => {
  
    const [
        updateBrand,
        {isLoading, isSuccess, isError, error}
    ]=useUpdateBrandMutation()
    const [name, setName] = useState("");
    const onSubmit=(ev)=>{
        ev.preventDefault()
        const {
            imgBrand
        }=ev.target.elements;
        const formData = new FormData();
        formData.append("id", brandToUpdate.id)
        formData.append("imgBrand", imgBrand.files[0])
        formData.append("name", name)
        for (const value of formData.values()) {
            console.log(value);
          }
        updateBrand(formData)
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
                text: error?.data?.message,
            })
        }
        return ()=>{
          setName("")
        }
    }, [isLoading]);

    useEffect(() => {
        setName(brandToUpdate?.name)
        return ()=>{
            setName('')
        }
    }, [brandToUpdate]);

    return (
    <Modal isOpen={isOpenModalUpdate} 
    closeModal={closeModalUpdate}>
    <h4>Update brand</h4>
      <form onSubmit={onSubmit}>
        <p>
          <label htmlFor="BrandName">Brand name: </label>
          <Modal_InputStyled type='text' 
            name='BrandName' value={name || ''}
            onChange={(ev)=>setName(ev.target.value)}/>
        </p>
        <p>
          <label htmlFor="imgBrand">Brand Img: </label>
          <input type='file' name='imgBrand'/>
        </p>
        <ButtonAddModal/>
      </form>
  </Modal>
  )
}

export default UpdateBrand