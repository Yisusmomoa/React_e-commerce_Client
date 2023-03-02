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
const ProductBodyInfo = () => {
  return (
    <ProductBody_ContainerInfo>
      <FavoriteBorderOutlinedIcon fontSize='large'/>
      <h2>Gabinete Naceb Zion</h2>
      <h4>Product details</h4>
      <h6>Gabinete Naceb Zion con Ventana RGB, 
        Full-Tower, ATX, USB 3.0, 
        sin Fuente, 3 Ventiladores 
        RGB Instalados, Negro
      </h6>
      <h4>Category</h4>
      <NavBarLink>
        <h5>Hardware</h5>
      </NavBarLink>
      <h2>$129</h2>

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