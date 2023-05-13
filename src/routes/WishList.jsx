import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useShowProductsWishListQuery } from '../state/store/service/WishlistService'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { WishlistCard, WishlistContainer, 
  WishlistImgCard, WishlistInfoContainer, 
  WishlistInfoProduct, 
  WishlistLinkProduct, WishlistPrice } from '../components/Wishlist/WishlistStyle.style';
import { ButtonAddToCart } from '../components/ProductBody/ProductBody.style';

const WishList = () => {
  const {
    data,
    isLoading,
    isSuccess,
    isError,
    error
  }=useShowProductsWishListQuery()
    console.log("🚀 ~ file: WishList.jsx:13 ~ WishList ~ data:", data)
  
  return !isLoading&&(
    <WishlistContainer>
      {
        data?.products.map(product=>(
          <WishlistCard key={product.id}>
            <WishlistImgCard src={product.ImgProducts[0].LinkImg}
              alt={product.name} width={'50px'} height={'50px'}/>
            <WishlistInfoContainer>
              <WishlistLinkProduct to={`/product/${product?.id}`}><h3>{product.name}</h3></WishlistLinkProduct>
              
              <WishlistPrice>
                {/* price */}
                  <h4>${product.price}</h4>
                  <ButtonAddToCart>
                    <ShoppingCartOutlinedIcon/>
                    Add to cart
                  </ButtonAddToCart>
              </WishlistPrice>

              <WishlistInfoProduct>
                <h5>{product.Category.name}</h5>
                <p>Added {product.WishList.createdAt}</p>
                <h4>Eliminar</h4>
              </WishlistInfoProduct>

            </WishlistInfoContainer>

          </WishlistCard>
        ))
      }
    </WishlistContainer>
    )
}

export default WishList