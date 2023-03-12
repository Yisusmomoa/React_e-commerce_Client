// font-family: 'Raleway', sans-serif;
import styled from "styled-components";
import { Link } from 'react-router-dom'
import { device,
deviceMin } from "../../styles/breakpoints";

export const NavBarStyled=styled.nav`
  display:flex;
  width: auto;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  background-color:${(props)=>props.theme.colors.fondo};
  height:100%;
  color:${(props)=>props.theme.colors.Letras};
  font-family:${props=>props.theme.fonts.raleway};
`

export const NavBarContainerLinks=styled.div`
    display:flex;
    width:80%;
    align-items: center;
    justify-content: space-evenly;
    @media(${device.sm}){
        display:none;
    }
`
export const CartProfileContainer=styled.div`
    display:flex;
    width:7%;
    height:auto;
    justify-content: space-between;
    @media(${device.lg}){
        display:none;
    }

`

export const NavBarLink=styled(Link)`
    font-size: ${(props)=>{
        return props.responsive?
        "32px":"16px"
    }};
    /* font-family:'Raleway', sans-serif; */
    text-decoration: none;

    color:${(props)=>{
        return props.responsive?
        props.theme.colors.fondo 
        :props.theme.colors.Letras
        }
    };
    margin:${(props)=>{
        return props.responsive?
        "24px":"0px"
    }};
    &:hover{
        color:${(props)=>props.theme.colors.Letras_hover};
    }
`

export const NavBarContainerResponsive=styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
    height:auto;
    justify-content: space-between;
    align-items: center;
    /* border:1px solid ${(props)=>props.theme.colors.Letras}; */
    /* box-shadow: 1px 1px 15px ${(props)=>props.theme.colors.Letras}; */
    @media(${deviceMin.xs}){
        display:none
    }
`
export const NavbarHeaderOptsRespopnsive=styled.div`
    display:flex;
    align-items: center;
    width: 100%;
    height:100%;
    justify-content: space-between;
`

export const NavBarExtendedContainer=styled.div`
    display:flex;
    flex-direction:column;
    width:75vw;
    height:95vh;
    font-family:${props=>props.theme.fonts.raleway};
    background-color:${(props)=>props.theme.colors.Btn_Hover};
    border-radius:5px;
`



