import React, { useContext, useEffect, useState } from 'react'

// components
import CartProfile from './CartProfile'
import NavBarLinks from './NavBarLinks'
import NavbarExtended from './NavbarExtended';
import NavbarResponsive from './NavbarResponsive'

// styles
import { ThemeProvider } from 'styled-components'
import { theme } from '../../styles/theme'
import { NavBarStyled} from './NavBar.style'
import { useLazyMeQuery, useMeQuery } from '../../state/store/service/UserService';

const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false)
  const [showSearchInput, setShowSearchInput] = useState(false)
  const {data, isLoading, isSuccess, isError, error}=useMeQuery()  

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
        {
          data&&<CartProfile/>
        }

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