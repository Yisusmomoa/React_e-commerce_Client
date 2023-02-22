import styled from "styled-components";
import { Link } from 'react-router-dom'

export const SearchContainer=styled.div`
    display:flex;
    width:auto;
    height:auto;
    align-items: center;
`

export const InputSearchStyled=styled.input`
    border:1px solid ${(props)=>props.theme.colors.Letras};
    border-radius:5px;
    padding: 5px 20px;
    margin: 8px 0;
    display: inline-block;
    box-sizing: border-box;
`