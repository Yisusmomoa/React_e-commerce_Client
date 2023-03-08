import React, { useEffect, useState } from 'react'
import Modal from '../../Modal/Modal'
import { Modal_InputStyled } from '../../Modal/Modal.style'
import ButtonAddModal from '../../Modal/ButtonAddModal'
import { useUpdateProductMutation } from '../../../../state/store/service/ProductService'
import Swal from 'sweetalert2'

const UpdateProduct = ({isOpenModalUpdate,
    closeModalUpdate, categories, brands, productToUpdate}) => {
    //Services
        const [
            updateProductService,
            {isSuccess, isLoading, isError, error}
        ]=useUpdateProductMutation()
    //Services

    //handleInputs
    // const [infoProduct, setInfoProduct]=useState({})
    // const handleOnChange=(ev)=>{
    //     const { name, value } = ev.target;
    //     setInfoProduct({
    //         ...infoProduct,
    //         [name]:value
    //     })
    //     console.log(infoProduct)
    // }
    const [nameProd, setnameProd] = useState("");
    const [descriptionProd, setdescriptionProd] = useState("");
    const [priceProd, setprice] = useState(0);
    const [imgsProd, setimgsProd] = useState([]);
    
    useEffect(() => {
        // setInfoProduct({
        //     id:productToUpdate?.id,
        //     name:productToUpdate?.name,
        //     description:productToUpdate?.description,
        //     price:productToUpdate?.price,
        //     images:productToUpdate?.ImgProducts
        // })
        setnameProd(productToUpdate?.name)
        setdescriptionProd(productToUpdate?.description)
        setprice(productToUpdate?.price)
        setimgsProd(productToUpdate?.ImgProducts)
        console.log(imgsProd)
        return ()=>{
            // setInfoProduct({})
            setnameProd("")
            setdescriptionProd("")
            setprice(0)
            setimgsProd([])
        }
    }, [productToUpdate]);
    //handleInputs
    
    //manejo de combos
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
        
        const onSubmit=(ev)=>{
            ev.preventDefault();
            // console.log(ev.target.elements)
            // const {image}=ev.target.elements
            // console.log(image)
            // console.log(image.files)
            // console.log("Update", data.ProductPrice)
            const formData=new FormData()
            formData.append("id", productToUpdate.id)
            formData.append("name", nameProd)
            formData.append("description", descriptionProd)
            formData.append("price", priceProd)
            formData.append("CategoryId", category)
            formData.append("ManuFacturerId", brand)
            updateProductService(formData)

            // agregar n imagenes al formdata
            // for (let index = 0; index < data.image.length; index++) {
            //     const element = data.image[index];
            //     formData.append("images", element)
            // }
            
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
        
    //submit

  return (
    <Modal isOpen={isOpenModalUpdate} 
      closeModal={closeModalUpdate}>
        <h4>Update Product</h4> 
          <form onSubmit={onSubmit}
              encType="multipart/form-data">
            <p>
              <label htmlFor="ProductName">Product name: </label>
              <Modal_InputStyled type='text' name='ProductName'
              value={nameProd || ''} onChange={(ev)=>setnameProd(ev.target.value)} />
            </p>
            <p>
              <label htmlFor="ProductDescription">Description: </label>
              <Modal_InputStyled type='text' name='ProductDescription' 
              value={descriptionProd || '' }
              onChange={(ev)=>setdescriptionProd(ev.target.value)} />
            </p>
            <p>
              <label htmlFor="ProductPrice">Price: </label>
              <Modal_InputStyled type='number' name='ProductPrice'
              value={priceProd ||0}
                min={1} 
                onChange={(ev)=>setprice(ev.target.value)}/>
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
                />
            </p>
            <ButtonAddModal/>
          </form>
      </Modal>
  )
}

export default UpdateProduct