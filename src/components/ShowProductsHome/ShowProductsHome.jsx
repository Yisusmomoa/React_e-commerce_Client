import React from 'react'
import { ShowProductsHomeStyled } from './ShowProductsHome.style'
import RowProductsHome from '../RowProductsHome/RowProductsHome'

import CarouselProducts from '../CarouselProducts/CarouselProducts'
import { ButtonForm } from '../Form/Form.style'

const ShowProductsHome = () => {
  return (
    <ShowProductsHomeStyled>
        <RowProductsHome/>
        <CarouselProducts/>
        <ButtonForm>Explore more</ButtonForm>
    </ShowProductsHomeStyled>
  )
}

export default ShowProductsHome