import React from 'react'
import styled from 'styled-components'
import SubNavbar from '../SubNavbar/SubNavbar'
import { useModal } from '../../../state/hooks/useModal'
import Swal from 'sweetalert2';
import TableSale from './Tables/TableSale';
const AdminSalesContainer=styled.div`
  width:100%;
  height:100%;
`
const AdminSales = () => {
//#region Modals
  const [
    isOpenModalAdd,
    openModalAdd,
    closeModalAdd
  ]=useModal()

  const [
    isOpenModalUpdate,
    openModalUpdate,
    closeModalUpdate
  ]=useModal()
//#endregion Modals

//#region DeleteProduct
const handleDeleteProduct=(id)=>{
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      deleteProduct(id)  
    }
  })
}

//#endregion DeleteProduct

  const searchSales=(name)=>{
    //es donde vas a implementar el endpoint de searchProducts
    console.log("name sale", name)
    console.log(data)
  }
  const editSale=(data)=>{
    openModalUpdate()
  }
  return (
    <AdminSalesContainer>
       <SubNavbar showModal={openModalAdd} 
        search={searchProducts}
        title={'Sales'}/>
      <hr/>
      <TableSale data={data} 
        editSale={editSale}
        handleDeleteProduct={}/>
    </AdminSalesContainer>
  )
}

export default AdminSales