import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CardProduct from '../CardProduct/CardProduct';
import styled from 'styled-components';
import { device, deviceMin } from "../../styles/breakpoints";

const CarouselStyled=styled(Carousel)`
    @media(${deviceMin.md}){
        display:none;
    }
`
const CarouselProducts = ({products}) => {
  return (
    <CarouselStyled>
      {
        products?.map(prod=>(
          <CardProduct key={prod.id} product={prod}/>
        ))
      }
    </CarouselStyled>
  )
}

export default CarouselProducts