import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import Form from '../components/Form/Form'
const SignInStyled=styled.div`
  background-color:${(props)=>props.theme.colors.fondo};
  height:100%;
  width:100%;
  font-family:${props=>props.theme.fonts.raleway};
`

const SignIn = () => {
  return (
    <ThemeProvider theme={theme}>
      <SignInStyled>
        <h3>Sign in</h3>
        <Form typeForm={"Signin"}/>
      </SignInStyled>
    </ThemeProvider>
  )
}

export default SignIn