import React, { useEffect, useState } from 'react'
import SubNavbar from '../SubNavbar/SubNavbar'
import styled from "styled-components";
import { device, deviceMin } from "../../../styles/breakpoints";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


import ButtonAdmin from './ButtonAdmin';
import { useModal } from '../../../state/hooks/useModal';

import { useDeleteProductMutation, useGetAllProductsQuery } from '../../../state/store/service/ProductService';
import { useGetAllBrandsQuery } from '../../../state/store/service/BrandService';
import { useGetAllCategoriesQuery } from '../../../state/store/service/CategoryService';
import AddProduct from './ProductModals/AddProduct';
import Swal from 'sweetalert2';
import UpdateProduct from './ProductModals/UpdateProduct';

const AdminProductsContainer=styled.div`
  width:100%;
  height:100%;
`

const AdminProducts = () => {

  //#region Services
    const {
      data, isSuccess, isError,error
    }=useGetAllProductsQuery()

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



  const searchProducts=(name)=>{
    console.log("name Product", name)
  }

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
    setProductToUpdate(data)
    openModalUpdate()
  }
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
      <TableContainer component={Paper} 
        sx={{ maxHeight: 550 }}>
        <Table sx={{ minWidth: 850 }} stickyHeader >
          <TableHead>
            <TableRow>
              <TableCell >Id</TableCell>
              <TableCell >Name</TableCell>
              <TableCell >Description</TableCell>
              <TableCell >Price</TableCell>
              <TableCell >Category name</TableCell>
              <TableCell >Brand name</TableCell>
              <TableCell >createdAt</TableCell>
              <TableCell >updatedAt</TableCell>
              <TableCell >Edit</TableCell>
              <TableCell >Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody >
            {data?.map((row) => (
              <TableRow 
                key={row.id}
              >
                <TableCell component="th" scope="row" 
                  sx={{maxwidth:180}}>
                  {row.id}
                </TableCell>
                <TableCell sx={{maxwidth:180}}>{row.name}</TableCell>
                <TableCell sx={{maxwidth:180}}>{row.description}</TableCell>
                <TableCell sx={{maxwidth:180}}>{row.price}</TableCell>
                <TableCell sx={{maxwidth:180}}>{row.Category.name}</TableCell>
                <TableCell sx={{maxwidth:180}}>{row.ManuFacturer.name}</TableCell>
                <TableCell sx={{maxwidth:180}}>{row.createdAt}</TableCell>
                <TableCell sx={{maxwidth:180}}>{row.updatedAt}</TableCell>
                <TableCell sx={{width:280}}><ButtonAdmin title={'Edit'} 
                  typeBtn={'Edit'} iconName={'Edit'} data={row}
                  action={editProduct}> </ButtonAdmin>
                </TableCell>
                <TableCell sx={{width:280}}><ButtonAdmin title={'Delete'}
                  typeBtn={'Delete'} iconName={'Delete'} data={row.id}
                  action={handleDeleteProduct}> </ButtonAdmin>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </AdminProductsContainer>
  )
}

export default AdminProducts
