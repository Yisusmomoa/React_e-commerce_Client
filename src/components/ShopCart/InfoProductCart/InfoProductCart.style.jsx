import styled from 'styled-components'
import { device, deviceMin } from '../../../styles/breakpoints'


export const InfoProductCartContainer=styled.div`
    display:grid;
    width:auto;
    height:200px;
    grid-template-rows:100%;
    grid-template-columns:33% 33% 33%;
`

export const ImgProduct_ShopCart=styled.img`
    width:150px;
    height:160px;
   
    @media(${device.xl}){
        width:100px;
        height:120px;
    }
    @media(${device.lg}){
        width:50px;
        height:60px;
    }
    @media(${device.md}){
        width:70px;
        height:80px;
    }
`

export const DetailProductsContainer=styled.div`
    display:grid;
    grid-template-rows:100%;
    grid-template-columns:50% 50%;
    @media(${device.lg}){
        grid-template-rows:33% 33% 33%;
        grid-template-columns:100%;
    }
`

export const ProductInfo_ShopCart=styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    
    h4{
        @media(${device.lg}){
            display:none;
        }
    }
    @media(${device.lg}){
        justify-content: flex-start;
    }
`

export const QuanitytContainer_ShopCart=styled.div`
    width:auto;
    height:100%;
    margin:0 auto;
    display:flex;
    align-items: center;
    @media(${device.lg}){
        width:100%;
    }
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
    @media(${device.lg}){
        width:100%;
    }
    
`

