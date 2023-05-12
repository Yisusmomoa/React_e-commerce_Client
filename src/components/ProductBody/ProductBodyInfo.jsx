import React, { useContext, useState, useEffect } from 'react'
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
import CartContext from '../../state/context/CartContext';
import { useMeQuery } from '../../state/store/service/UserService';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useAddProductToWishListMutation } from '../../state/store/service/WishlistService';

const ProductBodyInfo = ({productInfo}) => {

  const navigate=useNavigate()
  //#region Context
    const {addProduct} = useContext(CartContext);
  //#endregion Context

  const [quantity, setQuantity]=useState(1)
  const {data}=useMeQuery()
  const addProductCart=(product, quantity)=>{
    if(data?.result){
      addProduct(product, quantity)
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'First create an account or sign in!',
      }).then(()=>{
        navigate('/signIn')
      })
    }
  }
  const favoriteIconClick=()=>{
    addToWishlist({id:productInfo?.id})
  }
  useEffect(() => {
    if(isLoading){
      Swal.fire({
          title:'Loading',
          allowEscapeKey: false,
          allowOutsideClick: false,
          didOpen:()=>{
              Swal.showLoading()
          }
      })
    }
    if (isSuccess) {
        Swal.fire({
            icon: 'success',
            title: 'successfully added to your wishlist'
        })
    }
    else if(isError){
      console.log("error", error)
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error?.data.message,
        })
    }
  }, [isLoading]);
  return (
    <ProductBody_ContainerInfo>
      <FavoriteBorderOutlinedIcon fontSize='large' onClick={()=>favoriteIconClick()}/>
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
        {/* <ButtonAddToCart onClick={()=>addProduct(productInfo, quantity)}> */}
        <ButtonAddToCart onClick={()=>addProductCart(productInfo, quantity)}>
          <ShoppingCartOutlinedIcon/>
          Add to cart
        </ButtonAddToCart>
      </ProductInfo_Actions>
        

    </ProductBody_ContainerInfo>
  )
}

export default ProductBodyInfo