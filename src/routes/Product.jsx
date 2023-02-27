import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import ProductBody from '../components/ProductBody/ProductBody'

const ProductStyled=styled.div`
 background-color:${(props)=>props.theme.colors.fondo};
  height:auto;
  width:auto;
  font-family:${props=>props.theme.fonts.raleway};
  text-align:center;
`
const Product = () => {
  return (
    <ThemeProvider theme={theme}>
      <ProductStyled>
        <ProductBody/>
      </ProductStyled>
    </ThemeProvider>
  )
}

export default Product