import React, { useEffect, useState } from 'react'
import SubNavbar from '../SubNavbar/SubNavbar'
import styled from "styled-components";
import { device, deviceMin } from "../../../styles/breakpoints";




import ButtonAdmin from './ButtonAdmin';
import { useModal } from '../../../state/hooks/useModal';

import { useDeleteProductMutation, useGetAllProductsQuery } from '../../../state/store/service/ProductService';
import { useGetAllBrandsQuery } from '../../../state/store/service/BrandService';
import { useGetAllCategoriesQuery } from '../../../state/store/service/CategoryService';
import AddProduct from './ProductModals/AddProduct';
import Swal from 'sweetalert2';
import UpdateProduct from './ProductModals/UpdateProduct';
import TableProduct from './Tables/TableProduct';

const AdminProductsContainer=styled.div`
  width:100%;
  height:100%;
`

const AdminProducts = () => {

  //#region Services
    const {
      data, isSuccess, isError,error
    }=useGetAllProductsQuery()
    const [dataState, setDataState] = useState([]);
    
    setDataState(data);

    const searchProducts=(name)=>{
      console.log("name Product", name)
      console.log(data)
      
      let filteredData = {}
      data.forEach(e => {
          if(e.includes(name))
          {
            filteredData.push(e);  
          }
      });
      setDataState(filteredData);
    }

    const {data:dataCateg, isError:isErrorCateg, 
      isSuccess:isSuccessCateg, error:errorCateg}=useGetAllCategoriesQuery()

    const {
      data:dataBrands, isSuccess:isSuccessBrand, 
      isError:isErrorBrand, error:errorBrand
    }=useGetAllBrandsQuery()

    const [
      deleteProduct,
      {isSuccess:isSuccessDelete,
      isLoading:isLoadingDelete,
      isError:isErrorDelete,
      error:errorDelete}
    ]=useDeleteProductMutation()
  //#endregion Services
 
  //#region Modals
    const [
      isOpenModalAdd,
      openModalAdd,
      closeModalAdd
    ]=useModal()

    const [productToUpdate, setProductToUpdate]=useState({})

    const [
      isOpenModalUpdate,
      openModalUpdate,
      closeModalUpdate
    ]=useModal()
  //#endregion Modals

  //#region DeleteProduct
    const handleDeleteProduct=(id)=>{
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          deleteProduct(id)  
        }
      })
    }

    useEffect(() => {
      if(isLoadingDelete){
          Swal.fire({
              title:'Loading',
              allowEscapeKey: false,
              allowOutsideClick: false,
              didOpen:()=>{
                  Swal.showLoading()
              }
          })
      }
      if (isSuccessDelete) {
        Swal.fire(
          'Deleted!',
          'Your register has been deleted.',
          'success'
        )
      }
      else if(isErrorDelete){
          console.log(errorDelete)
          Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: errorDelete?.data.message,
          })
      }
    }, [isLoadingDelete]);
  //#endregion DeleteProduct
  
  const editProduct=(data)=>{
  }

  setProductToUpdate(data)
  openModalUpdate()
  
  return (
    <AdminProductsContainer> 
      <AddProduct isOpenModalAdd={isOpenModalAdd} closeModalAdd={closeModalAdd}
        brands={dataBrands} categories={dataCateg?.results} />

      <UpdateProduct
        isOpenModalUpdate={isOpenModalUpdate} 
        closeModalUpdate={closeModalUpdate}
        brands={dataBrands} categories={dataCateg?.results} 
        productToUpdate={productToUpdate}
      />

      <SubNavbar showModal={openModalAdd} 
        search={searchProducts}
        title={'Products'}/>
      <hr/>
      
      <TableProduct data={dataState} editProduct={editProduct} handleDeleteProduct={handleDeleteProduct} />
      
    </AdminProductsContainer>
  )
}

export default AdminProducts
