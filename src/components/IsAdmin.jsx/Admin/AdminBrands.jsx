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
import { useModal } from '../../../state/hooks/useModal';
import Modal from '../Modal/Modal';
import ButtonAddModal from '../Modal/ButtonAddModal';

const AdminBrandsContainer=styled.div`
  width:100%;
  height:100%;
`

function createData(
  id,
  name,
  imgBrand,
  createdAt,
  updatedAt,
) {
  return { id, name,imgBrand, createdAt, updatedAt };
}

const rows = [
  createData(1, "Brand1", "imgBrand1",6.0,1.0),
  createData(2, "Brand2","imgBrand2", 9.0,1.0),
  createData(3, "Brand3","imgBrand3", 16.0,1.0 ),
  createData(4, "Brand4","imgBrand4", 3.7, 10),
  createData(5, "Brand5","imgBrand5", 16.0, 5),
];

const AdminBrands = () => {
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

  const [brandToUpdate, setBrandToUpdate]=useState({})

  const searchBrand=(name)=>{
    console.log("name Brand", name)
  }
  const deleteBrand=(id)=>{
    console.log("deleteBrand", id)
  }
  const editBrand=(data)=>{
    setBrandToUpdate(data)
    openModalUpdate()
    console.log("editBrand", data)
  }
  return (
    <AdminBrandsContainer>
      <Modal isOpen={isOpenModalAdd} closeModal={closeModalAdd}>
        <h4>Add brand</h4>
          <form action=''>
            <p>
              <label htmlFor="BrandName">Brand name: </label>
              <input type='text' name='BrandName' />
            </p>
            <p>
              <label htmlFor="imgBrand">Brand Img: </label>
              <input type='file' name='imgBrand'/>
            </p>
            <ButtonAddModal/>
          </form>
      </Modal>

      <Modal isOpen={isOpenModalUpdate} 
        closeModal={closeModalUpdate}>
        <h4>Update brand</h4>
          <form action=''>
            <p>
              <label htmlFor="BrandName">Brand name: </label>
              <input type='text' name='BrandName' />
            </p>
            <p>
              <label htmlFor="imgBrand">Brand Img: </label>
              <input type='file' name='imgBrand'/>
            </p>
            <ButtonAddModal/>
          </form>
      </Modal>
      <SubNavbar showModal={openModalAdd} 
        search={searchBrand} title={'Brands'}/>
      <hr/>
      <TableContainer component={Paper} 
        sx={{ maxHeight: 550 }}>
        <Table sx={{ minWidth: 850 }} 
         stickyHeader >
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell >Name</TableCell>
              <TableCell >updatedAt</TableCell>
              <TableCell >createdAt</TableCell>
              <TableCell >Edit</TableCell>
              <TableCell >Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
              >
                <TableCell component="th" 
                  scope="row"
                  sx={{maxwidth:180}}>
                  {row.id}
                </TableCell>
                <TableCell sx={{maxwidth:180}}>{row.name}</TableCell>
                <TableCell sx={{maxwidth:180}}>{row.updatedAt}</TableCell>
                <TableCell sx={{maxwidth:180}}>{row.createdAt}</TableCell>
                <TableCell sx={{width:280}}><ButtonAdmin title={'Edit'} 
                  typeBtn={'Edit'} iconName={'Edit'} data={row}
                  action={editBrand}> </ButtonAdmin>
                </TableCell>
                <TableCell sx={{width:280}}><ButtonAdmin title={'Delete'}
                  typeBtn={'Delete'} iconName={'Delete'} data={row}
                  action={deleteBrand}> </ButtonAdmin>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </AdminBrandsContainer>
  )
}

export default AdminBrands