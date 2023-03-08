import styled from "styled-components";
import { device, deviceMin } from "../../../styles/breakpoints";
export const Products_AsideOptions=styled.aside`

     width:350px;
    height:100%;
    /* height:85vh; */
    display:flex;
    flex-direction: column;
    align-items: center;
    border:1px solid ${props=>props.theme.colors.Border};
    @media(${device.md}){
        display:none;
    }
`

export const Price_Container=styled.div`
    width:100%;
    height:25%;
    display:flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    
`