import React, { useEffect, useState } from 'react'
import Modal from '../../Modal/Modal'
import { Modal_InputStyled } from '../../Modal/Modal.style'
import ButtonAddModal from '../../Modal/ButtonAddModal'
import { useForm } from 'react-hook-form'
import { useUpdateProductMutation } from '../../../../state/store/service/ProductService'
import Swal from 'sweetalert2'

const UpdateProduct = ({isOpenModalUpdate,
    closeModalUpdate, categories, brands, productToUpdate}) => {
    
    const [
        updateProductService,
        {isSuccess, isLoading, isError, error}
    ]=useUpdateProductMutation()
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

    //submit
        const { register:updateProduct, 
            handleSubmit, 
            watch, 
            formState: { errors } } = useForm();
        const onSubmit=(data)=>{
            // console.log(ev.target.elements)
            // const {image}=ev.target.elements
            // console.log(image)
            // console.log(image.files)
            console.log("Update", data.ProductPrice)
            const formData=new FormData()
            formData.append("id", productToUpdate.id)
            formData.append("name", data.ProductName)
            formData.append("price", data.ProductPrice)
            formData.append("description", data.ProductDescription)
            formData.append("price", data.ProductPrice)
            formData.append("CategoryId", category)
            formData.append("ManuFacturerId", brand)
            // for (let index = 0; index < data.image.length; index++) {
            //     const element = data.image[index];
            //     formData.append("images", element)
            // }
            updateProductService(formData)
        }
    //submit

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
    }, [isLoading]);

  return (
    <Modal isOpen={isOpenModalUpdate} 
      closeModal={closeModalUpdate}>
        <h4>Update Product</h4> 
          <form onSubmit={handleSubmit(onSubmit)}
              encType="multipart/form-data">
            <p>
              <label htmlFor="ProductName">Product name: </label>
              <Modal_InputStyled type='text' name='ProductName'
              {...updateProduct("ProductName") } />
            </p>
            <p>
              <label htmlFor="ProductDescription">Description: </label>
              <Modal_InputStyled type='text' name='ProductDescription' 
              {...updateProduct("ProductDescription") }/>
            </p>
            <p>
              <label htmlFor="ProductPrice">Price: </label>
              <Modal_InputStyled type='number' name='ProductPrice'
                min={1}
              {...updateProduct("ProductPrice") } />
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
                    {...updateProduct("image") }
                />
            </p>
            <ButtonAddModal/>
          </form>
      </Modal>
  )
}

export default UpdateProduct