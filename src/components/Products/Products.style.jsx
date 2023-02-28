import styled from "styled-components";
import { device, deviceMin } from "../../styles/breakpoints";

export const ProductsContainer=styled.div`
   display:flex;
    border:1px solid ${props=>props.theme.colors.Border};
    background-color:${(props)=>props.theme.colors.fondo};
    height:auto;
    width:auto;
    font-family:${props=>props.theme.fonts.raleway};
`

export const Products_SubNavBar=styled.nav`

`

export const Products_AsideOptions=styled.aside`
     width:350px;
    /* height:auto; */
    height:85vh;
    display:flex;
    flex-direction: column;
    align-items: center;
    border:1px solid ${props=>props.theme.colors.Border};
`

export const Products_ListProducts=styled.div`

`