import React from 'react'
import { ButtonAddToCart, 
  InputQuantity, 
  ProductBody_ContainerInfo, 
  ProductInfo_Actions, 
  ProductInfo_ActionsQuantity } from './ProductBody.style'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { NavBarLink } from '../Navbar/NavBar.style';
const ProductBodyInfo = ({productInfo}) => {
  console.log(productInfo)
  return (
    <ProductBody_ContainerInfo>
      <FavoriteBorderOutlinedIcon fontSize='large'/>
      <h2>{productInfo?.name}</h2>
      <h4>Product details</h4>
      <h6>{productInfo?.description} </h6>
      <h4>Category</h4>
      <NavBarLink>
        <h5>{productInfo?.Category?.name}</h5>
      </NavBarLink>
      <h2>${productInfo?.price}</h2>

      <ProductInfo_Actions>
        <ProductInfo_ActionsQuantity>
          <RemoveCircleOutlineOutlinedIcon fontSize='large' />
          <InputQuantity type='text' />
          <AddCircleOutlineOutlinedIcon fontSize='large'/>
        </ProductInfo_ActionsQuantity>
        <ButtonAddToCart>
          <ShoppingCartOutlinedIcon/>
          Add to cart
        </ButtonAddToCart>
      </ProductInfo_Actions>
        

    </ProductBody_ContainerInfo>
  )
}

export default ProductBodyInfo