import React, { useEffect, useState } from 'react'
import { ProductBody_ContainerImgs, 
  ContainerImgs_RowImgs, 
  ImgPrincipal } from './ProductBody.style'
import ProductBodyImgsRow from './ProductBodyImgsRow'

const ProductBodyImgs = ({imgs}) => {
  const [imgPrincipal, setImgPrincipal] = useState("");
  const [imgsProd, setImgsProd] = useState([]);

  const handleClickImg=(src)=>{
    setImgPrincipal(src)
  }

  useEffect(() => {
    if(imgs){
      setImgsProd(imgs)
      setImgPrincipal(imgs[0]?.LinkImg)
    }
    return ()=>{
      setImgPrincipal("")
      setImgsProd([])
    }
  }, [imgs]);

  return (
    <ProductBody_ContainerImgs>
        <ImgPrincipal src={imgPrincipal}/>
        <ContainerImgs_RowImgs>
          {
            imgsProd?.map((img, i)=>(
              <ProductBodyImgsRow key={i} img={img?.LinkImg} onChangeImg={handleClickImg}/>
            ))
          }
        </ContainerImgs_RowImgs>
    </ProductBody_ContainerImgs>
  )
}

export default ProductBodyImgs