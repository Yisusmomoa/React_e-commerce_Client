import styled from 'styled-components'
import { device, deviceMin } from '../../styles/breakpoints'

export const InfoShopCartContainer=styled.div`
    width:100%;
    max-height:100%;
    background-color:#1b262ccf;
    color:${props=>props.theme.colors.Letras2};
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    border-radius:5px;
    @media(${device.sm}){
        height: auto;
        width:100%;
        margin-bottom:1rem;
    }
`

export const TotalContainer=styled.div`
    width:100%;
    height:auto;
    display:flex;
    flex-direction:column;
    font-size:26px;
    font-weight:500;
    p{
        width:100%;
        display:flex;
        justify-content: space-around;
        align-items: baseline;
    }
    span{
        font-size:20px;
    }
`
export const CodeContainer=styled.div`
    width:70%;
    height:auto;
    display:flex;
    flex-direction:column;
    margin:0 auto;
    span{
        font-size:28px;
        font-weight:500;
        margin-bottom:1rem;
    }
`

export const InputCode=styled.input`
    border:none;
    color:${(props)=>props.theme.colors.Letras2};
    width:100%;
    height:45px;
    font-size:20px;
    background-color:transparent;
    border-bottom: 2px solid ${(props)=>props.theme.colors.fondo};
`

export const CheckoutContainer=styled.div`
    width:100%;
    height:auto;
    button{
        color:${(props)=>props.theme.colors.Letras2};
        background-color:${(props)=>props.theme.colors.Btn_Hover};
        cursor:pointer;
        border:none;
        border-radius:4px;
        /* padding: 12px 50px; */
        width:70%;
        height:55px;
        text-align: center;
        text-decoration: none;
        font-size: 22px;
        transition: background-color 0.5s ease-in;
        margin:0 auto;
        &:hover{
            background-color:${(props)=>props.theme.colors.Btn_Reposo};
        }
    }
`