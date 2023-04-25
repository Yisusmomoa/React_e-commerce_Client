import React, { useState } from 'react'
import ListOf from './ListsOf/ListOf'
import PriceFilter from './PriceFilter'
import { Price_Container, Products_AsideOptions } from './AsideProducts.style'
import { useGetAllCategoriesQuery } from '../../../state/store/service/CategoryService'
import { useGetAllBrandsQuery } from '../../../state/store/service/BrandService';

const AsideProducts = ({
  selectCategory, selectBrand, 
  setPriceMinHandle, setPriceMaxHandle
}) => {
  const {data, isError, isSuccess, error}=useGetAllCategoriesQuery();
  const {
    data:dataBrand, isSuccess:isSuccessBrand, 
    isError:isErrorBrand,error:errorBrand
  }=useGetAllBrandsQuery()
  
  return (
    <Products_AsideOptions>
      <ListOf title={'Category'} 
        info={data?.results} select={selectCategory}/>

      <Price_Container>
        <h4>Price</h4>
        <PriceFilter setPrice={setPriceMinHandle}/>
        -
        <PriceFilter setPrice={setPriceMaxHandle}/>
      </Price_Container>
      <ListOf title={'Brands'}
        info={dataBrand} select={selectBrand}/>
    </Products_AsideOptions>
  )
}

export default AsideProducts