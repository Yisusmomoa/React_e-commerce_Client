import React from 'react'
import { DetailProductsContainer, 
  InfoProductCartContainer,  
  ProductInfo_ShopCart, 
  QuanitytContainer_ShopCart,
  SubTotalContainer_ShopCart} from './InfoProductCart.style'
import Monitor1 from '../../../assets/Monitor1.jpg'
import { InputQuantity } from '../../ProductBody/ProductBody.style'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';

const InfoProductCart = () => {
  return (
    <InfoProductCartContainer>

      <DetailProductsContainer>
        <img src={Monitor1} width='150px' height='160px' />
        <ProductInfo_ShopCart>
          <h4>Product name</h4>
          <p><span>Sub total</span> $129</p>
          <p>Remove</p>
        </ProductInfo_ShopCart>
      </DetailProductsContainer>

      <QuanitytContainer_ShopCart>
        <RemoveCircleOutlineOutlinedIcon fontSize='large' />
        <InputQuantity type='number' min={1} max={100} />
        <AddCircleOutlineOutlinedIcon fontSize='large' />
      </QuanitytContainer_ShopCart>

      <SubTotalContainer_ShopCart>
        <span>$129</span>
      </SubTotalContainer_ShopCart>
    </InfoProductCartContainer>
  )
}

export default InfoProductCart