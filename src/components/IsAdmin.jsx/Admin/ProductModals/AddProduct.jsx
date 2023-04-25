import React, { useEffect, useState } from 'react'
import { Modal_InputStyled } from '../../Modal/Modal.style'
import ButtonAddModal from '../../Modal/ButtonAddModal'
import Modal from '../../Modal/Modal'
import { useForm } from 'react-hook-form'
import { useCreateProductMutation } from '../../../../state/store/service/ProductService'
import Swal from 'sweetalert2'

const AddProduct = ({isOpenModalAdd, 
    closeModalAdd,
    categories, brands}) => {
    //Services
    const [
        createProductAction,
        {isSuccess, isLoading, isError, error}
    ]=useCreateProductMutation()
    //Services

    //manejo de combos
        // console.log("categories", categories)
        // console.log("brands", brands)
        const [brand, setbrand] = useState(1);
        const [category, setcategory] = useState(1);
        
        const handleChangeBrand=(ev)=>{
            setbrand(ev.target.value)
        }
        const handleClickSelectCategory=(ev)=>{
            setcategory(ev.target.value)
        }
    //manejo de combos

    // const onSubmit =(ev)=>{
    //     ev.preventDefault();
    // }
    const { register:createProduct, 
        handleSubmit, 
        watch, 
        formState: { errors } } = useForm();
    const onSubmit=(data)=>{
        // console.log(ev.target.elements)
        // const {image}=ev.target.elements
        // console.log(image)
        // console.log(image.files)
        console.log(data)
        const formData=new FormData()
        formData.append("name", data.ProductName)
        formData.append("price", data.ProductPrice)
        formData.append("description", data.ProductDescription)
        formData.append("price", data.ProductPrice)
        formData.append("CategoryId", category)
        formData.append("ManuFacturerId", brand)
        for (let index = 0; index < data.image.length; index++) {
            const element = data.image[index];
            formData.append("images", element)
        }
        createProductAction(formData)
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
                title: 'successfull updated'
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

    return (
        <Modal isOpen={isOpenModalAdd} closeModal={closeModalAdd}>
            <h4>Add Product</h4>
            <form onSubmit={handleSubmit(onSubmit)}
              encType="multipart/form-data">
                <p>
                    <label htmlFor="ProductName">Product name: </label>
                    <Modal_InputStyled type='text' name='ProductName'
                    {...createProduct("ProductName", {required:true}) } />
                </p>
                <p>
                    {errors.ProductName
                        &&<span style={{color:"red",
                        fontSize:"12px"}}>This field is required</span>}
                </p>
                <p>
                    <label htmlFor="ProductDescription">Description: </label>
                    <Modal_InputStyled type='text' name='ProductDescription'
                     {...createProduct("ProductDescription", {required:true}) } />
                </p>
                <p>
                    {errors.ProductDescription
                        &&<span style={{color:"red",
                        fontSize:"12px"}}>This field is required</span>}
                </p>
                <p>
                    <label htmlFor="ProductPrice">Price: </label>
                    <Modal_InputStyled type='number' name='ProductPrice'
                     {...createProduct("ProductPrice", {required:true}) } />
                </p>
                <p>
                    {errors.ProductPrice
                        &&<span style={{color:"red",
                        fontSize:"12px"}}>This field is required</span>}
                </p>
                <p>
                    <label>
                        Brand 
                        <select value={brand} 
                            onChange={handleChangeBrand}>
                            {
                            brands?.map(element=>(
                                <option value={element.id} 
                                key={element.id}>{element.name}</option>
                            ))
                            }
                        </select>
                    </label>
                </p>
                <p>
                    <label>
                        Category 
                        <select value={category} 
                            onChange={handleClickSelectCategory}>
                            {
                                categories?.map(element=>(
                                <option value={element.id}
                                    key={element.id}> {element.name} </option>
                                ))
                            }
                        </select>
                    </label>
                </p>
                <p>
                    <label htmlFor="image">Imgs product: </label>
                    <br/>
                    <span>Select 1-3 files</span>
                    <br/>
                    <input type='file' 
                        name='image'
                        accept="image/png, image/jpeg"
                        multiple
                    {...createProduct("image", {required:true}) } 
                    />
                    <p>
                        {errors.image
                            &&<span style={{color:"red",
                            fontSize:"12px"}}>This field is required</span>}
                    </p>
                </p>
                <ButtonAddModal/>
            </form>
        </Modal>
    )
}

export default AddProduct



































/*
const AddProduct = ({isOpenModalAdd, 
    closeModalAdd,
    categories, brands}) => {
    
    //manejo de combos
        const [brand, setbrand] = useState(1);
        const [category, setcategory] = useState(1);
        
        const handleClickSelectBrand=(ev)=>{
            setbrand(ev.target.value)
        }
        const handleClickSelectCategory=(ev)=>{
            setcategory(ev.target.value)
        }
    //manejo de combos

    // const onSubmit =(ev)=>{
    //     ev.preventDefault();
    // }
    const { register:createProduct, 
        handleSubmit, 
        watch, 
        formState: { errors } } = useForm();
    const onSubmit=(data, ev)=>{
        console.log(ev.target.elements)
        const {image}=ev.target.elements
        console.log(image)
        console.log(image.files[0])
        console.log(image.files[1])
        console.log(image.files[2])
        console.log(data)
    }
    return (
        <Modal isOpen={isOpenModalAdd} closeModal={closeModalAdd}>
            <h4>Add Product</h4>
            <form onSubmit={handleSubmit(onSubmit)}
              encType="multipart/form-data">
                <p>
                    <label htmlFor="ProductName">Product name: </label>
                    <Modal_InputStyled type='text' name='ProductName'
                    {...createProduct("ProductName", {required:true}) } />
                    {errors.ProductName && <span>This field is required</span>}
                </p>
                <p>
                    <label htmlFor="ProductDescription">Description: </label>
                    <Modal_InputStyled type='text' name='ProductDescription'
                     {...createProduct("ProductDescription", {required:true}) } />
                     {errors.ProductDescription && <span>This field is required</span>}
                </p>
                <p>
                    <label htmlFor="ProductPrice">Price: </label>
                    <Modal_InputStyled type='number' name='ProductPrice'
                     {...createProduct("ProductPrice", {required:true}) } />
                     {errors.ProductPrice && <span>This field is required</span>}
                </p>
                <p>
                    <label>
                        Brand 
                        <select value={brand} 
                        onChange={handleClickSelectBrand}
                        {...createProduct("Brand", {required:true}) }>
                            {
                            brands?.map(element=>(
                                <option value={element.id} 
                                key={element.id}>{element.name}</option>
                            ))
                            }
                        </select>
                        {errors.Brand && <span>This field is required</span>}
                    </label>
                </p>
                <p>
                    <label>
                        Category 
                        <select value={category} 
                            onChange={handleClickSelectCategory}
                            {...createProduct("Category", {required:true}) }>
                            {
                                categories?.map(element=>(
                                <option 
                                    value={element.id}
                                    key={element.id}>{element.name}</option>
                                ))
                            }
                        </select>
                        {errors.Category && <span>This field is required</span>}
                    </label>
                </p>
                <p>
                    <label htmlFor="image">Imgs product: </label>
                        <input type='file' 
                        name='image'
                        accept="image/png, image/jpeg"
                        multiple
                        // {...createProduct("imgsProd", {required:true}) } 
                        />
                    //  {errors.imgsProd && <span>This field is required</span>} *
    //                 </p>
    //                 <ButtonAddModal/>
    //             </form>
    //         </Modal>
    //     )
    // }
    


*/