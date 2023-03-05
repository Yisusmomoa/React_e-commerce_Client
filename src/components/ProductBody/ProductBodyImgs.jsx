import React, { useState } from 'react'
import { ProductBody_ContainerImgs, 
  ContainerImgs_RowImgs, 
  ImgPrincipal } from './ProductBody.style'
import ProductBodyImgsRow from './ProductBodyImgsRow'

const ProductBodyImgs = ({imgs}) => {
  console.log(imgs)
  const [imgPrincipal, setImgPrincipal] = useState(imgs[0]);
  const handleClickImg=(src)=>{
    setImgPrincipal(src)
  }
  return (
    <ProductBody_ContainerImgs>
        <ImgPrincipal src={imgPrincipal}/>
        <ContainerImgs_RowImgs>
          {
            imgs.map((img, i)=>(
              <ProductBodyImgsRow key={i} img={img} onChangeImg={handleClickImg}/>
            ))
          }
        </ContainerImgs_RowImgs>
    </ProductBody_ContainerImgs>
  )
}

export default ProductBodyImgs