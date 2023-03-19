import React, { useContext } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import {device, deviceMin} from '../styles/breakpoints'
import FormAdress from '../components/Checkout/FormAdress/FormAdress'
import Payment from '../components/Checkout/Payment/Payment'
import CartCheckout from '../components/Checkout/CartCheckout/CartCheckout'
const CheckoutStyled=styled.div`
  background-color:${(props)=>props.theme.colors.fondo};
  height: auto;
  width:auto;
  font-family:${props=>props.theme.fonts.raleway};
  display:grid;
  grid-template-columns: 30% 40% 30%;
  grid-template-rows:100%;

  @media(${device.lg}){
    grid-template-columns: 45% 55%;
    grid-template-rows:40% 30%;
    height: 80vh;
    gap:1rem;
  }

  @media(${device.md}){
    grid-template-columns: 55% 45%;
    grid-template-rows:35% 25%;
    height: auto;
    gap:0.4rem;
  }

  @media(${device.sm}){
    grid-template-columns: 100%;
    grid-template-rows:30% 40% 30% ;
    height: auto;
    gap:1rem;
  }
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