import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { NavBarLink } from '../Navbar/NavBar.style'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../styles/theme'
import {
  IsAdminContainer,
  IsAdmin_Aside
} from './IsAdmin.style.jsx'
import { useMeQuery } from '../../state/store/service/UserService'
const IsAdmin = () => {
  const { data, isLoading} = useMeQuery();
  return  !isLoading && (
    data?.result.rolId===1 ?(
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
    :<Navigate to="/" replace={true}  />
  )
}

export default IsAdmin