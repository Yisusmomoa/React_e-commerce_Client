import React from 'react'
import { Products_ListProducts } from './Products.style'
import CardProduct from '../CardProduct/CardProduct'

const ListProducts = () => {
  return (
    <Products_ListProducts>
      <CardProduct/>
      <CardProduct/>
      <CardProduct/>
      <CardProduct/>
      <CardProduct/>
      <CardProduct/>
    </Products_ListProducts>
  )
}

export default ListProducts