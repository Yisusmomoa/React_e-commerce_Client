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

const AdminCategoriesContainer=styled.div`
  width:100%;
  height:100%;
`

function createData(
  id,
  name,
  createdAt,
  updatedAt,
) {
  return { id, name, createdAt, updatedAt };
}

const rows = [
  createData(1, "Categoria1", 6.0,1.0),
  createData(2, "Categoria2", 9.0,1.0),
  createData(3, "Categoria3", 16.0,1.0 ),
  createData(4, "Categoria4", 3.7, 10),
  createData(5, "Categoria5", 16.0, 5),
];

const AdminCategories = () => {
  const [isOpenModalAdd, openModalAdd, closeModalAdd]=useModal()
  const [isOpenModalUpdate, openModalUpdate, closeModalUpdate]=useModal()
  const [categoryToUpdate, setCategoryToUpdate]=useState({})
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
      <Modal isOpen={isOpenModalAdd} 
      closeModal={closeModalAdd}>
        <h4>Add category</h4>
        <form action=''>
          <p>
            <label htmlFor="CategoryName">Category name: </label>
            <input type='text' name='CategoryName' />
          </p>
          <ButtonAddModal/>
        </form>
      </Modal>

      <Modal isOpen={isOpenModalUpdate}
        closeModal={closeModalUpdate} >
        <h4>Update</h4>
        <form action=''>
          <p>
            <label>{categoryToUpdate.name}</label>
            <label htmlFor="CategoryName">Category name: </label>
            <input type='text' name='CategoryName' />
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
              {rows.map((row) => (
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
                    typeBtn={'Delete'} iconName={'Delete'} data={row}
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