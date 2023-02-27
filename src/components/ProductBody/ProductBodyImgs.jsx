import React from 'react'
import { ProductBody_ContainerImgs, 
  ContainerImgs_RowImgs, 
  ImgPrincipal } from './ProductBody.style'
import ProductBodyImgsRow from './ProductBodyImgsRow'

const ProductBodyImgs = ({imgs}) => {
  return (
    <ProductBody_ContainerImgs>
        <ImgPrincipal src={imgs[0]}/>
        <ContainerImgs_RowImgs>
          {
            imgs.map((img, i)=>(
              <ProductBodyImgsRow key={i} img={img}/>
            ))
          }
        </ContainerImgs_RowImgs>
    </ProductBody_ContainerImgs>
  )
}

export default ProductBodyImgs