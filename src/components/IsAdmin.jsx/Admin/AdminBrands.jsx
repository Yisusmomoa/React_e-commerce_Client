import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { device, deviceMin } from "../../../styles/breakpoints";
import SubNavbar from '../SubNavbar/SubNavbar';

import { useModal } from '../../../state/hooks/useModal';

import { useDeleteBrandMutation, useGetAllBrandsQuery } from '../../../state/store/service/BrandService';
import AddBrand from './BrandModals/AddBrand';
import Swal from 'sweetalert2';
import UpdateBrand from './BrandModals/UpdateBrand';
import TableBrand from './Tables/TableBrand';


const AdminBrandsContainer=styled.div`
  width:100%;
  height:100%;
`

const AdminBrands = () => {

  //#region Services
    const {
      data, isSuccess,isLoading, isError,error
    }=useGetAllBrandsQuery()
    const [
      deleteBrand,
      {isSuccess:isSuccessDelete,
      isLoading:isLoadingDelete,
      isError:isErrorDelete,
      error:errorDelete}
    ]=useDeleteBrandMutation()
  //#endregion Services

  //#region Modals
    const [
      isOpenModalAdd,
      openModalAdd,
      closeModalAdd
    ]=useModal()

    const [
      isOpenModalUpdate,
      openModalUpdate,
      closeModalUpdate
    ]=useModal()
  //#endregion Modals

  const searchBrand=(name)=>{
    console.log("name Brand", name)
  }

  //#region deleteBrand
    const handleDeleteBrand=(id)=>{
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
          deleteBrand(id)  
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
  //#endregion deleteBrand

  //#region editBrand
    const [brandToUpdate, setBrandToUpdate]=useState({})
    const editBrand=(data)=>{
      setBrandToUpdate(data)
      openModalUpdate()
    }
  //#endregion editBrand

  return (
    <AdminBrandsContainer>
      <AddBrand isOpenModalAdd={isOpenModalAdd}
        closeModalAdd={closeModalAdd}/>
      
      <UpdateBrand
        isOpenModalUpdate={isOpenModalUpdate}
        closeModalUpdate={closeModalUpdate}
        brandToUpdate={brandToUpdate}
      />
     
      <SubNavbar showModal={openModalAdd} 
        search={searchBrand} title={'Brands'}/>
      <hr/>
      <TableBrand data={data} editBrand={editBrand} handleDeleteBrand={handleDeleteBrand}/>
      
    </AdminBrandsContainer>
  )
}

export default AdminBrands