
import React, { useState } from 'react'
import { NavBarContainerResponsive, 
    NavbarHeaderOptsRespopnsive,
    NavBarLink } from './NavBar.style'



// iconos y assets
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Logo3 from '../../assets/Logo3.png'

// components
import Logo from '../Logo/Logo'
import InputSearch from '../InputSearch/InputSearch';

const NavbarResponsive = ({extendNavbar,showSearchInput,handleClick, handleClickSearch}) => {
    
  return (
    <>
    <NavBarContainerResponsive>
        <NavbarHeaderOptsRespopnsive>
            <NavBarLink to={'/home'}><Logo src={Logo3}
            width={80} height={65} /></NavBarLink>
            <SearchOutlinedIcon fontSize='large' onClick={handleClickSearch} />
            <div onClick={handleClick}>
            {
                !extendNavbar?<MenuOutlinedIcon fontSize='large' />
                :<CloseOutlinedIcon fontSize='large'/>
            }
            </div>
        </NavbarHeaderOptsRespopnsive>
        { showSearchInput&&<InputSearch/>}
    </NavBarContainerResponsive>
   
    </>
  )
}

export default NavbarResponsive