import React, { useState } from 'react'
import { DetailProductsContainer, 
  ImgProduct_ShopCart, 
  InfoProductCartContainer,  
  ProductInfo_ShopCart, 
  QuanitytContainer_ShopCart,
  SubTotalContainer_ShopCart} from './InfoProductCart.style'
import Monitor1 from '../../../assets/Monitor1.jpg'
import { InputQuantity } from '../../ProductBody/ProductBody.style'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';

const InfoProductCart = ({product, updateAmount, removeProduct}) => {
  
  const [amount, setAmount]=useState(product?.amount)
  const increaseAmount=()=>{
    setAmount(amount+1)
    updateAmount(product.id, amount+1)
  }
  const decrementAmount=()=>{
    setAmount(amount-1)
    updateAmount(product.id, amount-1)
  }

  return (
    <InfoProductCartContainer>

      <DetailProductsContainer>
        <ImgProduct_ShopCart src={product?.ImgProducts[0].LinkImg}/>
        <ProductInfo_ShopCart>
          <h4>{product?.name}</h4>
          <p><span>Price</span> ${product?.price}</p>
          <p style={{color:'#C90000', cursor:'pointer'}} 
            onClick={()=>removeProduct(product?.id)}>Remove</p>
        </ProductInfo_ShopCart>
      </DetailProductsContainer>

      <QuanitytContainer_ShopCart>
        <RemoveCircleOutlineOutlinedIcon fontSize='large' 
          onClick={()=>decrementAmount()}/>
        <InputQuantity type='number' min={1} max={100} 
          disabled value={product?.amount}  />
        <AddCircleOutlineOutlinedIcon fontSize='large' 
          onClick={()=>increaseAmount()}/>
      </QuanitytContainer_ShopCart>

      <SubTotalContainer_ShopCart>
        <span>${product?.price*product?.amount}</span>
      </SubTotalContainer_ShopCart>

    </InfoProductCartContainer>
  )
}

export default InfoProductCart