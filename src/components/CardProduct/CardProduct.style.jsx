import styled from "styled-components";
import { device, deviceMin } from "../../styles/breakpoints";

export const CardProductContainer=styled.div`
    display:flex;
    width:20%;
    height:auto;
    /* border:1px solid ${props=>props.theme.colors.Letras}; */
    border: 1px groove ${props=>props.theme.colors.Border};
    border-radius:5px;
    flex-direction: column;
    align-items: center;
    padding:10px;
    transition: box-shadow 0.3s ease-in-out;
    &:hover{
        box-shadow: 1px 2px 10px 5px ${props=>props.theme.colors.Border};
    }
    @media(${device.md}){
        margin:0 auto;
        height:auto;
        width:45%;
    }
    @media(${device.sm}){
        margin:0 auto;
        height:auto;
        width:90%;
    }
`
export const CardProductInfo=styled.div`
    width:100%;
    height:100%;
    background-color:${props=>
    props.theme.colors.fondo};
`
export const TitleProd=styled.h2`
 font-size: 1.2rem;
  font-weight: 700; 
`
export const PriceProd=styled.h3`
font-size: 1rem;
  font-weight: 500;
  color: black;
`

export const CardProductImg=styled.img`
    width:190px;
    height:190px;
    object-fit: scale-down;
`
