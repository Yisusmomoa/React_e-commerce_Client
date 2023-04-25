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
import { Profile_Link } from '../Profile/Profile.style'
const IsAdmin = () => {
  const { data, isLoading} = useMeQuery();
  return  !isLoading && (
    data?.result.rolId===1 ?(
      <ThemeProvider theme={theme}>
        <IsAdminContainer>
          
          <IsAdmin_Aside >
            
            <Profile_Link to={'/admin/products'}>Products</Profile_Link>
            <Profile_Link to={'/admin/brands'}>Brands</Profile_Link>
            <Profile_Link to={'/admin/categories'}>Categories</Profile_Link>
            <Profile_Link to={'/admin/users'}>Users</Profile_Link>
            <Profile_Link to={'/admin/sales'}>Sales</Profile_Link>
            
          </IsAdmin_Aside>

          <Outlet/>
        </IsAdminContainer>
      </ThemeProvider>
    )
    :<Navigate to="/" replace={true}  />
  )
}

export default IsAdmin