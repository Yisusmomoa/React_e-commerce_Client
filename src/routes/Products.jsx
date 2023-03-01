import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import { ProductsContainer} from '../components/Products/Products.style'
import ListProducts from '../components/Products/ListProducts';
import AsideProducts from '../components/Products/AsideProducts/AsideProducts';
import SubNavbarProducts from '../components/Products/SubNavbarProducts';

const Products = () => {
  return (
    <ThemeProvider theme={theme}>
        {/* <SubNavbarProducts/> */}
      <ProductsContainer>
        <AsideProducts/>
        <ListProducts/>
      </ProductsContainer>
    </ThemeProvider>
  )
}

export default Products