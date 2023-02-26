import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import NewArrivals from '../components/NewArrivals/NewArrivals'
import ShowProductsHome from '../components/ShowProductsHome/ShowProductsHome'
import Brands from '../components/Brands/Brands'

const HomeStyled=styled.div`
  background-color:${(props)=>props.theme.colors.fondo};
  height:auto;
  width:auto;
  font-family:${props=>props.theme.fonts.raleway};
`
const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <HomeStyled>
        <h3>New arrivals</h3>
        <NewArrivals/>
        <h3>Products</h3>
        <ShowProductsHome/>
        <h3>Brands</h3>
        <Brands/>
       </HomeStyled>
    </ThemeProvider>
  )
}

export default Home