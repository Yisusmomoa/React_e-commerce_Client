import styled from "styled-components";
import { device, deviceMin } from "../../styles/breakpoints";

export const BrandsContainer=styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    gap:15px;
    border-radius:5px;
    border:1px solid ${props=>props.theme.colors.Border};
    margin-bottom:15px;
`

export const BrandCard=styled.img`
    width:10rem;
    height:100px;
    object-fit:contain;
    border-radius:5px;
    transition: box-shadow 0.2s ease;
    &:hover{
        box-shadow: 1px 2px 10px 1px ${props=>props.theme.colors.Border} ;
    }
`