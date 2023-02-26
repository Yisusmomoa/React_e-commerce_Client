import React from 'react'
import { ButtonForm, ContainerImg, 
    ContainerInput, ContainerInputs, 
    FormStyled, ImgForm, InputForm } from './Form.style'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import HttpsIcon from '@mui/icons-material/Https';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { NavBarLink } from '../Navbar/NavBar.style';
import SignUp from '../../assets/signup/SignUp.svg'
import SignIn from '../../assets/signin/SignIn.svg'
// minuto 16:56 atomic design
const Form = ({typeForm}) => {
    if (typeForm==="Signin") {
        return (
            <FormStyled>
                <ContainerInputs>

                    <ContainerInput>
                        <AlternateEmailOutlinedIcon fontSize='large'/>
                        <InputForm type='email' 
                            placeholder='Your email'/>
                    </ContainerInput>

                    <ContainerInput>
                        <HttpsOutlinedIcon fontSize='large'/>
                        <InputForm type='password' 
                            placeholder='Password'/>
                    </ContainerInput>
                    
                    <ButtonForm>Login</ButtonForm>
                </ContainerInputs>

                <ContainerImg>
                    <ImgForm src={SignIn} 
                        alt='SignInImg' />
                    <NavBarLink to={'/signUp'}>New? create an account</NavBarLink>
                </ContainerImg>
            </FormStyled>
          )
    }
  return (
    <ThemeProvider theme={theme}>
        <FormStyled>
            <ContainerInputs>
                <ContainerInput>
                    <PersonOutlineOutlinedIcon fontSize='large'/>
                    <InputForm type='text' 
                        placeholder='Username'/>
                </ContainerInput>

                <ContainerInput>
                    <AlternateEmailOutlinedIcon fontSize='large'/>
                    <InputForm type='email' 
                        placeholder='Your email'/>
                </ContainerInput>

                <ContainerInput>
                    <HttpsOutlinedIcon fontSize='large'/>
                    <InputForm type='password' 
                        placeholder='Password'/>
                </ContainerInput>
                
                <ContainerInput>
                    <HttpsIcon fontSize='large'/>
                    <InputForm type='password' 
                        placeholder='Repeat your password'/>
                </ContainerInput>

                <ButtonForm>Register</ButtonForm>
            </ContainerInputs>

            <ContainerImg>
                <ImgForm src={SignUp} alt='SignUpImg'/>
                <NavBarLink to={'/signIn'}>I am already a member</NavBarLink>
            </ContainerImg>
        </FormStyled>
    </ThemeProvider>
  )
}

export default Form