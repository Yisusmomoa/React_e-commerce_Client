import styled from "styled-components";
import { device, deviceMin } from "../../styles/breakpoints";

export const ProductsContainer=styled.div`

    display:flex;
    height:100%;
    width:100%;
    /* display:grid;
    grid-template-areas: "nav nav nav"
                        "aside main main"
                        "pag pag pag"; */
    border:1px solid ${props=>props.theme.colors.Border};
    background-color:${(props)=>props.theme.colors.fondo};
    font-family:${props=>props.theme.fonts.raleway};
`

export const Products_SubNavBar=styled.nav`
    border:1px solid ${props=>props.theme.colors.Border};
    background-color:${(props)=>props.theme.colors.fondo};
    height:25%;
    width:100%;
    @media(${deviceMin.md}){
        display:none;
    }
`

export const Products_ListProducts=styled.div`
    margin-top:1rem;
    margin-bottom:1rem;
    width:100%;
    height:100%;
    display:flex;
    flex-wrap:wrap;
    justify-content: space-evenly;
    gap:15px;
`