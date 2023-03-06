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
import Modal from '../Modal/Modal';
import ButtonAddModal from '../Modal/ButtonAddModal';
import DropdownCategory from '../../DropdownCategory/DropdownCategory';
import { Modal_InputStyled } from '../Modal/Modal.style';
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

  //Services
    //TODO: se puede implementar useMemo para no tener que estar trayendo a cada rato desde el backend
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
  //Services

  //combos
  const [brand, setBrand]=useState(1) //igualar a la primera posición
  //del arreglo que vendrá desde el back
  const [category, setCategory]=useState(1)
   //combos

  //modals
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
  //modals

  const searchProducts=(name)=>{
    console.log("name Product", name)
  }
  //Delete product
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
  //Delete product


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


// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
  {
    label: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  
  { label: 'Goodfellas', year: 1990 },
  { label: 'The Matrix', year: 1999 },
  { label: 'Seven Samurai', year: 1954 },
  {
    label: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { label: 'City of God', year: 2002 },
  { label: 'Se7en', year: 1995 },
  { label: 'The Silence of the Lambs', year: 1991 },
  { label: "It's a Wonderful Life", year: 1946 },
  {
    label: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    year: 1964,
  },
  { label: 'The Great Dictator', year: 1940 },
  { label: 'Cinema Paradiso', year: 1988 },
  { label: 'The Lives of Others', year: 2006 },
  { label: 'Grave of the Fireflies', year: 1988 },
  { label: 'Paths of Glory', year: 1957 },
  { label: 'Django Unchained', year: 2012 },
  { label: 'The Shining', year: 1980 },
  { label: 'WALL·E', year: 2008 },
  { label: 'American Beauty', year: 1999 },
  { label: 'The Dark Knight Rises', year: 2012 },
  { label: 'Princess Mononoke', year: 1997 },
  { label: 'Aliens', year: 1986 },
  { label: 'Oldboy', year: 2003 },
  
];
