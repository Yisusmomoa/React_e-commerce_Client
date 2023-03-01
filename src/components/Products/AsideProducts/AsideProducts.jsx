import React, { useState } from 'react'
import ListOf from './ListsOf/ListOf'
import PriceFilter from './PriceFilter'
import { Price_Container, Products_AsideOptions } from './AsideProducts.style'

const arrayCategory=[
  {id:1, name:"Category1"},
  {id:2, name:"Category2"},
  {id:3, name:"Category3"},
  {id:4, name:"Category4"},
  {id:5, name:"Category5"},
]
const arrayBrand=[
  {id:1, name:"Brand1"},
  {id:2, name:"Brand2"},
  {id:3, name:"Brand3"},
  {id:4, name:"Brand4"},
  {id:5, name:"Brand5"},
]


const AsideProducts = () => {
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
        info={arrayCategory} select={selectCategory}/>

      <Price_Container>
        <h4>Price</h4>
        <PriceFilter setPrice={setPriceMinHandle}/>
        -
        <PriceFilter setPrice={setPriceMaxHandle}/>
      </Price_Container>
      <ListOf title={'Brands'}
        info={arrayBrand} select={selectBrand}/>
    </Products_AsideOptions>
  )
}

export default AsideProducts