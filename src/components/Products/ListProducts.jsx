import React from 'react'
import { Products_ListProducts } from './Products.style'
import CardProduct from '../CardProduct/CardProduct'
import { useGetPaginationProductsQuery } from '../../state/store/service/ProductService'

const ListProducts = () => {
  const {data, isLoading, 
    isSuccess, 
    isError, error}=useGetPaginationProductsQuery({size:8, page:1})
  return (
    <Products_ListProducts>
      {
        data?.products.map(prod=>(
          <CardProduct key={prod.id} product={prod}/>
        ))
      }
    </Products_ListProducts>
  )
}

export default ListProducts