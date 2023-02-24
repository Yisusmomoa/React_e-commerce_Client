import React from 'react'
import { NavBarExtendedContainer, NavBarLink } from './NavBar.style'

const NavbarExtended = ({extendNavbar}) => {
    if (extendNavbar) return (
        <>
            <NavBarExtendedContainer>
                <NavBarLink responsive to={'/products'}>Products</NavBarLink>
                <NavBarLink responsive to={'/profile'}>Profile</NavBarLink>
                <NavBarLink responsive to={'/signIn'}>Sign In</NavBarLink>
                <NavBarLink responsive to={'/admin'}>Control panel</NavBarLink>
            </NavBarExtendedContainer>
        </>
    )
  return (
    <>
        
    </>
  )
}

export default NavbarExtended