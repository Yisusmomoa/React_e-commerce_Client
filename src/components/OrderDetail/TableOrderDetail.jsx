import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TableOrderDetail = ({order}) => {
  return (
    <TableContainer component={Paper} 
    sx={{ Height: '100vh' }}
    style={{width:'100%'}}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell sx={{maxwidth:180}}>Product name</TableCell>
            <TableCell sx={{maxwidth:180}} >Quantity</TableCell>
            <TableCell sx={{maxwidth:180}} >Price</TableCell>
            <TableCell sx={{maxwidth:180}} >Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {order?.Products?.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell >{row.DetailBuy.cantidad}</TableCell>
              <TableCell >{row.price}</TableCell>
              <TableCell >{row.DetailBuy.totalProd}</TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell />
            <TableCell />
            <TableCell >Subtotal</TableCell>
            <TableCell >{order?.subTotal}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell />
            <TableCell />
            <TableCell >Total</TableCell>
            <TableCell >{order?.superTotal}</TableCell>
          </TableRow>

        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableOrderDetail