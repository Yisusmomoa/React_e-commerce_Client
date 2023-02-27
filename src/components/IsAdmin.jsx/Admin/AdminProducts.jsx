import React from 'react'
import SubNavbar from '../SubNavbar/SubNavbar'
import styled from "styled-components";
import { device, deviceMin } from "../../../styles/breakpoints";
const AdminProductsContainer=styled.div`
  width:100%;
  height:100%;
`
const AdminProducts = () => {
  // desde aquí le mando la función para añadir un nuevo prod y me
  // debe de mostrar el modal para product
  const showModalProducts=()=>{
    alert("Admin products")
  }
  const searchProducts=(name)=>{
    console.log("name Product", name)
  }
  return (
    <AdminProductsContainer>
      <SubNavbar showModal={showModalProducts} search={searchProducts}/>
      <hr/>
      AdminProducts
    </AdminProductsContainer>
  )
}

export default AdminProducts