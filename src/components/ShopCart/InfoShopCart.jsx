import React, { useContext, useEffect, useState } from 'react'
import { CheckoutContainer, CodeContainer, 
  InfoShopCartContainer, InputCode, TotalContainer } from './InfoShoCart.style'

import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import CartContext from '../../state/context/CartContext';
import { Link } from 'react-router-dom'

const InfoShopCart = () => {
  const {total} = useContext(CartContext)
  const [taxes, settaxes] = useState(0);
  const [superTotal, setSuperTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    total && (
      settaxes(total?.Total-total?.subTotal),
      setSubTotal(total?.subTotal),
      setSuperTotal(total?.Total)
    )
  }, [total]);

  return (
    <InfoShopCartContainer>
        <TotalContainer>
            <p><span>Sub total</span> ${subTotal?.toFixed(2)}</p>
            <p><span>Tax</span> ${taxes?.toFixed(2)}</p>
            <p><span>Total</span> ${superTotal?.toFixed(2)}</p>
        </TotalContainer>
        <CodeContainer>
            <span>Give code</span>
            <InputCode placeholder='Code' 
              type='text' />
              
        </CodeContainer>
        <CheckoutContainer>
            <button>
              <Link to={'/checkout'} style={{color:'#DBE2EF'}}>Proceed to checkout</Link>
              <ArrowForwardOutlinedIcon/> 
            </button>
           
        </CheckoutContainer>
    </InfoShopCartContainer>
  )
}

export default InfoShopCart