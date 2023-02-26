import React from 'react'
import { ShowProductsHomeStyled } from './ShowProductsHome.style'
import RowProductsHome from '../RowProductsHome/RowProductsHome'

import CarouselProducts from '../CarouselProducts/CarouselProducts'

const ShowProductsHome = () => {
  return (
    <ShowProductsHomeStyled>
        <RowProductsHome/>
        <CarouselProducts/>
    </ShowProductsHomeStyled>
  )
}

export default ShowProductsHome