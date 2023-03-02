import React from 'react'
import { Products_SubNavBar } from './Products.style'
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
const SubNavbarProducts = ({showModal}) => {
  return (
    <Products_SubNavBar>
      <button onClick={showModal}>
        <ListOutlinedIcon fontSize='large'/>
      </button>
    </Products_SubNavBar>
  )
}

export default SubNavbarProducts