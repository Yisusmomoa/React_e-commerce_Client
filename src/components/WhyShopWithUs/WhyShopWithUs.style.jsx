import styled from "styled-components"
import { device, deviceMin } from "../../styles/breakpoints"


export const WhyShopWithUsContainer=styled.div`
    width:100%;
    height:auto;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-bottom:15px;
    @media(${device.sm}){
        gap:12px;
    }
`

export const CardWhySopContainer=styled.div`
    width:20%;
    height:auto;
    display:flex;
    flex-wrap:flex;
    align-items: center;
    justify-content: center;
    justify-content: space-evenly;
    border:1px solid ${props=>props.theme.colors.Border};
    @media(${device.sm}){
        width:85%;
        height:auto;
        flex-direction: column;
        align-items: center;
    }
`