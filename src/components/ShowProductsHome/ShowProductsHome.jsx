import React from 'react'
import { ShowProductsHomeStyled } from './ShowProductsHome.style'
import RowProductsHome from '../RowProductsHome/RowProductsHome'

import CarouselProducts from '../CarouselProducts/CarouselProducts'
import { ButtonForm } from '../Form/Form.style'
import { useGetPaginationProductsQuery } from '../../state/store/service/ProductService'

const ShowProductsHome = () => {
  const {data, isLoading, 
    isSuccess, 
    isError, error}=useGetPaginationProductsQuery({size:4, page:1})
  
  return (
    <ShowProductsHomeStyled>
        <RowProductsHome products={data?.products}/>
        <CarouselProducts products={data?.products}/>
        <ButtonForm>Explore more</ButtonForm>
    </ShowProductsHomeStyled>
  )
}

export default ShowProductsHome