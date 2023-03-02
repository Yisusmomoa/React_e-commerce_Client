import styled from "styled-components";
import { device, deviceMin } from "../../styles/breakpoints";

export const ProfileDetails_Container=styled.div`
    display:flex;
    width:60%;
    height:100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap:5rem;
    @media(${device.sm}){
        width:100%;
    }
`

export const FormStyled=styled.form`
    width:100%;
    height:50%;
    display:flex;
    color:${(props)=>props.theme.colors.Letras};
    font-family:${props=>props.theme.fonts.raleway};
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    align-content: space-around;
    gap:2rem;
    @media (${device.sm}){
        flex-direction: column;
    }
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
    font-size: 18px;
    transition: background-color 0.3s ease-in;
    margin:0 auto;
    &:hover{
        background-color:${(props)=>props.theme.colors.Btn_Reposo};
    }

`

export const DangerZone_Container=styled.div`
    width:90%;
    height:auto;
    display:flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
    justify-content: flex-start;
   
`

export const DeleteAccount_Container=styled.div`
    width:100%;
    height:auto;
    display:flex;
    flex-wrap: wrap;
    border:1px solid ${(props)=>props.theme.colors.Delete};
    align-items: center;
    padding:10px;
`

export const ButtonDeletAccount=styled.button`
    color:${(props)=>props.theme.colors.Letras2};
    background-color:${(props)=>props.theme.colors.Delete};
    cursor:pointer;
    border:none;
    border-radius:4px;
    padding: 12px 50px;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    transition: background-color 0.3s ease-in;
    margin:0 auto;
    &:hover{
        background-color:${(props)=>props.theme.colors.DeleteHover};
    }

`
