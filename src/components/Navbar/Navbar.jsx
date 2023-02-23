import React, { useState } from 'react'

// components
import DropdownCategory from '../DropdownCategory/DropdownCategory'
import InputSearch from '../InputSearch/InputSearch'

// styles
import { ThemeProvider } from 'styled-components'
import { theme } from '../../styles/theme'

import { CartProfileContainer,  
  NavBarContainerLinks, 
  NavBarContainerResponsive, 
  NavBarExtendedContainer, 
  NavBarLink, 
  NavBarStyled, 
  NavbarHeaderOptsRespopnsive} from './NavBar.style'

// icons y assets
// https://mui.com/material-ui/material-icons/?query=search&theme=Outlined
import Logo1 from '../../assets/Logo1.png'
import Logo3 from '../../assets/Logo3.png'

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Logo from '../Logo/Logo'

// TODO: agregar más tamaños de responsive, subdividir el código en más componentes
const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false)
  const [showSearchInput, setShowSearchInput] = useState(false)
  const handleClick=()=>{
    setExtendNavbar(!extendNavbar)
  }
  const handleClickSearch=()=>{
    setShowSearchInput(!showSearchInput)
  }
  return (
    <ThemeProvider theme={theme}>
      <NavBarStyled>
          <NavBarContainerLinks>
            <NavBarLink to={'/home'}><Logo src={Logo1} 
              width={150} height={100}/></NavBarLink>
            <NavBarLink to={'/products'}>Products</NavBarLink>
            <DropdownCategory/>
            <NavBarLink to={'/signIn'}>Sign In</NavBarLink>
            <InputSearch/>
          </NavBarContainerLinks>

          <CartProfileContainer>
            {/* sección de iconos, carrito y profile */}
            <NavBarLink to={'/shopCart'}>
              <ShoppingCartOutlinedIcon fontSize='medium'/>
              <span>0</span>
            </NavBarLink>
            
            <NavBarLink to={'/profile'}>
              <PersonOutlineOutlinedIcon fontSize='medium'/>
            </NavBarLink>
          </CartProfileContainer>

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
            
      </NavBarStyled>
      {
          extendNavbar&&(
            <>
            <NavBarExtendedContainer>
              <NavBarLink responsive to={'/products'}>Products</NavBarLink>
              <NavBarLink responsive to={'/profile'}>Profile</NavBarLink>
              <NavBarLink responsive to={'/signIn'}>Sign In</NavBarLink>
              <NavBarLink responsive to={'/admin'}>Control panel</NavBarLink>
            </NavBarExtendedContainer>
            </>
          )
        }
    </ThemeProvider>
  )
}

export default Navbar