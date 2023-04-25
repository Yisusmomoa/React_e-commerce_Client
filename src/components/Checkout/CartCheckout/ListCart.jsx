import React from 'react'
import { CartCheckout_ListCartContainer } from './CartCheckout.style'
import ListCartElement from './ListCartElement'

const ListCart = ({cart}) => {
  return (
    <CartCheckout_ListCartContainer>
        {
            cart.map((prod, i)=>(
              <ListCartElement prod={prod} key={i}/>
            ))
        }
    </CartCheckout_ListCartContainer>
  )
}

export default ListCart