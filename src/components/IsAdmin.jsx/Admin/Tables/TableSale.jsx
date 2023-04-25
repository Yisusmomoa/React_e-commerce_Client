import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ButtonAdmin from '../ButtonAdmin';
const TableSale = ({data,editSale, handleDeleteSale }) => {
  return (
    <TableContainer component={Paper} 
        sx={{ maxHeight: 550 }}>
        <Table sx={{ minWidth: 850 }} stickyHeader >
          <TableHead>
            <TableRow>
              <TableCell >Id</TableCell>
              <TableCell >Name product</TableCell>
              <TableCell >dateInit</TableCell>
              <TableCell >dateEnd</TableCell>
              <TableCell >discount</TableCell>
              <TableCell >Price Product</TableCell>
              <TableCell >Price Product discount</TableCell>
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
                <TableCell sx={{maxwidth:180}}>{row?.Product.name}</TableCell>
                <TableCell sx={{maxwidth:180}}>{row.dateInit}</TableCell>
                <TableCell sx={{maxwidth:180}}>{row.dateEnd}</TableCell>
                <TableCell sx={{maxwidth:180}}>{row.desc}</TableCell>
                <TableCell sx={{maxwidth:180}}>{row.Product.price}</TableCell>
                <TableCell sx={{maxwidth:180}}>{row.desc}</TableCell>
                <TableCell sx={{width:280}}><ButtonAdmin title={'Edit'} 
                  typeBtn={'Edit'} iconName={'Edit'} data={row}
                  action={editSale}> </ButtonAdmin>
                </TableCell>
                <TableCell sx={{width:280}}><ButtonAdmin title={'Delete'}
                  typeBtn={'Delete'} iconName={'Delete'} data={row.id}
                  action={handleDeleteSale}> </ButtonAdmin>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  )
}

export default TableSale