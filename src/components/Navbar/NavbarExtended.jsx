  import React from 'react'
import { NavBarExtendedContainer, NavBarLink } from './NavBar.style'

const NavbarExtended = ({extendNavbar}) => {
    if (extendNavbar) return (
        <>
            <NavBarExtendedContainer>
                <NavBarLink responsive to={'/products'}>Products</NavBarLink>
                <NavBarLink responsive to={'/signIn'}>Sign In</NavBarLink>
            </NavBarExtendedContainer>
        </>
    )
}

export default NavbarExtended