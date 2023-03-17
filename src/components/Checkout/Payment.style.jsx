import styled from "styled-components";
import { device, deviceMin } from "../../styles/breakpoints";


export const PaymentContainer=styled.div`
    width:100%;
    min-height:60vh;
    display:flex;
    flex-direction: column;

`
export const Payment_Header=styled.div`
    width:100%;
    height:100%;

`
export const Payment_PayPal=styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    img{
        width:64px;
        height:48px;
    }
`

export const Payment_Card=styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items: center;
    justify-content: space-around;

    img{
        width:48px;
        height:32px;
        margin-right:5px;
        margin-left:5px;
    }
`

export const Payment_Form=styled.form`
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    gap:1.5rem;
    margin-top:1rem;

    div{
        width:100%;
        height:100%;
        margin: 0 auto;

    }
    input{
        border:1px solid ${(props)=>props.theme.colors.Letras};
        border-radius:5px;
        /* padding: 5px 20px; */
        width:80%;
        height:35px;
        box-sizing: border-box;
        font-size:16px;
        font-family:${props=>props.theme.fonts.raleway};
        margin-left:1rem;
    }
    label{
        font-family:${props=>props.theme.fonts.raleway};
        color: ${(props)=>props.theme.colors.Letras};
    }
`
export const Card_Expire_CCV_Container=styled.div`
    width:100%;
    height:100%;
    display:flex;
`