import React, { useState } from 'react'
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
  const [quantity, setQuantity]=useState(1)
  console.log(productInfo)
  return (
    <ProductBody_ContainerInfo>
      <FavoriteBorderOutlinedIcon fontSize='large'/>
      <h2>{productInfo?.name}</h2>
      <h4>Product description</h4>
      <h6>{productInfo?.description} </h6>
      <NavBarLink to={`/products/`}>
        <h5>{productInfo?.Category?.name}</h5>
      </NavBarLink>
      <h2>${productInfo?.price}</h2>

      <ProductInfo_Actions>
        <ProductInfo_ActionsQuantity>
          <RemoveCircleOutlineOutlinedIcon fontSize='large' onClick={()=>quantity>1&&setQuantity(quantity-1)} />
          <InputQuantity type='number' value={quantity}  min={1} max={100} />
          <AddCircleOutlineOutlinedIcon fontSize='large' onClick={()=>quantity<100&&setQuantity(quantity+1)}/>
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