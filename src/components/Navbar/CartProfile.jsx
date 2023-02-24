import React from 'react'
import { CartProfileContainer,NavBarLink } from './NavBar.style'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
const CartProfile = () => {
  return (
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
  )
}

export default CartProfile