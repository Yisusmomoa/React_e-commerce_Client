import styled from "styled-components";
import { device, deviceMin } from "../../../styles/breakpoints";

export const SubNavbarContainer=styled.nav`
    width:100%;
    height:auto;
    display:flex;
    justify-content: space-around;
    align-items: center;

`
export const ButtonAdd=styled.button`
    width:auto;
    height:auto;
    background-color:transparent;
    border:none;
    color:${props=>props.theme.colors.Letras};
    
`