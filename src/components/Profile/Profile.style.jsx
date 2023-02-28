import styled from "styled-components";
import { device, deviceMin } from "../../styles/breakpoints";
import { Link, NavLink } from "react-router-dom";

export const ProfileContainer=styled.div`
    display:flex;
    border:1px solid ${props=>props.theme.colors.Border};
    background-color:${(props)=>props.theme.colors.fondo};
    height:auto;
    width:100%;
    font-family:${props=>props.theme.fonts.raleway};
`

export const Profile_Aside=styled.aside`
    min-width:350px;
    /* height:auto; */
    height:85vh;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border:1px solid ${props=>props.theme.colors.Border};
`

export const Profile_Link=styled(Link)`
    display:flex;
    width:100%;
    margin:10px 0px 4px 0px;
    height:10%;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    /* font-family:'Raleway', sans-serif; */
    text-decoration: none;
    border-radius:3px;
    color:${(props)=>props.theme.colors.Letras};
    background-color:${props=>props.theme.colors.fondo};
    box-shadow: 1px 2px 10px 5px ${props=>props.theme.colors.Border};
    &:hover{
        color:${(props)=>props.theme.colors.Letras2};
        background-color:${props=>props.theme.colors.Btn_Hover};
    }
    /* background-color:${(props)=>{
        return props.isActive?
        props.theme.colors.Btn_Hover 
        :props.theme.colors.fondo
        }
    }; */
`


export const ButtonLogout=styled.button`
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