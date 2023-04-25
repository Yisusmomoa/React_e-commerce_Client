import React, { useContext } from 'react'
import { CartProfileContainer,NavBarLink } from './NavBar.style'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CartContext from '../../state/context/CartContext';

const CartProfile = () => {
  const {getLengthShopCart}=useContext(CartContext)
  return (
    <CartProfileContainer>
            {/* sección de iconos, carrito y profile */}
            <NavBarLink to={'/shopCart'}>
              <ShoppingCartOutlinedIcon fontSize='medium'/>
              <span style={{color:'#3F72AF'}}>{getLengthShopCart()}</span>
            </NavBarLink>
            
            <NavBarLink to={'/profile'}>
              <PersonOutlineOutlinedIcon fontSize='medium'/>
            </NavBarLink>
    </CartProfileContainer>
  )
}

export default CartProfile