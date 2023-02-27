import React from 'react'
import styled from "styled-components";
import { device, deviceMin } from "../../../styles/breakpoints";
import SubNavbar from '../SubNavbar/SubNavbar';

const AdminBrandsContainer=styled.div`
  width:100%;
  height:100%;
`
const AdminBrands = () => {
  const showModalBrand=()=>{
    alert("Admin Brand")
  }
  const searchBrand=(name)=>{
    console.log("name Brand", name)
  }
  return (
    <AdminBrandsContainer>
      <SubNavbar showModal={showModalBrand} search={searchBrand}/>
      <hr/>
      AdminBrands
    </AdminBrandsContainer>
  )
}

export default AdminBrands