import React from 'react'
import { NavBarContainerLinks,NavBarLink } from './NavBar.style'

import DropdownCategory from '../DropdownCategory/DropdownCategory'
import InputSearch from '../InputSearch/InputSearch'
import Logo from '../Logo/Logo'
import Logo1 from '../../assets/Logo1.png'
import { useMeQuery } from '../../state/store/service/UserService'

const NavBarLinks = () => {
  const {data, isError, isLoading, isSuccess, error}=useMeQuery()
  return (
    <NavBarContainerLinks>
            <NavBarLink to={'/home'}><Logo src={Logo1} 
              width={150} height={100}/></NavBarLink>
            <NavBarLink to={'/products'}>Products</NavBarLink>
            <DropdownCategory/>
            {
              !data&&<NavBarLink to={'/signIn'}>Sign In</NavBarLink>
            }
            
            <InputSearch/>
    </NavBarContainerLinks>
  )
}

export default NavBarLinks