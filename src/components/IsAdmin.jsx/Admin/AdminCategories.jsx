import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import styled from "styled-components";
import { device, deviceMin } from "../../../styles/breakpoints";

import SubNavbar from '../SubNavbar/SubNavbar';
import AddCategory from './CategoriesModals/AddCategory';
import UpdateCategory from './CategoriesModals/UpdateCategory';
import TableCategory from './Tables/TableCategory';

import { useModal } from '../../../state/hooks/useModal';

import { useDeleteCategoryMutation, useGetAllCategoriesQuery } from '../../../state/store/service/CategoryService';

const AdminCategoriesContainer=styled.div`
  width:100%;
  height:100%;
`

const AdminCategories = () => {
  //#region Service
    const {data, isError, isLoading, isSuccess, error}=useGetAllCategoriesQuery()
    const [deleteCategory,
      {isSuccess:isSuccessDelete, 
        isLoading:isLoadingDelete, 
        isError:isErrorDelete, 
        error:errorDelete}]=useDeleteCategoryMutation()
  //#endregion Service

  //#region Modals
    const [isOpenModalAdd, openModalAdd, closeModalAdd]=useModal()
    const [isOpenModalUpdate, openModalUpdate, closeModalUpdate]=useModal()
    const [categoryToUpdate, setCategoryToUpdate]=useState({})
  //#endregion Modals

  const searchCategories=(name)=>{
    console.log("name Categories", name)
  }

  //#region deleteCategory
    const handleDeleteCategory=(id)=>{
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
          deleteCategory(id)  
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
  //#endregion deleteCategory
  
  const editCategory=(data)=>{
    setCategoryToUpdate(data)
    openModalUpdate()
  }


  return (
    <>
      <AddCategory isOpenModalAdd={isOpenModalAdd} 
        closeModalAdd={closeModalAdd}/>

      <UpdateCategory isOpenModalUpdate={isOpenModalUpdate}
        closeModalUpdate={closeModalUpdate} 
        category={categoryToUpdate}/>

      <AdminCategoriesContainer>
        <SubNavbar showModal={openModalAdd} 
          search={searchCategories}
          title={'Categories'}/>
        <hr/>
        
        <TableCategory data={data} editCategory={editCategory} handleDeleteCategory={handleDeleteCategory}/>
               
      </AdminCategoriesContainer>

    </>
  )
}

export default AdminCategories





/*
 */