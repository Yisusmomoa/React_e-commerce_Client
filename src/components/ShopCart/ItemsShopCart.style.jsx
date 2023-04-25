import styled from 'styled-components'
import { device, deviceMin } from '../../styles/breakpoints'


export const ItemsShopCartContainer=styled.div`
    width:100%;
    max-height:90vh;
    background-color:transparent;
    @media(${device.sm}){
        height: 500px;
        width:100%;
  }

`

export const HeaderItemsInCart=styled.div`
    width:auto;
    height:45px;
    display:flex;
    /* justify-content: space-between; */
    justify-content: space-around;
    margin:10px;
    color:${(props)=>props.theme.colors.Letras};
`

export const ItemsInCart=styled.div`
    display:flex;
    flex-direction: column;
    max-height:90%;
    overflow-y:scroll;
`



