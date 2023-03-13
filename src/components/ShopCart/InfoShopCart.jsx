import React from 'react'
import { CheckoutContainer, CodeContainer, 
  InfoShopCartContainer, InputCode, TotalContainer } from './InfoShoCart.style'

import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
const InfoShopCart = () => {
  return (
    <InfoShopCartContainer>
        <TotalContainer>
            <p><span>Sub total</span> $129</p>
            <p><span>Tax</span> $19</p>
            <p><span>Total</span> $149</p>
        </TotalContainer>
        <CodeContainer>
            <span>Give code</span>
            <InputCode placeholder='Code' 
              type='text' />
              
        </CodeContainer>
        <CheckoutContainer>
            <button>Proceed to checkout  <ArrowForwardOutlinedIcon/> </button>
           
        </CheckoutContainer>
    </InfoShopCartContainer>
  )
}

export default InfoShopCart