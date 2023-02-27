import React from 'react'
import { ButtonAdd, SubNavbarContainer } from './SubNavbar.style'
import AdminInputSearch from '../Admin/AdminInputSearch'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
const SubNavbar = ({showModal, search, title}) => {
  return (
    <SubNavbarContainer>
      <h3>{title}</h3>
        <AdminInputSearch search={search} />
        <ButtonAdd onClick={showModal} >
            <AddCircleOutlineOutlinedIcon fontSize='large' />
        </ButtonAdd>
    </SubNavbarContainer>
  )
}

export default SubNavbar