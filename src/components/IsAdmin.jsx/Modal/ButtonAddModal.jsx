import React from 'react'
import styled from "styled-components";
const ButtonAddModalStyle=styled.button`
    color:${(props)=>props.theme.colors.Letras2};
    cursor:pointer;
    border:none;
    border-radius:4px;
    padding: 12px 50px;
    text-align: center;
    text-decoration: none;
    background-color:${(props)=>{props.theme.colors.Btn_Hover}};
    font-size: 18px;
    transition: background-color 0.3s ease-in;
    &:hover{
        background-color:${(props)=>{props.theme.colors.Btn_Reposo}};
    }
`
const ButtonAddModal = () => {
  return (
    <ButtonAddModalStyle>Add</ButtonAddModalStyle>
  )
}

export default ButtonAddModal