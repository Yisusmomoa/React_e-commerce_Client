import React from 'react'
import { Products_ListProducts } from './Products.style'
import CardProduct from '../CardProduct/CardProduct'

const ListProducts = ({products}) => {
  return (
    <>
      <Products_ListProducts>
        {
          products?.map(prod=>(
            <CardProduct key={prod.id} product={prod}/>
          ))
        }
      </Products_ListProducts>
    </>
  )
}

export default ListProducts