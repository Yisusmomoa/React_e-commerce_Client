import React from 'react'
import { CartCheckout_Btns } from './CartCheckout.style'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { Link } from 'react-router-dom';

const CheckoutButtons = ({handleMakeBuy}) => {
  return (
    <CartCheckout_Btns>
        <button>
            <ArrowBackOutlinedIcon/>
            <Link to={'/shopCart'} style={{color:'#DBE2EF'}}>Back to shop cart</Link>
        </button>

        <button onClick={()=>handleMakeBuy()}>
            <LocalMallOutlinedIcon />
            Confirm and buy
        </button>
    </CartCheckout_Btns>
  )
}

export default CheckoutButtons