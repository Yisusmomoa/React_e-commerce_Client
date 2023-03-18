import React, { useContext } from 'react'
import CartContext from '../../../state/context/CartContext'
import { CartCheckoutContainer, CartCheckout_Btns, CartCheckout_ListCartContainer } from './CartCheckout.style'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import ListCart from './ListCart';
import CheckoutButtons from './CheckoutButtons';
import CheckoutTotal from './CheckoutTotal';

const cart=[
  {
    id:1,
    prodName:"prod1",
    price:11
  },
  {
    id:2,
    prodName:"prod2",
    price:22
  },
  {
    id:3,
    prodName:"prod3",
    price:33
  },
  {
    id:4,
    prodName:"prod4",
    price:44
  },
  {
    id:5,
    prodName:"prod5",
    price:55
  },
  {
    id:5,
    prodName:"prod5",
    price:55
  },
  {
    id:5,
    prodName:"prod5",
    price:55
  },
  {
    id:5,
    prodName:"prod5",
    price:55
  },
  {
    id:5,
    prodName:"prod5",
    price:55
  },
  {
    id:5,
    prodName:"prod5",
    price:55
  },
  {
    id:5,
    prodName:"prod5",
    price:55
  },
  {
    id:5,
    prodName:"prod5",
    price:55
  },
  {
    id:5,
    prodName:"prod5",
    price:55
  },
  {
    id:5,
    prodName:"prod5",
    price:55
  },
  {
    id:5,
    prodName:"prod5",
    price:55
  },
  {
    id:5,
    prodName:"prod5",
    price:55
  },
  {
    id:5,
    prodName:"prod5",
    price:55
  },
  {
    id:5,
    prodName:"prod5",
    price:55
  },
  {
    id:5,
    prodName:"prod5",
    price:55
  },
  {
    id:5,
    prodName:"prod5",
    price:55
  },
  {
    id:5,
    prodName:"prod5",
    price:55
  },
  {
    id:5,
    prodName:"prod5",
    price:55
  },
  {
    id:5,
    prodName:"prod5",
    price:55
  },
  {
    id:5,
    prodName:"prod5",
    price:55
  },
  {
    id:5,
    prodName:"prod5",
    price:55
  },
  {
    id:5,
    prodName:"prod5",
    price:55
  },
  {
    id:5,
    prodName:"prod5",
    price:55
  },
  {
    id:5,
    prodName:"prod5",
    price:55
  },
  {
    id:5,
    prodName:"prod5",
    price:55
  },
  {
    id:5,
    prodName:"prod5",
    price:55
  },
  {
    id:5,
    prodName:"prod5",
    price:55
  },
  {
    id:5,
    prodName:"prod5",
    price:55
  },
  {
    id:5,
    prodName:"prod5",
    price:55
  },
]

const CartCheckout = () => {
  // const {cart}=useContext(CartContext)
    
  return (
    <div>
      <h2>
        Cart
        <ShoppingCartOutlinedIcon/>
      </h2>
      <CartCheckoutContainer>
        <ListCart cart={cart} />
        
        <CheckoutTotal/>

        <CheckoutButtons />

      </CartCheckoutContainer>

    </div>
  )
}

export default CartCheckout