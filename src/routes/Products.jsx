import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import { ProductsContainer, 
  Products_AsideOptions, 
  Products_SubNavBar } from '../components/Products/Products.style'
import ListProducts from '../components/Products/ListProducts';
import AsideProducts from '../components/Products/AsideProducts/AsideProducts';

const Products = () => {
  return (
    <ThemeProvider theme={theme}>
      <ProductsContainer>
        <AsideProducts/>
        <ListProducts/>
      </ProductsContainer>
    </ThemeProvider>
  )
}

export default Products