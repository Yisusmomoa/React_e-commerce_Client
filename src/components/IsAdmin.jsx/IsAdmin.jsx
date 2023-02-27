import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBarLink } from '../Navbar/NavBar.style'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../styles/theme'
import {
  IsAdminContainer,
  IsAdmin_Aside
} from './IsAdmin.style.jsx'
const IsAdmin = () => {
  return (
    <ThemeProvider theme={theme}>
      <IsAdminContainer>
        
        <IsAdmin_Aside >
          <NavBarLink to={'/admin/products'}>Products</NavBarLink>
          <NavBarLink to={'/admin/brands'}>Brands</NavBarLink>
          <NavBarLink to={'/admin/categories'}>Categories</NavBarLink>
          <NavBarLink to={'/admin/users'}>Users</NavBarLink>
        </IsAdmin_Aside>

        <Outlet/>
      </IsAdminContainer>
    </ThemeProvider>
  )
}

export default IsAdmin