import React from 'react'
import { ButtonAdd, SubNavbarContainer } from './SubNavbar.style'
import AdminInputSearch from '../Admin/AdminInputSearch'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
const SubNavbar = ({showModal, search}) => {
  return (
    <SubNavbarContainer>
        <AdminInputSearch search={search} />
        <ButtonAdd onClick={showModal} >
            <AddCircleOutlineOutlinedIcon fontSize='large' />
        </ButtonAdd>
    </SubNavbarContainer>
  )
}

export default SubNavbar