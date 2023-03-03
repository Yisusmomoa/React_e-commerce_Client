import React, { useEffect } from 'react'
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
import { useCreateUserMutation, useLoginMutation } from '../../state/store/service/UserService';
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

// minuto 16:56 atomic design
const Form = ({typeForm}) => {
    const navigate=useNavigate()
    const [registerAction, {isError, isLoading, isSuccess, error, data}]=useCreateUserMutation()
    const [loginAction, {isError:isErrorLogin, isLoading:isLoadingLogin, 
        isSuccess:isSuccessLogin, error:errorLogin, data:dataLogin}]=useLoginMutation()
    // const MySwal = withReactContent(Swal)
    const {
        register,
        handleSubmit,
        watch, 
        formState:{errors}
    }=useForm()

    const {
        register:login,
        handleSubmit:handleSubmitLogin,
        watch:watchLogin,
        formState:{errors:errorsLogin}
    }=useForm()

    const onSubmit=(user)=>{
        registerAction(user)
    }
    const onSubmitLogin=(user)=>{
        console.log(user)
        loginAction(user)
    }
    useEffect(() => {
        if(isLoading){
            Swal.fire({
                title:'Loading',
                allowEscapeKey: false,
                allowOutsideClick: false,
                didOpen:()=>{
                    Swal.showLoading()
                }
            })
        }
        if (isSuccess) {
            Swal.fire({
                icon: 'success',
                title: 'successfull registered'
            }).then(()=>navigate("/signIn"))
        }
        else if(isError){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error?.data.message,
            })
        }
    }, [isLoading]);

    useEffect(() => {
        console.log("isLoadingLogin", isLoadingLogin)
        if(isLoadingLogin){
            Swal.fire({
                title:'Loading',
                allowEscapeKey: false,
                allowOutsideClick: false,
                didOpen:()=>{
                    Swal.showLoading()
                }
            })
        }
        if (isSuccessLogin) {
            Swal.fire({
                icon: 'success',
                title: 'Welcome'
            }).then(()=>navigate("/home"))
        }
        else if(isErrorLogin){
            console.log(errorLogin)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: errorLogin?.data.message,
            })
        }
    }, [isLoadingLogin]);

    if (typeForm==="Signin") {
        return (
            <FormStyled onSubmit={handleSubmitLogin(onSubmitLogin)}>
                <ContainerInputs>
                    <ContainerInput>
                        <AlternateEmailOutlinedIcon fontSize='large'/>
                        <InputForm type='email' 
                            placeholder='Your email'
                            {...login("email", {required:true}) }/>
                    </ContainerInput>
                    {errorsLogin.email &&<span>This field is required</span>}

                    <ContainerInput>
                        <HttpsOutlinedIcon fontSize='large'/>
                        <InputForm type='password' 
                            placeholder='Password'
                            {...login("password", {required:true} ) }/>
                    </ContainerInput>
                    {errorsLogin.password &&<span>This field is required</span>}
                    
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
        <FormStyled onSubmit={handleSubmit(onSubmit)} >
            <ContainerInputs>
                <ContainerInput>
                    <PersonOutlineOutlinedIcon fontSize='large'/>
                    <InputForm type='text' {...register("username", {
                        required:true,
                        maxLength: 50
                    })} placeholder='Username'/>
                    {errors.username && <span>This field is required</span>}
                </ContainerInput>

                <ContainerInput>
                    <AlternateEmailOutlinedIcon fontSize='large'/>
                    <InputForm type='email' 
                        placeholder='Your email'
                        {...register("email", {required:true})}/>
                    {errors.email && <span>This field is required</span>}
                </ContainerInput>

                <ContainerInput>
                    <HttpsOutlinedIcon fontSize='large'/>
                    <InputForm type='password' 
                        placeholder='Password'
                        {...register("password", {required:true})}/>
                    {errors.password && <span>This field is required</span>}
                </ContainerInput>
                
                <ContainerInput>
                    <HttpsIcon fontSize='large'/>
                    <InputForm type='password' 
                        placeholder='Repeat your password'
                        {...register("passwordConfirm", {required:true})}/>
                    {errors.passwordConfirm && <span>This field is required</span>}
                </ContainerInput>

                <ButtonForm >Register</ButtonForm>
            </ContainerInputs>

            <ContainerImg>
                <ImgForm src={SignUp} alt='SignUpImg'/>
                <NavBarLink to={'/signIn'}>I am already a member</NavBarLink>
            </ContainerImg>
        </FormStyled>
        {/* {isLoading&&<span>Loading...</span>} */}
        {/* {isError&&<span>{error?.data.message}</span>} */}
    </ThemeProvider>
  )
}

export default Form