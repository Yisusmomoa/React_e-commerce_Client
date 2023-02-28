import styled from "styled-components";
import { device, deviceMin } from "../../styles/breakpoints";

export const Products_AsideOptions=styled.aside`
     width:350px;
    /* height:auto; */
    height:85vh;
    display:flex;
    flex-direction: column;
    align-items: center;
    border:1px solid ${props=>props.theme.colors.Border};
`

