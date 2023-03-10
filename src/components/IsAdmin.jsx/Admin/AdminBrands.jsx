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
import Modal from '../Modal/Modal';
import ButtonAddModal from '../Modal/ButtonAddModal';
import { Modal_InputStyled } from '../Modal/Modal.style';
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
      {/* <TableContainer component={Paper} 
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
                  action={handleDeleteBrand}> </ButtonAdmin>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}

    </AdminBrandsContainer>
  )
}

export default AdminBrands