import styled from 'styled-components'
import { device, deviceMin } from '../../../styles/breakpoints'


export const InfoProductCartContainer=styled.div`
    display:grid;
    width:auto;
    height:200px;
    grid-template-rows:100%;
    grid-template-columns:33% 33% 33%;
`

export const DetailProductsContainer=styled.div`
    display:grid;
    grid-template-rows:100%;
    grid-template-columns:50% 50%;

`

export const ProductInfo_ShopCart=styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

`

export const QuanitytContainer_ShopCart=styled.div`
    width:auto;
    height:100%;
    margin:0 auto;
    display:flex;
    align-items: center;

`
export const SubTotalContainer_ShopCart=styled.div`
    width:auto;
    height:100%;
    position: relative;
    span{
        position: absolute;
        top: 50%;
        left: 50%;
        font-size:24px;
        font-weight:500;
    }
`

