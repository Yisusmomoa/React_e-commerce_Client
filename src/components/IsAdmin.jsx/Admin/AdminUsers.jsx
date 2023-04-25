import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { device, deviceMin } from "../../../styles/breakpoints";
import SubNavbar from '../SubNavbar/SubNavbar';


import { useModal } from '../../../state/hooks/useModal';
import Modal from '../Modal/Modal';
import { Modal_InputStyled } from '../Modal/Modal.style';
import ButtonAddModal from '../Modal/ButtonAddModal';

import { useDesactivateUserAdminMutation, useGetAllUsersQuery } from '../../../state/store/service/UserService';
import Swal from 'sweetalert2';
import UpdateUser from './UserModals/UpdateUser';
import TableUser from './Tables/TableUser';

const AdminUsersContainer=styled.div`
  width:100%;
  height:100%;
`

const AdminUsers = () => {

  //#region Services
    const {data, isSuccess, 
      isError, isLoading, error}=useGetAllUsersQuery()
    console.log("data", data)
    const [desactivateUserAdmin, {isLoading:isLoadingDesactivate,
      isSuccess:isSuccessDesactivate,
      isError:isErrorDesactivate,
      error:errorDesactivate }]=useDesactivateUserAdminMutation()
  //#endregion Services
  
  //#region Modals
    const [
      isOpenModalAdd, 
      openModalAdd, 
      closeModalAdd]=useModal()
    const [
      isOpenModalUpdate, 
      openModalUpdate, 
      closeModalUpdate, setIsOpenUpdate]=useModal()
  //#endregion Modals

  const [rol, setRol]=useState(1)

  const searchUsers=(name)=>{
    console.log("name Users", name)
  }

  //#region desactivateUserAdmin
    const handleDesactivateUser=(id, status)=>{
      desactivateUserAdmin(id)
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
  //#endregion desactivateUserAdmin

  //#region EditUser
    const [userToUpdate, setUserToUpdate]=useState(0)
    const editUser=(data)=>{
      setUserToUpdate(data)
      openModalUpdate()
    }
  //#endregion EditUser
  
  

 
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

      <SubNavbar showModal={openModalAdd} 
        search={searchUsers}
        title={'Users'}/>
      <hr/>
      <TableUser data={data} handleDesactivateUser={handleDesactivateUser} editUser={editUser} />
      
    </AdminUsersContainer>
  )
}

export default AdminUsers