import React from 'react'
import { RowProductsHomeStyled } from './RowProductsHome.style'
import CardProduct from '../CardProduct/CardProduct'

const RowProductsHome = ({products}) => {
  return (
    <RowProductsHomeStyled>
      {
        products?.map(prod=>(
          <CardProduct key={prod.id} product={prod}/>
        ))
      }
    </RowProductsHomeStyled>
  )
}

export default RowProductsHome