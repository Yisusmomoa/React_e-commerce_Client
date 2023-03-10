import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';

import ButtonAdmin from '../ButtonAdmin';

const TableUser = ({data, handleDesactivateUser, editUser}) => {
  return (
    <TableContainer component={Paper} 
        sx={{ maxHeight: 550 }}>
        <Table sx={{ minWidth: 850 }} 
         stickyHeader >
          <TableHead>
            <TableRow>
              <TableCell>Active</TableCell>
              <TableCell>Id</TableCell>
              <TableCell >username</TableCell>
              <TableCell >email</TableCell>
              <TableCell >role</TableCell>
              <TableCell >updatedAt</TableCell>
              <TableCell >createdAt</TableCell>
              <TableCell >Edit</TableCell>
              {/* <TableCell >Delete</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row) => (
              <TableRow
                key={row.id}>
              <TableCell sx={{maxwidth:150}}>
                <Checkbox 
                  onChange={(ev)=>handleDesactivateUser(row.id, ev.target.checked)}
                checked={row.isActive} />
              </TableCell>
                <TableCell component="th" 
                  scope="row"
                  sx={{maxwidth:150}}>
                  {row.id}
                </TableCell>
                <TableCell sx={{maxwidth:150}}>{row.username}</TableCell>
                <TableCell sx={{maxwidth:150}}>{row.email}</TableCell>
                <TableCell sx={{maxwidth:150}}>{row.RolId===1?'Admin':'Normal'}</TableCell>
                <TableCell sx={{maxwidth:150}}>{row.updatedAt}</TableCell>
                <TableCell sx={{maxwidth:150}}>{row.createdAt}</TableCell>
                <TableCell sx={{width:240}}><ButtonAdmin title={'Edit'} 
                  typeBtn={'Edit'} iconName={'Edit'} data={row}
                  action={editUser}> </ButtonAdmin>
                </TableCell>
                {/* <TableCell sx={{width:340}}><ButtonAdmin title={'Delete'}
                  typeBtn={'Delete'} iconName={'Delete'} data={row.id}
                  action={deletUser}> </ButtonAdmin>
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  )
}

export default TableUser