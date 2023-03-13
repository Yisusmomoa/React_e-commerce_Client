import React from 'react'
import Swal from 'sweetalert2';
import { theme } from '../styles/theme'
import styled, { ThemeProvider } from 'styled-components';
import ItemsShopCart from '../components/ShopCart/ItemsShopCart';
import InfoShopCart from '../components/ShopCart/InfoShopCart';
import { device, deviceMin } from '../styles/breakpoints';

const ShopCartStyled=styled.div`
  display:grid;
  background-color:${(props)=>props.theme.colors.fondo};
  min-height: 100vh;
  width:auto;
  grid-template-rows:100%;
  grid-template-columns:75% 25%;
  font-family:${props=>props.theme.fonts.raleway};
  text-align:center;
  gap:0.5rem;
  @media(${device.md}){
    grid-template-rows: 100vh 100vh ;
    grid-template-columns:100%;
  }
`
const ShopCart = () => {
  return (
    <ThemeProvider theme={theme}>
      <ShopCartStyled>
        <ItemsShopCart/>
        <InfoShopCart/>
      </ShopCartStyled>
    </ThemeProvider>
  )
}

export default ShopCart