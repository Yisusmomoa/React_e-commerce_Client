import React from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ButtonAdmin from '../ButtonAdmin';


const TableProduct = ({data,editProduct, handleDeleteProduct }) => {
  return (
    <TableContainer component={Paper} 
        sx={{ maxHeight: 550 }}>
        <Table sx={{ minWidth: 850 }} stickyHeader >
          <TableHead>
            <TableRow>
              <TableCell >Id</TableCell>
              <TableCell >Name</TableCell>
              <TableCell >Description</TableCell>
              <TableCell >Price</TableCell>
              <TableCell >Category name</TableCell>
              <TableCell >Brand name</TableCell>
              <TableCell >createdAt</TableCell>
              <TableCell >updatedAt</TableCell>
              <TableCell >Edit</TableCell>
              <TableCell >Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody >
            {data?.map((row) => (
              <TableRow 
                key={row.id}
              >
                <TableCell component="th" scope="row" 
                  sx={{maxwidth:180}}>
                  {row.id}
                </TableCell>
                <TableCell sx={{maxwidth:180}}>{row.name}</TableCell>
                <TableCell sx={{maxwidth:180}}>{row.description}</TableCell>
                <TableCell sx={{maxwidth:180}}>{row.price}</TableCell>
                <TableCell sx={{maxwidth:180}}>{row.Category.name}</TableCell>
                <TableCell sx={{maxwidth:180}}>{row.ManuFacturer.name}</TableCell>
                <TableCell sx={{maxwidth:180}}>{row.createdAt}</TableCell>
                <TableCell sx={{maxwidth:180}}>{row.updatedAt}</TableCell>
                <TableCell sx={{width:280}}><ButtonAdmin title={'Edit'} 
                  typeBtn={'Edit'} iconName={'Edit'} data={row}
                  action={editProduct}> </ButtonAdmin>
                </TableCell>
                <TableCell sx={{width:280}}><ButtonAdmin title={'Delete'}
                  typeBtn={'Delete'} iconName={'Delete'} data={row.id}
                  action={handleDeleteProduct}> </ButtonAdmin>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  )
}

export default TableProduct