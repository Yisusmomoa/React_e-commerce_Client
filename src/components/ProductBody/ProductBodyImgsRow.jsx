import React from 'react'
import { Img_RowImgs } from './ProductBody.style'

const ProductBodyImgsRow = ({img, onChangeImg}) => {
  return (
    <Img_RowImgs src={img} 
      onClick={(ev)=>onChangeImg(ev.target.src)} 
    />
  )
}

export default ProductBodyImgsRow