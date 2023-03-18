import styled from "styled-components";

export const CartCheckoutContainer=styled.div`
    width:100%;
    min-height:60vh;
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

`

export const CartCheckout_ListCartContainer=styled.div`
    min-width: 300px;
    max-width: 320px;
    min-height: 100px;
    max-height: 200px;
    border:1px solid ${props=>props.theme.colors.Border};
    margin: 0 auto;
    overflow-y:scroll;
    div{
        width:100%;
    }

`
export const CartCheckout_Btns=styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content: space-around;
    button{
        color:${(props)=>props.theme.colors.Letras2};
        cursor:pointer;
        border:none;
        border-radius:4px;
        /* padding: 12px 50px; */
        width:auto;
        height:45px;
        text-align: center;
        text-decoration: none;
        background-color:#3F72AF;
        font-size: 18px;
        transition: background-color 0.3s ease-in;
        &:hover{
            background-color:#112D4E;
        }
    }
`

export const CheckoutTotalContainer=styled.div`
    width:100%;
    text-align:'left';
    h3{
        margin-left:1rem;
    }

`
export const ListCartElementContainer=styled.div`
    width:100%;
    height:auto;
    display:flex;
    justify-content: space-evenly;
    
`

