import React, { useContext, useEffect } from 'react'
import CartContext from '../../../state/context/CartContext'
import { CartCheckoutContainer } from './CartCheckout.style'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import ListCart from './ListCart';
import CheckoutButtons from './CheckoutButtons';
import CheckoutTotal from './CheckoutTotal';
import { useMakeBuyMutation } from '../../../state/store/service/BuyService';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CartCheckout = () => {
  const {cart, total}=useContext(CartContext)
  const navigate=useNavigate()
  const [makeBuy, {
    isSuccess,
    isLoading,
    isError,
    error
  }]=useMakeBuyMutation()
  const handleMakeBuy=()=>{
    console.log(cart)
    makeBuy(cart)
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
            title: 'successfully'
        }).then(()=>navigate('/home'))
    }
    else if(isError){
        console.log(error)
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error?.data?.message,
        })
    }
  }, [isLoading]);
  return (
    <div>
      <h2>
        Cart
        <ShoppingCartOutlinedIcon/>
      </h2>
      <CartCheckoutContainer>
        <ListCart cart={cart} />
        
        <CheckoutTotal total={total}/>

        <CheckoutButtons handleMakeBuy={handleMakeBuy}/>

      </CartCheckoutContainer>

    </div>
  )
}

export default CartCheckout