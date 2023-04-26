import React, { useContext, useEffect, useState } from 'react'
import { ButtonForm, ContainerImg, 
    ContainerInput, ContainerInputForm, ContainerInputs, 
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
import { useCreateUserMutation, useLazyMeQuery, useLoginMutation, useMeQuery } from '../../state/store/service/UserService';
import {useForm} from 'react-hook-form';
import { Navigate, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

const Form = ({typeForm}) => {
    //TODO Validar que el email si sea un email
    const dataMe=useMeQuery()

    const emailRegex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    function validateEmail(email) {
        return emailRegex.test(email);
    }
    const [showPassword, setshowPassword] = useState(false);

    const navigate=useNavigate()
    //#region Services
        const [registerAction, {isError, isLoading, isSuccess, error, data}]=useCreateUserMutation()
        const [loginAction, {isError:isErrorLogin, isLoading:isLoadingLogin, 
            isSuccess:isSuccessLogin, error:errorLogin, data:dataLogin}]=useLoginMutation()
        const [trigger, {data:me, isLoading:isLoadingMe, 
            isUninitialized:isUninitializedMe, isFetching:isFetchingMe}]=useLazyMeQuery()
    //#endregion Services

    //#region forms
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
            if(validateEmail(user.email)){
                registerAction(user)
            }
        }

        const onSubmitLogin=(user)=>{
            loginAction(user)
        }
    //#endregion forms

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
                text: error?.data,
            })
        }
    }, [isLoading]);

    useEffect(() => {
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
            }).then(()=>{
                trigger()
                navigate("/home")
            })

            // Swal.fire({
            //     icon: 'success',
            //     title: 'Welcome'
            // }).then(()=>window.location.href = '/home')
        }
        else if(isErrorLogin){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: errorLogin?.data
            })
        }
    }, [isLoadingLogin]);

    if(dataMe?.data){
        return (
            <Navigate to={'/'} replace={true}/>
        )
    }
    
    if (typeForm==="Signin") {
        return (
            <FormStyled onSubmit={handleSubmitLogin(onSubmitLogin)}>
                <ContainerInputs>
                    <ContainerInput>
                        <div>
                            <AlternateEmailOutlinedIcon fontSize='large'/>
                            <InputForm type='email' 
                                placeholder='Your email'
                                {...login("email", {required:true, pattern:emailRegex}) }/>
                        </div>
                        <div>
                            {errorsLogin.email?.type==='required' &&<span style={ {color:"red",
                                fontSize:"12px"}}>This field is required</span> }
                            {errorsLogin.email?.type==='pattern' && 
                                <span style={ {color:"red",fontSize:"12px"}}>Enter a valid email</span>}
                        </div>
                    </ContainerInput>

                    <ContainerInput>
                        <div>
                            <HttpsOutlinedIcon fontSize='large'/>
                            <InputForm type='password' 
                                placeholder='Password'
                                {...login("password", {required:true} ) }/>
                        </div>
                        <div>
                            {errorsLogin.password &&
                            <span style={ {color:"red",fontSize:"12px"}}>This field is required</span>}
                        </div>
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
        <FormStyled onSubmit={handleSubmit(onSubmit)} >
            <ContainerInputs>
                <ContainerInput>
                    <div>
                        <PersonOutlineOutlinedIcon fontSize='large'/>
                        <InputForm type='text' {...register("username", {
                            required:true,
                            maxLength: 50
                        })} placeholder='Username'/>
                    </div>
                    <div>
                        {errors.username?.type==='required' && 
                            <span style={ {color:"red",fontSize:"12px"}}>This field is required</span>}
                    </div>
                </ContainerInput>

                <ContainerInput>
                    <div>
                        <AlternateEmailOutlinedIcon fontSize='large'/>
                        <InputForm type='email' 
                            placeholder='Your email'
                            {...register("email", {required:true, pattern:emailRegex})}/>

                    </div>
                    <div>
                        {errors.email?.type==='required' && 
                        <span style={ {color:"red",fontSize:"12px"}}>This field is required</span>}

                        {errors.email?.type==='pattern' && 
                        <span style={ {color:"red",fontSize:"12px"}}>Enter a valid email</span>}
                    </div>
                </ContainerInput>

                <ContainerInput>
                    <ContainerInputForm>
                        <HttpsOutlinedIcon fontSize='large'/>
                        <InputForm type={showPassword? 'text': 'password'}
                            placeholder='Password'
                            {...register("password", {required:true})} />
                        {
                            showPassword 
                            ?
                                <VisibilityOffOutlinedIcon 
                                onClick={()=>setshowPassword(!showPassword)}
                                fontSize='small'
                                style={{position:'absolute', right: '15px',
                                cursor:'pointer' }}/>
                            : 
                                <VisibilityOutlinedIcon 
                                onClick={()=>setshowPassword(!showPassword)}
                                fontSize='small'
                                style={{position:'absolute', right: '15px',
                                cursor:'pointer' }} />
                        }
                       
                       
                    </ContainerInputForm>
                    <div>
                    {errors.password?.type==='required' && 
                        <span style={ {color:"red",
                        fontSize:"12px"}}>This field is required</span>}
                    </div>
                </ContainerInput>

                <ButtonForm >Register</ButtonForm>
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