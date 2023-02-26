import React from 'react'
import Form from '../components/Form/Form'
import styled, { ThemeProvider } from "styled-components";
import { theme } from '../styles/theme';

const SignUpStyled=styled.div`
  background-color:${(props)=>props.theme.colors.fondo};
  height:100%;
  width:100%;
  font-family:${props=>props.theme.fonts.raleway};
`
const SignUp = () => {
  return (
    <ThemeProvider theme={theme}>
      <SignUpStyled>
        <h3>Sign up</h3>
        <Form typeForm={"Signup"}/>
      </SignUpStyled>

    </ThemeProvider>
  )
}

export default SignUp