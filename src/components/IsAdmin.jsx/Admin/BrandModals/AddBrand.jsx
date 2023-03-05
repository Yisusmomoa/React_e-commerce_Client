import React, { useEffect, useState } from 'react'
import Modal from '../../Modal/Modal'
import { Modal_InputStyled } from '../../Modal/Modal.style'
import ButtonAddModal from '../../Modal/ButtonAddModal'
import Swal from 'sweetalert2'
import { useForm } from 'react-hook-form'
import { useCreateBrandMutation } from '../../../../state/store/service/BrandService'

const AddBrand = ({isOpenModalAdd, closeModalAdd}) => {
    
    const [brand, setBrand] = useState("");
    const [selectedFile, setSelectedFile] = useState("");
    
    const [
        createBrand,
        {
            isError, isLoading, isSuccess, error
        }
    ]=useCreateBrandMutation()
    const handleSubmit=(ev)=>{
        ev.preventDefault();
        const {
            imgBrand
        }=ev.target.elements;
        const formData = new FormData();
        formData.append("imgBrand", imgBrand.files[0])
        formData.append("name", brand)
        createBrand(formData)
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
        return ()=>{
            setBrand("")
            setSelectedFile("")
        }
    }, [isLoading]);

  return (
    <Modal isOpen={isOpenModalAdd} closeModal={closeModalAdd}>
        <h4>Add brand</h4>
          <form onSubmit={handleSubmit}
            encType="multipart/form-data">
            <p>
              <label htmlFor="name">Brand name: </label>
              <Modal_InputStyled type='text'
                 name='name' value={brand}
                 onChange={(e)=>setBrand(e.target.value)}/>
            </p>
            <p>
              <label htmlFor="imgBrand">Brand Img: </label>
              <input type='file' 
                name='imgBrand'
                accept="image/png, image/jpeg" />
            </p>
            <ButtonAddModal/>
          </form>
      </Modal>
  )
}

export default AddBrand