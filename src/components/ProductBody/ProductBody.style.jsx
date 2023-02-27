import styled from "styled-components";
import { device, deviceMin } from "../../styles/breakpoints";

export const ProductBodyContainer=styled.div`
    display:grid;
    height: auto;
    width:90%;
    grid-template-rows:100%;
    grid-template-columns:50% 50%;
    box-sizing: border-box;
    /* box-shadow: 0 3px 10px rgb(0 0 0 / 0.8); */
    border-radius:7px;
    text-align:center;

    margin:0 auto;
    margin-top:2rem;
   
    align-items: center;
    justify-items: center;
    margin-bottom:15px;

    @media(${device.md}){
        grid-template-rows:50% 50%;
        grid-template-columns:100%;
    }

`

export const ProductBody_ContainerImgs=styled.div`
    width:auto;
    height:550px;
    display:flex;
    flex-direction:column;
    justify-content: space-around;

`

export const ImgPrincipal=styled.img`
    width:100%;
    object-fit: scale-down;
    height:400px;
    border:1px solid black;
    border-radius:5px;
    /* padding:20px; */
`

export const ContainerImgs_RowImgs=styled.div`
    width:100%;
    height:20%;
    display:flex;
    background-color:white;
    justify-content: center;
    align-items: center;
    
    gap:15px;
`

export const Img_RowImgs=styled.img`
    width:50%;
    object-fit:scale-down;
    height:75%;
    /* margin:0 15px 0 15px; */
    overflow:hidden;
    cursor:pointer;
    border:1px solid black;
    border-radius:2px;
`


export const ProductBody_ContainerInfo=styled.div`
    width:100%;
    height:auto;
    display:flex;
    flex-direction:column;
    align-items: flex-start;
    color:${props=>props.theme.colors.Letras};
    justify-content: center;
    margin-left:5rem;
    @media(${device.md}){
        margin-left:0;
    }
`
export const ProductInfo_Actions=styled.div`
    width:100%;
    height:auto;
    display:flex;
    flex-wrap: wrap;
    @media(${device.sm}){
        width:100%;
        height:100px;
        flex-direction: column;
        justify-content: space-between;
    }

`
export const ProductInfo_ActionsQuantity=styled.div`
    width:auto;
    height:35px;
    display:flex;
    justify-content: space-evenly;
    align-items: stretch;
`



export const ButtonAddToCart=styled.button`
    color:${(props)=>props.theme.colors.Letras2};
    background-color:${(props)=>props.theme.colors.Btn_Hover};
    cursor:pointer;
    border:none;
    border-radius:4px;
    padding: 12px 35px;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    transition: background-color 0.3s ease-in;
    margin:0 auto;
    &:hover{
        background-color:${(props)=>props.theme.colors.Btn_Reposo};
    }

`

export const InputQuantity=styled.input`
    border:2px solid ${(props)=>props.theme.colors.Border};
    border-radius:5px;
`