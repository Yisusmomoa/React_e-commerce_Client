import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'

const HomeStyled=styled.div`
  background-color:${(props)=>props.theme.colors.fondo};
  height:90vh;
`
const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <HomeStyled>Home</HomeStyled>
    </ThemeProvider>
  )
}

export default Home