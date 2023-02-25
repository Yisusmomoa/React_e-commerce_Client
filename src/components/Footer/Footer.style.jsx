import styled from "styled-components";
import { Link } from 'react-router-dom'
import { device,
deviceMin } from "../../styles/breakpoints";
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

export const FooterContainer=styled.footer`
    display:flex;
    flex-wrap: wrap;
    flex-direction: column;
    width:100%;
    height:auto;
    border:1px solid black;
    background-color:${(props)=>props.theme.colors.Letras_hover};
    color:${(props)=>props.theme.colors.fondo};
    font-family:${props=>props.theme.fonts.raleway};
    @media(${deviceMin.md}){
        display:flex;
        flex-wrap: wrap;
        justify-content: space-between;
        flex-direction: row;
    }
`

export const Footer_BuyContainer=styled.div`
    display:flex;
    width:auto;
    flex-direction: column;
    align-items: flex-start;
    margin-left:1em;
`

export const Footer_HelpContact=styled.div`
    display:flex;
    width:auto;
    flex-direction: column;
    align-items: flex-start;
    margin-left:1em;
`

export const Footer_About=styled.div`
    display:flex;
    width:auto;
    flex-direction: column;
    align-items: flex-start;
    margin-left:1em;

`

export const Footer_TarjetasYEnvio_Tarjetas=styled.img`
    width:175px;
    height:auto;
`

export const Footer_TarjetasYEnvio=styled.div`
    display:flex;
    flex-direction: row;
    width:auto;
    height:auto;
    flex-wrap: wrap;
`

export const Footer_Tarjetas=styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    height:auto;
    justify-content: space-evenly;
    align-items: center;

`
export const Footer_Envio_Imgs=styled.img`
    width:200px;
    height:auto;
    @media(${deviceMin.md}){
        width:150px;
        height:auto;
    }
`

export const Footer_Envio=styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    height:auto;
    justify-content: space-evenly;
    align-items: center;

`


