import React, { useEffect, useState } from 'react'
import Modal from '../../Modal/Modal'
import { Modal_InputStyled } from '../../Modal/Modal.style'
// import ButtonAddModal from '../../Modal/ButtonAddModal'
import { useAddMoreImgsProductMutation, useDeleteImgProductMutation, useGetProductByIdQuery, useUpdateImgProductMutation, useUpdateProductMutation } from '../../../../state/store/service/ProductService'
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
        const [
            updateProductService,
            {isSuccess, isLoading, isError, error}
        ]=useUpdateProductMutation()

        const [
            deleteImgProductService,
            {isSuccess:isSuccessDeleteImg, isLoading:isLoadingDeleteImg,
            isError:isErrorDeleteImg, error:errorDeleteImg}
        ]=useDeleteImgProductMutation()
        const [
            updateImgProduct, {isSuccess:isSuccessupdateImgProduct, isLoading:isLoadingupdateImgProduct,
                isError:isErrorupdateImgProduct, error:errorupdateImgProduct}
        ]=useUpdateImgProductMutation()
        
        const [
            addMoreImgs,  {isSuccess:isSuccessAddMoreImgs, isLoading:isLoadingAddMoreImgs,
            isError:isErrorAddMoreImgs, error:errorAddMoreImgs}
        ]=useAddMoreImgsProductMutation()
    //#endregion Services

    //#region handleInputs
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
            return ()=>{
                // setInfoProduct({})
                setnameProd("")
                setdescriptionProd("")
                setprice(0)
                setimgsProd([])
            }
        }, [data]);
    //#endregion handleInputs
    
    //#region Combos
        const [brand, setbrand] = useState(1);
        const [category, setcategory] = useState(1);
        
        const handleChangeBrand=(ev)=>{
            setbrand(ev.target.value)
        }
        const handleClickSelectCategory=(ev)=>{
            setcategory(ev.target.value)
        }
    //#endregion Combos

    //#region updateProductService
        const onSubmit=(ev)=>{
            ev.preventDefault();
            //para añadir más imagenes
                // const imgs=ev.target.image.files
            //para añadir más imagenes
            const formData=new FormData()
            formData.append("id", productToUpdate.id)
            formData.append("name", nameProd)
            formData.append("description", descriptionProd)
            formData.append("price", priceProd)
            formData.append("CategoryId", category)
            formData.append("ManuFacturerId", brand)
             //para añadir más imagenes
                // for (let index = 0; index < imgs.length; index++) {
                //     const element = imgs[index];
                //     console.log(element)
                //     formData.append("images", element)
                // }

             //para añadir más imagenes
            updateProductService(formData)

            // console.log(ev.target.image.files.length)
            
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
    //#endregion updateProductService

    //#region deleteImgProductService
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
                )
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
    //#endregion deleteImgProductService

    //#region UpdateImg
        const updateImg=(idImg, ev)=>{
            ev.preventDefault();
            const formData = new FormData();
            console.log("updateImg", idImg)
            console.log("Idprod", idProd)
            const img=ev.target.files[0]
            console.log("file", img)
            formData.append("idImg", idImg)
            formData.append("idProd", idProd)
            formData.append("img",img)
            updateImgProduct(formData)
        }
        useEffect(() => {
            if(isLoadingupdateImgProduct){
              Swal.fire({
                  title:'Loading',
                  allowEscapeKey: false,
                  allowOutsideClick: false,
                  didOpen:()=>{
                      Swal.showLoading()
                  }
              })
            }
            if (isSuccessupdateImgProduct) {
                Swal.fire({
                    icon: 'success',
                    title: 'successfull updated img'
                })
            }
            else if(isErrorupdateImgProduct){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: errorupdateImgProduct?.data.message,
                })
            }
        }, [isLoadingupdateImgProduct]);
    //#endregion UpdateImg

    //#region AddMoreImgs
        const handleAddImagesProduct=(ev)=>{
            console.log("add images product")
            ev.preventDefault();
            const formData=new FormData()
            formData.append("id", productToUpdate.id)
            const imgs=ev.target.files
            for (let index = 0; index < imgs.length; index++) {
                const element = imgs[index];
                console.log(element)
                formData.append("images", element)
            }
            addMoreImgs(formData)
        }
        useEffect(() => {
            if(isLoadingAddMoreImgs){
                Swal.fire({
                    title:'Loading',
                    allowEscapeKey: false,
                    allowOutsideClick: false,
                    didOpen:()=>{
                        Swal.showLoading()
                    }
                })
            }
            if (isSuccessAddMoreImgs) {
                Swal.fire({
                    icon: 'success',
                    title: 'successfull updated'
                })
            }
            else if(isErrorAddMoreImgs){
                console.log(errorAddMoreImgs)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: errorAddMoreImgs?.data.message,
                })
            }
        }, [isLoadingAddMoreImgs]);
    //#endregion AddMoreImgs

  return isSuccessProduct&&(
    <Modal isOpen={isOpenModalUpdate} 
      closeModal={closeModalUpdate}>
        <h4>Update Info Product</h4> 
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
            <ButtonAddModalStyle>Update</ButtonAddModalStyle>
            <h4>Update imgs Product</h4>
            {
                imgsProd?.length>=0 && imgsProd.length<=2 ?
                <>
                    <p>
                        <label htmlFor="image">Add more imgs to product: </label>
                        <br/>
                        <input type='file' 
                            name='image'
                            accept="image/png, image/jpeg"
                            multiple
                            onChange={handleAddImagesProduct}
                        />
                    </p>
                    <ContainerImgs imgsProd={imgsProd} 
                    deleteImg={deleteImg} updateImg={updateImg}/>
                </>
                :
                <ContainerImgs imgsProd={imgsProd} 
                deleteImg={deleteImg} updateImg={updateImg}/>  
            }
          </form>
          
      </Modal>
  )
}

export default UpdateProduct