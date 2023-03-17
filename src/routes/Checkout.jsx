import React, { useContext } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'

import FormAdress from '../components/Checkout/FormAdress'
import Payment from '../components/Checkout/Payment'
import CartCheckout from '../components/Checkout/CartCheckout'
const CheckoutStyled=styled.div`
  background-color:${(props)=>props.theme.colors.fondo};
  min-height: 65vh;
  width:auto;
  font-family:${props=>props.theme.fonts.raleway};
  display:grid;
  grid-template-columns: 30% 40% 30%;
  grid-template-rows:100%;
`

const Checkout = () => {
    
  return (
    <ThemeProvider theme={theme}>
        <CheckoutStyled>
            <FormAdress/>
            <Payment/>
            <CartCheckout/>
        </CheckoutStyled>
    </ThemeProvider>
  )
}

export default Checkout