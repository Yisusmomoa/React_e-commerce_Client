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


const AdminUsersContainer=styled.div`
  width:100%;
  height:100%;
`
function createData(
  id,
  username,
  email,
  role,
  isActive,
  createdAt,
  updatedAt,
) {
  return { id, username, 
    email, role,
    isActive,
    createdAt, updatedAt};
}

const rows = [
  createData(1, "user1", "user1@gmail.com","Admin", 
    "true", "27-01-2023", "27-01-2023", ),
  createData(2, "user2", "user2@gmail.com","normal", 
    "true", "27-01-2023", "27-01-2023", ),
  createData(3, "user3", "user3@gmail.com","normal", 
    "true", "27-01-2023", "27-01-2023", ),
  createData(4, "user4", "user4@gmail.com","normal", 
    "true", "27-01-2023", "27-01-2023", ),
  createData(5, "user5", "user5@gmail.com","Admin", 
    "true", "27-01-2023", "27-01-2023", ),
  createData(6, "user6", "user6@gmail.com","normal", 
    "true", "27-01-2023", "27-01-2023", ),
  createData(7, "user7", "user7@gmail.com","normal", 
    "true", "27-01-2023", "27-01-2023", ),
    
];

const AdminUsers = () => {
  const showModalUsers=()=>{
    alert("Admin Users")
  }
  const searchUsers=(name)=>{
    console.log("name Users", name)
  }
  const deletUser=(id)=>{
    console.log("deletUser", id)
  }
  const editUser=(id)=>{
    console.log("editUser", id)
  }
  return (
    <AdminUsersContainer>
      <SubNavbar showModal={showModalUsers} 
        search={searchUsers}
        title={'Users'}/>
      <hr/>
      <TableContainer component={Paper} 
        sx={{ maxHeight: 550 }}>
        <Table sx={{ minWidth: 850 }} 
         stickyHeader >
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell >username</TableCell>
              <TableCell >email</TableCell>
              <TableCell >role</TableCell>
              <TableCell >isActive</TableCell>
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
                  sx={{maxwidth:150}}>
                  {row.id}
                </TableCell>
                <TableCell sx={{maxwidth:150}}>{row.username}</TableCell>
                <TableCell sx={{maxwidth:150}}>{row.email}</TableCell>
                <TableCell sx={{maxwidth:150}}>{row.role}</TableCell>
                <TableCell sx={{maxwidth:150}}>{row.isActive}</TableCell>
                <TableCell sx={{maxwidth:150}}>{row.updatedAt}</TableCell>
                <TableCell sx={{maxwidth:150}}>{row.createdAt}</TableCell>
                <TableCell sx={{width:340}}><ButtonAdmin title={'Edit'} 
                  typeBtn={'Edit'} iconName={'Edit'} id={row.id}
                  action={editUser}> </ButtonAdmin>
                </TableCell>
                <TableCell sx={{width:340}}><ButtonAdmin title={'Delete'}
                  typeBtn={'Delete'} iconName={'Delete'} id={row.id}
                  action={deletUser}> </ButtonAdmin>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </AdminUsersContainer>
  )
}

export default AdminUsers