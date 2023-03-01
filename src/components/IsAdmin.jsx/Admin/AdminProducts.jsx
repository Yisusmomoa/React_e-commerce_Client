import React, { useState } from 'react'
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
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


import ButtonAdmin from './ButtonAdmin';
import { useModal } from '../../../state/hooks/useModal';
import Modal from '../Modal/Modal';
import ButtonAddModal from '../Modal/ButtonAddModal';
import DropdownCategory from '../../DropdownCategory/DropdownCategory';

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
  
  const [brand, setBrand]=useState(1) //igualar a la primera posición
  //del arreglo que vendrá desde el back
  const [category, setCategory]=useState(1)
  const [
    isOpenModalAdd,
    openModalAdd,
    closeModalAdd
  ]=useModal()

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
      <Modal isOpen={isOpenModalAdd} closeModal={closeModalAdd}>
        <h4>Add Product</h4>
          <form action=''>
            <p>
              <label htmlFor="ProductName">Product name: </label>
              <input type='text' name='ProductName' />
            </p>
            <p>
              <label htmlFor="DescriptionName">Description: </label>
              <input type='text' name='DescriptionName' />
            </p>
            <p>
              <label htmlFor="PriceName">Price: </label>
              <input type='number' name='PriceName' />
            </p>
            <p>
              <label>
                Brand 
                <select value={brand} onChange={(ev)=>setBrand(ev.target.value)}>
                  <option value="1">Brand1</option>
                  <option value="2">Brand2</option>
                  <option value="3">Brand2</option>
                </select>
              </label>
            </p>
            <p>
              <label>
                  Category 
                  <select value={category} onChange={(ev)=>setCategory(ev.target.value)}>
                    <option value="1">Category1</option>
                    <option value="2">Category2</option>
                    <option value="3">Category3</option>
                  </select>
                </label>
            </p>
            <p>
              <label htmlFor="imgBrand">First product Img: </label>
              <input type='file' name='imgBrand'/>
            </p>
            <p>
              <label htmlFor="imgBrand">Second product Img: </label>
              <input type='file' name='imgBrand'/>
            </p>
            <p>
              <label htmlFor="imgBrand">Third product Img: </label>
              <input type='file' name='imgBrand'/>
            </p>
            <ButtonAddModal/>
          </form>
      </Modal>
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
