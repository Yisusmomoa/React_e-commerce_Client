import styled from "styled-components";
import { device, deviceMin } from "../../styles/breakpoints";
import { Link, NavLink } from "react-router-dom";

export const ProfileContainer=styled.div`
    height:auto;
    width:100%;
    display:flex;
    flex-wrap:wrap;
    border:1px solid ${props=>props.theme.colors.Border};
    background-color:${(props)=>props.theme.colors.fondo};
    font-family:${props=>props.theme.fonts.raleway};
    /* justify-content: center; */
    align-items: center;
    margin: 0 auto;
`

export const Profile_Aside=styled.aside`
    width:30%;
    /* height:auto; */
    height:85vh;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* border:1px solid ${props=>props.theme.colors.Border}; */
    @media(${device.sm}){
        width:50%;
        display:none;
    }
`

export const Profile_SubNavbar=styled.div`
    width:100%;
    /* height:auto; */
    height:auto;
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-bottom:15px;
    @media(${deviceMin.sm}){
        display:none;
    }
`
export const SubNavBar_InfoUser=styled.div`

`
export const SubNavBar_Links=styled.div`
    display:flex;
    width:80%;
    height:auto;
    gap:5px;
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
export const ProfilePic=styled.form`
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    background-color: #111;
   
`

export const ImgProfile=styled.img`
    width:100%;
    height:100%;
    border-radius: 50%;
    cursor:pointer;
    object-fit: cover;
    opacity: 1;
    transition: opacity .2s ease-in-out;
    &:hover{
        opacity: .5;
    }
`

export const ProfilePicContent=styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    opacity: 0;
    transition: opacity .2s ease-in-out;
    &:hover{
        cursor:pointer;
        opacity: 1;
    }
    
`

export const InputFile=styled.input`
    opacity: 0;
`