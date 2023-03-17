import React, { useContext } from 'react'
import CartContext from '../../state/context/CartContext'
import { CartCheckoutContainer } from './CartCheckout.style'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const CartCheckout = () => {
    const {cart}=useContext(CartContext)
  return (
    <div>
      <h2>
        Cart
        <ShoppingCartOutlinedIcon/>
      </h2>
      <CartCheckoutContainer>
        CartCheckout
      </CartCheckoutContainer>

    </div>
  )
}

export default CartCheckout