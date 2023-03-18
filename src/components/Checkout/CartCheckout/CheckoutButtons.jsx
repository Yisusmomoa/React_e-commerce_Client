import React from 'react'
import { CartCheckout_Btns } from './CartCheckout.style'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

const CheckoutButtons = () => {
  return (
    <CartCheckout_Btns>
        <button>
            <ArrowBackOutlinedIcon/>
            Back to shop cart
        </button>

        <button>
            <LocalMallOutlinedIcon />
            Confirm and buy
        </button>
    </CartCheckout_Btns>
  )
}

export default CheckoutButtons