import styled from "styled-components";
import { device, deviceMin } from "../../styles/breakpoints";


export const FormAdressContainer=styled.form`
    width:100%;
    min-height:60vh;
    display:grid;
    grid-template-rows: 33% 33% 33%;
    grid-template-columns:50% 50%;
    input{
        border:1px solid ${(props)=>props.theme.colors.Letras};
        border-radius:5px;
        /* padding: 5px 20px; */
        width:75%;
        height:35px;
        box-sizing: border-box;
        font-size:16px;
        font-family:${props=>props.theme.fonts.raleway};
        margin-left:1rem;
    }
`

export const CityContainer=styled.div`
    grid-column-start: 1; 
    grid-column-end: 2; 
`

export const ZipCodeContainer=styled.div`
    grid-column-start: 2; 
    grid-column-end: 2; 
`

export const AddressContainer=styled.div`
    grid-column-start: 1; 
    grid-column-end: 2; 
`

export const StateContainer=styled.div`
    grid-column-start: 2; 
    grid-column-end: 2; 
`

export const CountryContainer=styled.div`
    grid-column-start: 1; 
    grid-column-end: 3; 
    input{
        width:90%;
        height:35px;
    }
`
