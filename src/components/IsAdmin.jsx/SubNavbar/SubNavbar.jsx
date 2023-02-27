import React from 'react'
import { SubNavbarContainer } from './SubNavbar.style'
import AdminInputSearch from '../Admin/AdminInputSearch'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
const SubNavbar = ({showModal, search}) => {
  return (
    <SubNavbarContainer>
        <AdminInputSearch search={search} />
        <button onClick={showModal} >
            <AddCircleOutlineOutlinedIcon fontSize='large' />
        </button>
    </SubNavbarContainer>
  )
}

export default SubNavbar