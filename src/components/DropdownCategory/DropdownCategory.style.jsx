import styled from "styled-components";

export const DropdownCategoryStyled=styled.select`
    background: transparent;
    border: none;
    font-size: 16px;
    height: 30px;
    padding: 5px;
    width: 150px;
    border-radius:5px;
    padding: 5px 20px;
    margin: 8px 0;
    color:${(props)=>props.theme.colors.Letras};
    font-family:${props=>props.theme.fonts.raleway};
`