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
import { Modal_InputStyled } from '../Modal/Modal.style';
import { useGetAllBrandsQuery } from '../../../state/store/service/BrandService';
import AddBrand from './BrandModals/AddBrand';


const AdminBrandsContainer=styled.div`
  width:100%;
  height:100%;
`

const AdminBrands = () => {

  //Services
    const {
      data, isSuccess,isLoading, isError,error
    }=useGetAllBrandsQuery()
  //Services

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
      <AddBrand isOpenModalAdd={isOpenModalAdd}
        closeModalAdd={closeModalAdd}/>
        
      <Modal isOpen={isOpenModalUpdate} 
        closeModal={closeModalUpdate}>
        <h4>Update brand</h4>
          <form action=''>
            <p>
              <label htmlFor="BrandName">Brand name: </label>
              <Modal_InputStyled type='text' name='BrandName' />
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
              <TableCell >Img</TableCell>
              <TableCell >updatedAt</TableCell>
              <TableCell >createdAt</TableCell>
              <TableCell >Edit</TableCell>
              <TableCell >Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row) => (
              <TableRow
                key={row.id}
              >
                <TableCell component="th" 
                  scope="row"
                  sx={{maxwidth:180}}>
                  {row.id}
                </TableCell>
                <TableCell sx={{maxwidth:180}}>{row.name}</TableCell>
                <TableCell sx={{maxwidth:180}}><img src={row.imgManuFacturer} height={"35px"} width={"35px"}/></TableCell>
                <TableCell sx={{maxwidth:180}}>{row.updatedAt}</TableCell>
                <TableCell sx={{maxwidth:180}}>{row.createdAt}</TableCell>
                <TableCell sx={{width:280}}><ButtonAdmin title={'Edit'} 
                  typeBtn={'Edit'} iconName={'Edit'} data={row}
                  action={editBrand}> </ButtonAdmin>
                </TableCell>
                <TableCell sx={{width:280}}><ButtonAdmin title={'Delete'}
                  typeBtn={'Delete'} iconName={'Delete'} data={row.id}
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