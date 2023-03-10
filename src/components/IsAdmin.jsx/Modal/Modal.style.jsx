import styled from "styled-components";
import { device, deviceMin } from "../../../styles/breakpoints";

export const ModalArticle=styled.article`
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    background-color: rgba(0,0,0,0.75);
    display: none;
    justify-content: center;
    align-items: center;
    display:${props=>props.isOpen?"flex":"none"};
`

export const ModalContainer=styled.div`
    position: relative;
    padding:4rem;
    background-color: #fff;
    min-width: 320px;
    max-width: 480px;
    min-height: 200px;
    max-height: 600px;
    overflow-y:auto;
    border-radius:5px;
`

export const ModalClose_Btn=styled.button`
    position: absolute;
    top:1rem;
    right: 1rem;
    background-color:transparent;
    border:none;
    color:${props=>props.theme.colors.Delete};
    
`

export const Modal_InputStyled=styled.input`
    border:1px solid ${(props)=>props.theme.colors.Letras};
    border-radius:5px;
    padding: 5px 20px;
    margin: 8px 0;
    display: inline-block;
    box-sizing: border-box;
    font-size:18px;
    font-family:${props=>props.theme.fonts.raleway};
`

export const ButtonAddModalStyle=styled.button`
    color:${(props)=>props.theme.colors.Letras2};
    cursor:pointer;
    border:none;
    border-radius:4px;
    padding: 12px 50px;
    text-align: center;
    text-decoration: none;
    background-color:#3F72AF;
    font-size: 18px;
    transition: background-color 0.3s ease-in;
    &:hover{
        background-color:#112D4E;
    }
`