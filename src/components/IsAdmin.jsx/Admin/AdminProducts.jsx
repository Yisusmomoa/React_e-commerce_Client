import React from 'react'
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

const AdminProductsContainer=styled.div`
  width:100%;
  height:100%;
`
function createData(
  id,
  name,
  description,
  price,
  createdAt,
  updatedAt,
  categoryId,
  categoryName,
  brandId,
  brandName,
) {
  return { id, name, 
    description, price,
    createdAt, updatedAt, 
    categoryId, categoryName,
    brandId, brandName};
}

const rows = [
  createData(1, "Product1", "Descr prod jweorwqoerqw e9rhqwoeirgqw ierwgeoirgqwei1",390, 
    "27-01-2023", "27-01-2023", 1, "Category1", 2, "Brand2"),
    createData(2, "Product2", "Descr prod 2",390, 
    "27-01-2023", "27-01-2023", 2, "Category2", 2, "Brand2"),
    createData(3, "Product3", "Descr prod 3",390, 
    "27-01-2023", "27-01-2023", 3, "Category3", 1, "Brand1"),
    createData(4, "Product4", "Descr prod 4",390, 
    "27-01-2023", "27-01-2023", 1, "Category1", 3, "Brand3"),
    createData(5, "Product5", "Descr prod 5",390, 
    "27-01-2023", "27-01-2023", 4, "Category4", 2, "Brand2"),
    createData(6, "Product5", "Descr prod 5",390, 
    "27-01-2023", "27-01-2023", 4, "Category4", 2, "Brand2"),
    createData(7, "Product5", "Descr prod 5",390, 
    "27-01-2023", "27-01-2023", 4, "Category4", 2, "Brand2"),
    createData(8, "Product5", "Descr prod 5",390, 
    "27-01-2023", "27-01-2023", 4, "Category4", 2, "Brand2"),
    createData(9, "Product5", "Descr prod 5",390, 
    "27-01-2023", "27-01-2023", 4, "Category4", 2, "Brand2"),
    createData(10, "Product5", "Descr prod 5",390, 
    "27-01-2023", "27-01-2023", 4, "Category4", 2, "Brand2"),
    createData(11, "Product5", "Descr prod 5",390, 
    "27-01-2023", "27-01-2023", 4, "Category4", 2, "Brand2"),
    createData(12, "Product5", "Descr prod 5",390, 
    "27-01-2023", "27-01-2023", 4, "Category4", 2, "Brand2"),
    createData(13, "Product5", "Descr prod 5",390, 
    "27-01-2023", "27-01-2023", 4, "Category4", 2, "Brand2"),
    createData(14, "Product5", "Descr prod 5",390, 
    "27-01-2023", "27-01-2023", 4, "Category4", 2, "Brand2"),
];
const AdminProducts = () => {
  // desde aquí le mando la función para añadir un nuevo prod y me
  // debe de mostrar el modal para product
  const showModalProducts=()=>{
    alert("Admin products")
  }
  const searchProducts=(name)=>{
    console.log("name Product", name)
  }
  const deletProduct=(id)=>{
    console.log("deletProduct", id)
  }
  const editProduct=(id)=>{
    console.log("editProduct", id)
  }
  return (
    <AdminProductsContainer>
      <SubNavbar showModal={showModalProducts} 
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
              <TableCell >updatedAt</TableCell>
              <TableCell >Edit</TableCell>
              <TableCell >Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody >
            {rows.map((row) => (
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
                <TableCell sx={{maxwidth:180}}>{row.categoryName}</TableCell>
                <TableCell sx={{maxwidth:180}}>{row.brandName}</TableCell>
                <TableCell sx={{maxwidth:180}}>{row.updatedAt}</TableCell>
                <TableCell sx={{width:280}}><ButtonAdmin title={'Edit'} 
                  typeBtn={'Edit'} iconName={'Edit'} id={row.id}
                  action={editProduct}> </ButtonAdmin>
                </TableCell>
                <TableCell sx={{width:280}}><ButtonAdmin title={'Delete'}
                  typeBtn={'Delete'} iconName={'Delete'} id={row.id}
                  action={deletProduct}> </ButtonAdmin>
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