import React from 'react'
import { CheckoutTotalContainer } from './CartCheckout.style'

const CheckoutTotal = () => {
  return (
    <CheckoutTotalContainer>
        <hr/>
        <h3 style={{marginLeft:'1rem'}}>Total: $123</h3>
    </CheckoutTotalContainer>
  )
}

export default CheckoutTotal