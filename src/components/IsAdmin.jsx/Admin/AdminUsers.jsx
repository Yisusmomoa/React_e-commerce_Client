import React from 'react'
import styled from "styled-components";
import { device, deviceMin } from "../../../styles/breakpoints";
import SubNavbar from '../SubNavbar/SubNavbar';

const AdminUsersContainer=styled.div`
  width:100%;
  height:100%;
`
const AdminUsers = () => {
  const showModalUsers=()=>{
    alert("Admin Users")
  }
  return (
    <AdminUsersContainer>
      <SubNavbar showModal={showModalUsers}/>
      <hr/>
      AdminBrands
    </AdminUsersContainer>
  )
}

export default AdminUsers