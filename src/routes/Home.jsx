import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import NewArrivals from '../components/NewArrivals/NewArrivals'

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
        <h2>New arrivals</h2>
        <NewArrivals/>
       </HomeStyled>
    </ThemeProvider>
  )
}

export default Home