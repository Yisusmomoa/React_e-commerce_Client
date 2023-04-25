import React from 'react'
import { ListCartElementContainer } from './CartCheckout.style'

const ListCartElement = ({prod}) => {
  return (
    <ListCartElementContainer>
        <h3>
            {prod.name} 
        </h3>
        <h3>
            ${prod.price*prod.amount} 
        </h3>
    </ListCartElementContainer>
  )
}

export default ListCartElement