import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { device, deviceMin } from "../../../styles/breakpoints";
import SubNavbar from '../SubNavbar/SubNavbar';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ButtonAdmin from './ButtonAdmin';
import { useModal } from '../../../state/hooks/useModal';
import { useDeleteCategoryMutation, useGetAllCategoriesQuery } from '../../../state/store/service/CategoryService';
import AddCategory from './CategoriesModals/AddCategory';
import UpdateCategory from './CategoriesModals/UpdateCategory';
import Swal from 'sweetalert2'

const AdminCategoriesContainer=styled.div`
  width:100%;
  height:100%;
`

const AdminCategories = () => {
  //Service
    const {data, isError, isLoading, isSuccess, error}=useGetAllCategoriesQuery()
    const [deleteCategory,
      {isSuccess:isSuccessDelete, 
        isLoading:isLoadingDelete, 
        isError:isErrorDelete, 
        error:errorDelete}]=useDeleteCategoryMutation()
  //service

  //modals add. update
  const [isOpenModalAdd, openModalAdd, closeModalAdd]=useModal()
  const [isOpenModalUpdate, openModalUpdate, closeModalUpdate]=useModal()
  const [categoryToUpdate, setCategoryToUpdate]=useState({})
  //modals add, update

  const searchCategories=(name)=>{
    console.log("name Categories", name)
  }

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

        <TableContainer component={Paper} sx={{ maxHeight: 550 }}>
          <Table sx={{ minWidth: 650 }} stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell sx={{maxwidth:180}}>Id</TableCell>
                <TableCell sx={{maxwidth:180}} >Name</TableCell>
                <TableCell sx={{maxwidth:180}} >updatedAt</TableCell>
                <TableCell sx={{maxwidth:180}} >createdAt</TableCell>
                <TableCell sx={{width:280}}>Edit</TableCell>
                <TableCell sx={{width:280}}>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.results?.map((row) => (
                <TableRow
                  key={row.id}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell >{row.name}</TableCell>
                  <TableCell >{row.updatedAt}</TableCell>
                  <TableCell >{row.createdAt}</TableCell>
                  <TableCell ><ButtonAdmin title={'Edit'} 
                    typeBtn={'Edit'} iconName={'Edit'} data={row}
                    action={editCategory}> </ButtonAdmin>
                  </TableCell>
                  <TableCell ><ButtonAdmin title={'Delete'}
                    typeBtn={'Delete'} iconName={'Delete'} data={row.id}
                    action={handleDeleteCategory}> </ButtonAdmin>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        
      </AdminCategoriesContainer>

    </>
  )
}

export default AdminCategories





/*
 */