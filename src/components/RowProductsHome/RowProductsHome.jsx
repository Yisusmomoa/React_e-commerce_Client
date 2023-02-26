import React from 'react'
import { RowProductsHomeStyled } from './RowProductsHome.style'
import CardProduct from '../CardProduct/CardProduct'

const RowProductsHome = () => {
  return (
    <RowProductsHomeStyled>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
    </RowProductsHomeStyled>
  )
}

export default RowProductsHome