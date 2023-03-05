import React, { useState } from 'react'
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
import Modal from '../Modal/Modal';
import { useModal } from '../../../state/hooks/useModal';
import ButtonAddModal from '../Modal/ButtonAddModal';
import { Modal_InputStyled } from '../Modal/Modal.style';
import { useGetAllCategoriesQuery } from '../../../state/store/service/CategoryService';
import AddCategory from './CategoriesModals/AddCategory';

const AdminCategoriesContainer=styled.div`
  width:100%;
  height:100%;
`

const AdminCategories = () => {
  //Service
    const {data, isError, isLoading, isSuccess, error}=useGetAllCategoriesQuery()
   
  //service

  //modals add. update
  const [isOpenModalAdd, openModalAdd, closeModalAdd]=useModal()
  const [isOpenModalUpdate, openModalUpdate, closeModalUpdate]=useModal()
  const [categoryToUpdate, setCategoryToUpdate]=useState({})
  //modals add, update

 const searchCategories=(name)=>{
    console.log("name Categories", name)
  }
  const deleteCategory=(id)=>{
    console.log("deleteCategory", id)
  }
  const editCategory=(data)=>{
    setCategoryToUpdate(data)
    openModalUpdate()
    console.log("editCategory", data)
  }
  return (
    <>
      <AddCategory isOpenModalAdd={isOpenModalAdd} 
        closeModalAdd={closeModalAdd}/>

      <Modal isOpen={isOpenModalUpdate}
        closeModal={closeModalUpdate} >
        <h4>Update</h4>
        <form action=''>
          <p>
            <label>{categoryToUpdate.name}</label>
            <label htmlFor="CategoryName">Category name: </label>
            <Modal_InputStyled type='text' name='CategoryName' />
          </p>
          <ButtonAddModal/>
        </form>
      </Modal>

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
                    action={deleteCategory}> </ButtonAdmin>
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