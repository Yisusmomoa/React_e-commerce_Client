import React, { useEffect, useState } from 'react'
import Modal from '../../Modal/Modal'
import { Modal_InputStyled } from '../../Modal/Modal.style'
// import ButtonAddModal from '../../Modal/ButtonAddModal'
import { useDeleteImgProductMutation, useGetProductByIdQuery, useUpdateProductMutation } from '../../../../state/store/service/ProductService'
import Swal from 'sweetalert2'
import {ButtonAddModalStyle} from '../../Modal/Modal.style'
import styled from 'styled-components'
import ContainerImgs from './ContainerImgs'

const UpdateProduct = ({isOpenModalUpdate,
    closeModalUpdate, categories, brands, productToUpdate}) => {
    const [idProd, setidProd] = useState(productToUpdate?.id);
   
   
    //#region Services
        useEffect(() => {
            setidProd(productToUpdate?.id)
            return () => {
                setidProd(0)
            };
        }, [productToUpdate]);
        
        const {
            data,
            isLoading:isLoadingProduct, isError:isErrorProduct,
            isSuccess: isSuccessProduct, error:errorProduct
        }=useGetProductByIdQuery(idProd)
            console.log("🚀 ~ file: UpdateProduct.jsx:37 ~ productToUpdate: data", data)
        const [
            updateProductService,
            {isSuccess, isLoading, isError, error}
        ]=useUpdateProductMutation()
        const [
            deleteImgProductService,
            {isSuccess:isSuccessDeleteImg, isLoading:isLoadingDeleteImg,
            isError:isErrorDeleteImg, error:errorDeleteImg}
        ]=useDeleteImgProductMutation()
    //#endregion Services

    //#region handleInputs
        //handleInputs
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
            setnameProd(data?.name)
            setdescriptionProd(data?.description)
            setprice(data?.price)
            setimgsProd(data?.ImgProducts)
            console.log(imgsProd)
            return ()=>{
                // setInfoProduct({})
                setnameProd("")
                setdescriptionProd("")
                setprice(0)
                setimgsProd([])
            }
        }, [data]);
        //handleInputs
    //#endregion handleInputs
    
    //#region Combos
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
    //#endregion Combos

    //#region updateProductService
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
                // formData.append("imgs", imgsProd)
                updateProductService(formData)

                console.log(imgsProd)

                // agregar n imagenes al formdata
                // for (let index = 0; index < imgsProd.image.length; index++) {
                //     const element = imgsProd.image[index];
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
    //#endregion updateProductService

    //#region deleteImgProductService
        //Manejo de imagenes
        const deleteImg=(idImg)=>{
            deleteImgProductService({
                idImg,
                idProd:data?.id
            })
            // console.log("idImg", idImg)
            // console.log("product img", productToUpdate?.id)
            // console.log(imgsProd)
            // const imgs=imgsProd.filter(element=>element.id!=idImg)
            // console.log(imgs)
            // setimgsProd(imgs)
            // setimgsProd(current=>{
            //     const {img, ...rest}=current.filter((element=>element.id!==idImg))
            //     return rest
            // })
        }

        useEffect(() => {
            if(isLoadingDeleteImg){
                Swal.fire({
                    title:'Loading',
                    allowEscapeKey: false,
                    allowOutsideClick: false,
                    didOpen:()=>{
                        Swal.showLoading()
                    }
                })
            }
            if (isSuccessDeleteImg) {
            Swal.fire(
                'Deleted!',
                'Your img has been deleted.',
                'success'
            ).then(()=>closeModalUpdate())
            }
            else if(isErrorDeleteImg){
                console.log(errorDeleteImg)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: errorDeleteImg?.data.message,
                })
            }
        }, [isLoadingDeleteImg]);
        
        //Manejo de imagenes

    //#endregion deleteImgProductService

    const updateImg=(idImg)=>{
        alert("updateImg"+idImg)
    }


  return isSuccessProduct&&(
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

            {
                imgsProd?.length>0?
                <ContainerImgs imgsProd={imgsProd} deleteImg={deleteImg} updateImg={updateImg}/>
                // <ContainerImgs>
                //     {
                //         imgsProd?.map(img=>(
                //             <RowProductUpdate key={img.id} 
                //                 img={img} deleteImg={deleteImg} updateImg={updateImg}/>
                //         ))
                //     }
                // </ContainerImgs>
                :
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
                
            }
            
            
            <ButtonAddModalStyle>Update</ButtonAddModalStyle>
          </form>
      </Modal>
  )
}

export default UpdateProduct