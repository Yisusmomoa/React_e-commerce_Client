import React, { useEffect, useState } from 'react'
import { ProductBodyContainer } from './ProductBody.style'
import ProductBodyImgs from './ProductBodyImgs'
import ProductBodyInfo from './ProductBodyInfo'

import { useGetProductByIdQuery } from '../../state/store/service/ProductService'

const ProductBody = ({idProd}) => { 
    const {data, isLoading, isSuccess, isError, error}=useGetProductByIdQuery(idProd)
    const [imgs, setImgs]=useState([])
    const [productInfo, setProductInfo]=useState({})

    useEffect(() => {
      if(isSuccess){
        console.log(data)
        setProductInfo(data)
        setImgs(data?.ImgProducts)
      }
      return ()=>{
        setImgs([])
        setProductInfo({})
      }
    }, [isLoading]);

  return (
    <ProductBodyContainer>
        <ProductBodyImgs imgs={imgs} />
        <ProductBodyInfo productInfo={productInfo}/>
    </ProductBodyContainer>
  )
}

export default ProductBody