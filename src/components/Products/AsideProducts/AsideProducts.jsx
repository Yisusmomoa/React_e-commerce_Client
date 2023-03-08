import React, { useState } from 'react'
import ListOf from './ListsOf/ListOf'
import PriceFilter from './PriceFilter'
import { Price_Container, Products_AsideOptions } from './AsideProducts.style'
import { useGetAllCategoriesQuery } from '../../../state/store/service/CategoryService'
import { useGetAllBrandsQuery } from '../../../state/store/service/BrandService';
const arrayBrand=[
  {id:1, name:"Brand1"},
  {id:2, name:"Brand2"},
  {id:3, name:"Brand3"},
  {id:4, name:"Brand4"},
  {id:5, name:"Brand5"},
]


const AsideProducts = () => {
  const {data, isError, isSuccess, error}=useGetAllCategoriesQuery();
  const {
    data:dataBrand, isSuccess:isSuccessBrand, 
    isError:isErrorBrand,error:errorBrand
  }=useGetAllBrandsQuery()

  console.log(dataBrand)

  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(0);
  
  const selectCategory=(id)=>{
    console.log("Select category ", id)
  }
  const selectBrand=(id)=>{
    console.log("Select brand ", id)
  }

  const setPriceMinHandle=(price)=>{
    setPriceMin(price)
  }
  const setPriceMaxHandle=(price)=>{
    setPriceMax(price)
  }
  
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