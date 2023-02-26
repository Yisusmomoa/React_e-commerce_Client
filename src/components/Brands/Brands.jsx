import React from 'react'
import { BrandsContainer } from './Brands.style'
import Brand from './Brand'
import acer from '../../assets/brands/acer.jpg'
import asus from '../../assets/brands/asus.png'
import nvidia from '../../assets/brands/nvidia.jpeg'
import samsung from '../../assets/brands/samsung.png'
const Brands = () => {
  return (
    <BrandsContainer>
        <Brand imgBrand={acer}/>
        <Brand imgBrand={asus}/>
        <Brand imgBrand={nvidia}/>
        <Brand imgBrand={samsung}/>
    </BrandsContainer>
  )
}

export default Brands