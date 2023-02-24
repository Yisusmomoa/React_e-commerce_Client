import React, { useState } from 'react'

// components
import CartProfile from './CartProfile'
import NavBarLinks from './NavBarLinks'
import NavbarExtended from './NavbarExtended';
import NavbarResponsive from './NavbarResponsive'

// styles
import { ThemeProvider } from 'styled-components'
import { theme } from '../../styles/theme'
import { NavBarStyled} from './NavBar.style'


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
          
        <NavBarLinks/>

        <CartProfile/>

        <NavbarResponsive 
            extendNavbar={extendNavbar} 
            handleClick={handleClick} 
            handleClickSearch={handleClickSearch}
            showSearchInput={showSearchInput}/>
            
      </NavBarStyled>
      
      <NavbarExtended extendNavbar={extendNavbar}/>
    </ThemeProvider>
  )
}

export default Navbar