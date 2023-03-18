import React, { useContext } from 'react'
import CartContext from '../../../state/context/CartContext'
import { CartCheckoutContainer } from './CartCheckout.style'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import ListCart from './ListCart';
import CheckoutButtons from './CheckoutButtons';
import CheckoutTotal from './CheckoutTotal';



const CartCheckout = () => {
  const {cart, total}=useContext(CartContext)
    
  return (
    <div>
      <h2>
        Cart
        <ShoppingCartOutlinedIcon/>
      </h2>
      <CartCheckoutContainer>
        <ListCart cart={cart} />
        
        <CheckoutTotal total={total}/>

        <CheckoutButtons />

      </CartCheckoutContainer>

    </div>
  )
}

export default CartCheckout