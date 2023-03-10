import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ButtonAdmin from '../ButtonAdmin';
const TableCategory = ({data, editCategory, handleDeleteCategory }) => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: 550 }}>
          <Table sx={{ minWidth: 650 }} stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell sx={{maxwidth:180}}>Id</TableCell>
                <TableCell sx={{maxwidth:180}} >Name</TableCell>
                <TableCell sx={{maxwidth:180}} >updatedAt</TableCell>
                <TableCell sx={{maxwidth:180}} >createdAt</TableCell>
                <TableCell sx={{width:280}}>Edit</TableCell>
                <TableCell sx={{width:280}}>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.results?.map((row) => (
                <TableRow
                  key={row.id}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell >{row.name}</TableCell>
                  <TableCell >{row.updatedAt}</TableCell>
                  <TableCell >{row.createdAt}</TableCell>
                  <TableCell ><ButtonAdmin title={'Edit'} 
                    typeBtn={'Edit'} iconName={'Edit'} data={row}
                    action={editCategory}> </ButtonAdmin>
                  </TableCell>
                  <TableCell ><ButtonAdmin title={'Delete'}
                    typeBtn={'Delete'} iconName={'Delete'} data={row.id}
                    action={handleDeleteCategory}> </ButtonAdmin>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
  )
}

export default TableCategory