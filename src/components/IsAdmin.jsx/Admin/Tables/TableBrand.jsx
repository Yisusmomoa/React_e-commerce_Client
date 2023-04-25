import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ButtonAdmin from '../ButtonAdmin';

const TableBrand = ({data,editBrand, handleDeleteBrand }) => {
  return (
    <TableContainer component={Paper} 
        sx={{ maxHeight: 550 }}>
        <Table sx={{ minWidth: 850 }} 
         stickyHeader >
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell >Name</TableCell>
              <TableCell >Img</TableCell>
              <TableCell >updatedAt</TableCell>
              <TableCell >createdAt</TableCell>
              <TableCell >Edit</TableCell>
              <TableCell >Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row) => (
              <TableRow
                key={row.id}
              >
                <TableCell component="th" 
                  scope="row"
                  sx={{maxwidth:180}}>
                  {row.id}
                </TableCell>
                <TableCell sx={{maxwidth:180}}>{row.name}</TableCell>
                <TableCell sx={{maxwidth:180}}><img src={row.imgManuFacturer} height={"35px"} width={"35px"}/></TableCell>
                <TableCell sx={{maxwidth:180}}>{row.updatedAt}</TableCell>
                <TableCell sx={{maxwidth:180}}>{row.createdAt}</TableCell>
                <TableCell sx={{width:280}}><ButtonAdmin title={'Edit'} 
                  typeBtn={'Edit'} iconName={'Edit'} data={row}
                  action={editBrand}> </ButtonAdmin>
                </TableCell>
                <TableCell sx={{width:280}}><ButtonAdmin title={'Delete'}
                  typeBtn={'Delete'} iconName={'Delete'} data={row.id}
                  action={handleDeleteBrand}> </ButtonAdmin>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  )
}

export default TableBrand