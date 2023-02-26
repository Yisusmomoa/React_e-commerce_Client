import styled from "styled-components";
import { device, deviceMin } from "../../styles/breakpoints";

export const RowProductsHomeStyled=styled.div`
    width:100%;
    height:auto;
    margin:0 auto;
    display:flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom:15px;
    @media(${device.sm}){
        display:none;
    }
`