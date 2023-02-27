import React, { useState } from 'react'
import { ProductBodyContainer } from './ProductBody.style'
import ProductBodyImgs from './ProductBodyImgs'
import ProductBodyInfo from './ProductBodyInfo'

// images
import Monitor from '../../assets/Monitor.jpg'
import Monitor1 from '../../assets/Monitor1.jpg'
import Monitor2 from '../../assets/Monitor2.jpg'

const ProductBody = () => {
    
    const [imgs, setImgs]=useState([Monitor, Monitor1, Monitor2])
  return (
    <ProductBodyContainer>
        <ProductBodyImgs imgs={imgs} />
        <ProductBodyInfo/>
    </ProductBodyContainer>
  )
}

export default ProductBody