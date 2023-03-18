import React from 'react'
import { CheckoutTotalContainer } from './CartCheckout.style'

const CheckoutTotal = ({total}) => {
  return (
    <CheckoutTotalContainer>
        <hr/>
        <h3 style={{marginLeft:'1rem'}}>Total: ${total?.Total.toFixed(2)}</h3>
    </CheckoutTotalContainer>
  )
}

export default CheckoutTotal