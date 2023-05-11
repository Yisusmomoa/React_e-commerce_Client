import React, { useEffect, useState } from 'react'
import Modal from '../../Modal/Modal'
import { Modal_InputStyled } from '../../Modal/Modal.style'
import ButtonAddModal from '../../Modal/ButtonAddModal'
import Swal from 'sweetalert2'
import { useCreateBrandMutation } from '../../../../state/store/service/BrandService'
import { useForm } from 'react-hook-form'
const AddBrand = ({isOpenModalAdd, closeModalAdd}) => {
    
    // crear mi propio hook para validar
    const [brand, setBrand] = useState("");
    const [selectedFile, setSelectedFile] = useState("");
    const [errorSubmit, setErrorSubmit]=useState({})
    const [
        createBrand,
        {
            isError, isLoading, isSuccess, error
        }
    ]=useCreateBrandMutation()
    const {
        register:create,
        handleSubmit,
        watch, 
        formState:{errors}
    }=useForm()

    const handleOnSubmit=(brand)=>{
        console.log("🚀 ~ file: AddBrand.jsx:28 ~ handleOnSubmit ~ brand:", brand)
        // ev.preventDefault();
        // const {
        //     imgBrand
        // }=ev.target.elements;
        console.log(brand.imgBrand[0])
        console.log(brand.name)
        const imgBrand=brand.imgBrand[0];
        
        const formData = new FormData();
        formData.append("imgBrand", imgBrand)
        formData.append("name", brand.name)
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
                text: error?.data?.message,
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
                <form onSubmit={handleSubmit(handleOnSubmit)}
                    encType="multipart/form-data">
                    <p>
                        <label htmlFor="name">Brand name: </label>
                        <Modal_InputStyled type='text'
                            name='name' 
                            // value={brand}
                            // onChange={(e)=>setBrand(e.target.value) }
                            {...create("name",
                            {required:true})}  
                        />
                    </p>
                    <p>
                        {errors.name
                                &&<span style={
                                    {color:"red",
                                    fontSize:"12px"}
                                }>This field is required</span>}
                    </p>
                    <p>
                        <label htmlFor="imgBrand">Brand Img: </label>
                        <input type='file' 
                            name='imgBrand'
                            accept="image/png, image/jpeg" 
                            {...create("imgBrand",
                            {required:true})} 
                        />
                    </p>
                    <p>
                        {errors.imgBrand
                                &&<span style={
                                    {color:"red",
                                    fontSize:"12px"}
                                }>This field is required</span>}
                    </p>
                    <ButtonAddModal/>
                </form>
            </Modal>
        )
}

export default AddBrand



/*
const handleSubmit=(ev)=>{
        ev.preventDefault();
        if(brand.length===0){
            setErrorSubmit(prevErrorSubmit=>{
                return {
                    ...prevErrorSubmit,
                    nameBrand:"This field is required"
                }
            })
        }
        else{
            setErrorSubmit(
                prevErrorSubmit=>{
                    const {nameBrand, ...rest}=prevErrorSubmit
                    return rest
                }
            )
        }
        
        const {
            imgBrand
        }=ev.target.elements;
        if(!imgBrand.files[0]) {
            setErrorSubmit(prevErrorSubmit=>{
                return {
                    ...prevErrorSubmit,
                    imgBrand:"This field is required"
                }
            })
        }
        else{
            setErrorSubmit(
                prevErrorSubmit=>{
                    const {imgBrand, ...rest}=prevErrorSubmit
                    return rest
                }
            )
        }
        
        const formData = new FormData();
        formData.append("imgBrand", imgBrand.files[0])
        formData.append("name", brand)
        createBrand(formData)
    }


*/