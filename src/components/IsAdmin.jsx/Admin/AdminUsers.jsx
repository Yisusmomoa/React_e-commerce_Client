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
import { Modal_InputStyled } from '../Modal/Modal.style';
import ButtonAddModal from '../Modal/ButtonAddModal';
import Checkbox from '@mui/material/Checkbox';
import { useDesactivateUserAdminMutation, useGetAllUsersQuery } from '../../../state/store/service/UserService';
import Swal from 'sweetalert2';
import UpdateUser from './UserModals/UpdateUser';

const AdminUsersContainer=styled.div`
  width:100%;
  height:100%;
`

const AdminUsers = () => {

  //Services
    const {data, isSuccess, 
      isError, isLoading, error}=useGetAllUsersQuery()
    console.log("data", data)
    const [desactivateUserAdmin, {isLoading:isLoadingDesactivate,
      isSuccess:isSuccessDesactivate,
      isError:isErrorDesactivate,
      error:errorDesactivate }]=useDesactivateUserAdminMutation()
  //Services

  //Modals
  const [
    isOpenModalAdd, 
    openModalAdd, 
    closeModalAdd]=useModal()
  const [
    isOpenModalUpdate, 
    openModalUpdate, 
    closeModalUpdate, setIsOpenUpdate]=useModal()
  //Modals

  const [userToUpdate, setUserToUpdate]=useState(0)
  const [rol, setRol]=useState(1)

  const searchUsers=(name)=>{
    console.log("name Users", name)
  }
  const handleDesactivateUser=(id, status)=>{
    desactivateUserAdmin(id)
  }
  const editUser=(data)=>{
    setUserToUpdate(data)
    openModalUpdate()
  }
  
  useEffect(() => {
    if(isLoadingDesactivate){
      Swal.fire({
        title:'Loading',
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen:()=>{
            Swal.showLoading()
        }
      })
    }
    if (isSuccessDesactivate) {
      Swal.fire(
        'Desactivated!',
        'Your register has been desactivated.',
        'success'
      )
    }
    else if(isErrorDesactivate){
      console.log(errorDesactivate)
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: errorDesactivate?.data.message,
      })
  }
  }, [isLoadingDesactivate]);

 
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

    <UpdateUser isOpenModalUpdate={isOpenModalUpdate} 
        closeModalUpdate={closeModalUpdate} data={userToUpdate}/>

      {/* <Modal isOpen={isOpenModalUpdate} 
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
      </Modal> */}

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
              {/* <TableCell >Delete</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row) => (
              <TableRow
                key={row.id}>
              <TableCell sx={{maxwidth:150}}>
                <Checkbox 
                  onChange={(ev)=>handleDesactivateUser(row.id, ev.target.checked)}
                checked={row.isActive} />
              </TableCell>
                <TableCell component="th" 
                  scope="row"
                  sx={{maxwidth:150}}>
                  {row.id}
                </TableCell>
                <TableCell sx={{maxwidth:150}}>{row.username}</TableCell>
                <TableCell sx={{maxwidth:150}}>{row.email}</TableCell>
                <TableCell sx={{maxwidth:150}}>{row.RolId===1?'Admin':'Normal'}</TableCell>
                <TableCell sx={{maxwidth:150}}>{row.updatedAt}</TableCell>
                <TableCell sx={{maxwidth:150}}>{row.createdAt}</TableCell>
                <TableCell sx={{width:240}}><ButtonAdmin title={'Edit'} 
                  typeBtn={'Edit'} iconName={'Edit'} data={row}
                  action={editUser}> </ButtonAdmin>
                </TableCell>
                {/* <TableCell sx={{width:340}}><ButtonAdmin title={'Delete'}
                  typeBtn={'Delete'} iconName={'Delete'} data={row.id}
                  action={deletUser}> </ButtonAdmin>
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </AdminUsersContainer>
  )
}

export default AdminUsers