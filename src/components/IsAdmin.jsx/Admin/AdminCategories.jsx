import React from 'react'
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
  const showModalCategories=()=>{
    alert("Admin Categories")
  }
  const searchCategories=(name)=>{
    console.log("name Categories", name)
  }
  const deleteCategory=(id)=>{
    console.log("deleteCategory", id)
  }
  const editCategory=(id)=>{
    console.log("editCategory", id)
  }
  return (
    <AdminCategoriesContainer>
      <SubNavbar showModal={showModalCategories} search={searchCategories}/>
      <hr/>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell >Name</TableCell>
            <TableCell >Description</TableCell>
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
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell >{row.name}</TableCell>
              <TableCell >{row.createdAt}</TableCell>
              <TableCell >{row.updatedAt}</TableCell>
              <TableCell >{row.createdAt}</TableCell>
              <TableCell ><ButtonAdmin title={'Edit'} 
                typeBtn={'Edit'} iconName={'Edit'} id={row.id}
                action={editCategory}> </ButtonAdmin>
              </TableCell>
              <TableCell ><ButtonAdmin title={'Delete'}
                typeBtn={'Delete'} iconName={'Delete'} id={row.id}
                action={deleteCategory}> </ButtonAdmin>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </AdminCategoriesContainer>
  )
}

export default AdminCategories





/*
 */