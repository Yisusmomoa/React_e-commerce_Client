import React from 'react'
import { ShowProductsHomeStyled } from './ShowProductsHome.style'
import RowProductsHome from '../RowProductsHome/RowProductsHome'
import CardProduct from '../CardProduct/CardProduct'

const ShowProductsHome = () => {
  return (
    <ShowProductsHomeStyled>
        <RowProductsHome/>
    </ShowProductsHomeStyled>
  )
}

export default ShowProductsHome