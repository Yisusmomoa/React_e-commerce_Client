import React from 'react'
import { WhyShopWithUsContainer } from './WhyShopWithUs.style'
import CardWhyShop from './CardWhyShop';

const WhyShopWithUs = () => {
  return (
    <WhyShopWithUsContainer>
        <CardWhyShop 
            iconName={"LocalShippingOutlinedIcon"}
            title={'Free Shipping'}
            info={'Orders over $300'}/>
        <CardWhyShop 
            iconName={"ShieldOutlinedIcon"}
            title={'Secure Payment'}
            info={'Secured payment'}/>
        <CardWhyShop 
            iconName={"SupportAgentOutlinedIcon"}
            title={'Online Support'}
            info={'Support 24/7'}/>
    </WhyShopWithUsContainer>
  )
}

export default WhyShopWithUs