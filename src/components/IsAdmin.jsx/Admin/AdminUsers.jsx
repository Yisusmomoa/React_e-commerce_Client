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
import { Modal_InputStyled } from '../Modal/Modal.style';
import ButtonAddModal from '../Modal/ButtonAddModal';
import Checkbox from '@mui/material/Checkbox';

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
    true, "27-01-2023", "27-01-2023", ),
  createData(2, "user2", "user2@gmail.com","normal", 
    true, "27-01-2023", "27-01-2023", ),
  createData(3, "user3", "user3@gmail.com","normal", 
    false, "27-01-2023", "27-01-2023", ),
  createData(4, "user4", "user4@gmail.com","normal", 
    true, "27-01-2023", "27-01-2023", ),
  createData(5, "user5", "user5@gmail.com","Admin", 
    true, "27-01-2023", "27-01-2023", ),
  createData(6, "user6", "user6@gmail.com","normal", 
    false, "27-01-2023", "27-01-2023", ),
  createData(7, "user7", "user7@gmail.com","normal", 
    false, "27-01-2023", "27-01-2023", ),
    
];

const AdminUsers = () => {
  const [
    isOpenModalAdd, 
    openModalAdd, 
    closeModalAdd]=useModal()
  const [
    isOpenModalUpdate, 
    openModalUpdate, 
    closeModalUpdate]=useModal()

  const [userToUpdate, setUserToUpdate]=useState({})
  const [rol, setRol]=useState(1)
  const [isActive, setIsActive]=useState(true)

  const searchUsers=(name)=>{
    console.log("name Users", name)
  }
  const deletUser=(id)=>{
    console.log("deletUser", id)
  }
  const statusUser=(id, status)=>{
    console.log(id)
    console.log(status)
    setIsActive(status)
  }
  const editUser=(data)=>{
    setUserToUpdate(data)
    openModalUpdate()
    console.log("editUser", data)
  }
  return (
    <AdminUsersContainer>
      <Modal isOpen={isOpenModalAdd} 
      closeModal={closeModalAdd}>
        <h4>Add user</h4>
        <form action=''>
        <p>
            <label htmlFor="username">Username: </label>
            <Modal_InputStyled type='text' name='username' />
          </p>
          <p>
            <label htmlFor="password">Password: </label>
            <Modal_InputStyled type='text' name='password' />
          </p>
          <p>
            <label htmlFor="email">Email: </label>
            <Modal_InputStyled type='email' name='email' />
          </p>
          <p>
              <label>
                Rol 
                <select value={rol} onChange={(ev)=>setRol(ev.target.value)}>
                  <option value="1">Admin</option>
                  <option value="2">Normal</option>
                  
                </select>
              </label>
          </p>
          <ButtonAddModal/>
        </form>
      </Modal>

      <Modal isOpen={isOpenModalUpdate} 
        closeModal={closeModalUpdate}>
        <h4>Edit User</h4>
        <form action=''>
          <p>
            <label htmlFor="username">Username: </label>
            <Modal_InputStyled type='text' name='username' />
          </p>
          <p>
            <label htmlFor="password">Password: </label>
            <Modal_InputStyled type='text' name='password' />
          </p>
          <p>
            <label htmlFor="email">Email: </label>
            <Modal_InputStyled type='email' name='email' />
          </p>
          <p>
              <label>
                Rol 
                <select value={rol} onChange={(ev)=>setRol(ev.target.value)}>
                  <option value="1">Admin</option>
                  <option value="2">Normal</option>
                  
                </select>
              </label>
          </p>

          <ButtonAddModal/>
        </form>
      </Modal>

      <SubNavbar showModal={openModalAdd} 
        search={searchUsers}
        title={'Users'}/>
      <hr/>
      <TableContainer component={Paper} 
        sx={{ maxHeight: 550 }}>
        <Table sx={{ minWidth: 850 }} 
         stickyHeader >
          <TableHead>
            <TableRow>
              <TableCell>Active</TableCell>
              <TableCell>Id</TableCell>
              <TableCell >username</TableCell>
              <TableCell >email</TableCell>
              <TableCell >role</TableCell>
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
              <TableCell sx={{maxwidth:150}}>
                <Checkbox onChange={(ev)=>statusUser(row.id, ev.target.checked)}
                checked={isActive} />
              </TableCell>
                <TableCell component="th" 
                  scope="row"
                  sx={{maxwidth:150}}>
                  {row.id}
                </TableCell>
                <TableCell sx={{maxwidth:150}}>{row.username}</TableCell>
                <TableCell sx={{maxwidth:150}}>{row.email}</TableCell>
                <TableCell sx={{maxwidth:150}}>{row.role}</TableCell>
                <TableCell sx={{maxwidth:150}}>{row.updatedAt}</TableCell>
                <TableCell sx={{maxwidth:150}}>{row.createdAt}</TableCell>
                <TableCell sx={{width:340}}><ButtonAdmin title={'Edit'} 
                  typeBtn={'Edit'} iconName={'Edit'} data={row}
                  action={editUser}> </ButtonAdmin>
                </TableCell>
                <TableCell sx={{width:340}}><ButtonAdmin title={'Delete'}
                  typeBtn={'Delete'} iconName={'Delete'} data={row.id}
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