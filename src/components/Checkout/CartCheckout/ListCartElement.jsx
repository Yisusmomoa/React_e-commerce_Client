import React from 'react'
import { ListCartElementContainer } from './CartCheckout.style'

const ListCartElement = ({prod}) => {
  return (
    <ListCartElementContainer>
        <h3>
            {prod.prodName} 
        </h3>
        <h3>
            ${prod.price}  
        </h3>
    </ListCartElementContainer>
  )
}

export default ListCartElement