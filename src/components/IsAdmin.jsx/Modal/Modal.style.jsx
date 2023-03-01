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
`

export const ModalClose_Btn=styled.button`
    position: absolute;
    top:1rem;
    right: 1rem;
    background-color:transparent;
    border:none;
    color:${props=>props.theme.colors.Letras};
    
`

export const Modal_InputStyled=styled.input`
    border:1px solid ${(props)=>props.theme.colors.Letras};
    border-radius:5px;
    padding: 5px 20px;
    margin: 8px 0;
    display: inline-block;
    box-sizing: border-box;
    font-size:16px;
    font-family:${props=>props.theme.fonts.raleway};
`