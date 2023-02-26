import styled from "styled-components";
import { device, deviceMin } from "../../styles/breakpoints";

export const CardProductContainer=styled.div`
    display:flex;
    width:90%;
    height:auto;
    /* border:1px solid ${props=>props.theme.colors.Letras}; */
    border: 1px groove rgba(97, 113, 122, 0.2);
    border-radius:5px;
    flex-direction: column;
    align-items: center;
    padding:10px;
    transition: box-shadow 0.3s ease-in-out;
    &:hover{
        box-shadow: 1px 2px 10px 1px #61717A;
    }
    @media(${device.sm}){
        margin:0 auto;
        height:auto;
    }
`
export const CardProductInfo=styled.div`
    background-color:${props=>
    props.theme.colors.fondo};
`
export const CardProductImg=styled.img`
    width:90%;
    height:190px;
    object-fit: scale-down;
`
