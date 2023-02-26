// font-family: 'Raleway', sans-serif;
import styled from "styled-components";
import { device,
deviceMin } from "../../styles/breakpoints";

export const FormStyled=styled.form`
    width:100%;
    height:auto;
    display:flex;
    color:${(props)=>props.theme.colors.Letras};
    font-family:${props=>props.theme.fonts.raleway};
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    justify-content: space-evenly;
    @media (${device.sm}){
        flex-direction: column;
    }
`

export const ContainerInputs=styled.div`    
    width:50%;
    height:450px;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: space-evenly;
    @media (${device.sm}){
        height:300px;
    }
`

export const ContainerImg=styled.div`
    width:50%;
    height:450px;
    display:flex;
    flex-direction:column;
    justify-content: space-evenly;
    align-items: center;
    @media (${device.sm}){
        height:150px;
    }
`

export const ContainerInput=styled.div`
    width:100%;
    display:flex;
    align-items: center;
    justify-content: center;
`

export const InputForm=styled.input`
    border:none;
    color:${(props)=>props.theme.colors.Letras};
    border-bottom:solid 0.1px ${props=>props.theme.Letras};
    width:300px;
    height:35px;
    font-size:16px;
    margin-left:5px;
    background-color:${(props)=>props.theme.colors.fondo};
`

export const ButtonForm=styled.button`
    color:${(props)=>props.theme.colors.Letras2};
    background-color:${(props)=>props.theme.colors.Btn_Hover};
    cursor:pointer;
    border:none;
    border-radius:4px;
    padding: 12px 50px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 18px;
    transition: background-color 0.3s ease-in;
    &:hover{
        background-color:${(props)=>props.theme.colors.Btn_Reposo};
    }
`
export const ImgForm=styled.img`
    width:75%;
    height:auto;
    @media (${device.sm}){
        display:none;
    }

`