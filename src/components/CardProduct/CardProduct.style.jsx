import styled from "styled-components";
import { device, deviceMin } from "../../styles/breakpoints";

export const CardProductContainer=styled.div`
    display:flex;
    width:100%;
    height:auto;
    border:1px solid ${props=>props.theme.colors.Letras};
    border-radius:5px;
    flex-direction: column;
    align-items: center;
    padding:10px;
    &:hover{
        
    }
`
export const CardProductInfo=styled.div`
    background-color:${props=>
    props.theme.colors.fondo};
`

