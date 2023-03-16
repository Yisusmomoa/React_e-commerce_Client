import React, { useContext } from 'react'
import { theme } from '../styles/theme'
import styled, { ThemeProvider } from 'styled-components';
import ItemsShopCart from '../components/ShopCart/ItemsShopCart';
import InfoShopCart from '../components/ShopCart/InfoShopCart';
import { device } from '../styles/breakpoints';
import CartContext from '../state/context/CartContext';
import Empty_cart from '../assets/ShopCart/Empty_cart.svg'
import { ImgForm } from '../components/Form/Form.style';

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
  const {cart, removeProduct, updateAmount} = useContext(CartContext)

  console.log(cart.length)
  return (
    <ThemeProvider theme={theme}>
        <ShopCartStyled>
          {
            cart.length<1?
            <div>
              <h1>No cuentas con productos en tu carrito</h1>
              <img src={Empty_cart} alt='EmptyCartImg' width={'45%'} height={'auto'}/>
            </div>
            :
            <>
             <ItemsShopCart cart={cart} removeProduct={removeProduct} updateAmount={updateAmount}/>
            <InfoShopCart/>
            </>
          }
         
        </ShopCartStyled>
     
    </ThemeProvider>
  )
}

export default ShopCart