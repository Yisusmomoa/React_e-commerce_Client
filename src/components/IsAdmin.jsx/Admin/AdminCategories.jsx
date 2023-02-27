import React from 'react'
import styled from "styled-components";
import { device, deviceMin } from "../../../styles/breakpoints";
import SubNavbar from '../SubNavbar/SubNavbar';

const AdminCategoriesContainer=styled.div`
  width:100%;
  height:100%;
`
const AdminCategories = () => {
  const showModalCategories=()=>{
    alert("Admin Categories")
  }
  return (
    <AdminCategoriesContainer>
      <SubNavbar showModal={showModalCategories}/>
      <hr/>
      AdminBrands
    </AdminCategoriesContainer>
  )
}

export default AdminCategories