import React, { useEffect, useState } from 'react'
import { useGetAllBuysFromUserQuery } from '../state/store/service/BuyService'
import { Link } from 'react-router-dom'
import { MyOrdersContainer } from '../components/MyOrders/MyOrders.style'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const MyOrders = () => {
  const {
    data,
    isLoading,
    isSuccess,
    isError,
    error
  }=useGetAllBuysFromUserQuery()
    console.log("🚀 ~ file: MyOrders.jsx:21 ~ MyOrders ~ data:", data)
  
  return isSuccess&&(
    <TableContainer component={Paper} 
        sx={{ maxHeight: 550 }}
        style={{width:'70%'}}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell sx={{maxwidth:180}}>Purchase date</TableCell>
                <TableCell sx={{maxwidth:180}} >Products</TableCell>
                <TableCell sx={{maxwidth:180}} >Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((row) => (
                <TableRow key={row.id} 
                  component={Link}to={`/buy/${row.id}`} >
                  <TableCell component="th" scope="row">
                    {row.createdAt}
                  </TableCell>
                  <TableCell >{
                    row.Products.map(prod=>(
                      <p key={prod.id}>
                      {prod.name}
                      </p>
                    ))
                  }</TableCell>
                  <TableCell >{row.superTotal}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
      </TableContainer>
  )
}

export default MyOrders



/*
return isSuccess&&(
    <MyOrdersContainer>
      {
        data?.map(buy=>(
          <div key={buy.id} >
            <p>
              Fecha: {buy.createdAt} 
              Products: {buy.Products[0].name}
              Total: {buy.superTotal}
            </p>
            {buy.products}
            
          </div>
        ))
      }
    </MyOrdersContainer>
  )

*/