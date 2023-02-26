import React, { useEffect } from 'react'
import { CardWhySopContainer } from './WhyShopWithUs.style'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';

const getIconFromName=(iconName)=>{
    switch (iconName) {
        case "LocalShippingOutlinedIcon":
            return <LocalShippingOutlinedIcon 
                fontSize='large'
                color='info'/>
        case "ShieldOutlinedIcon":
            return <ShieldOutlinedIcon 
                fontSize='large'
                color='info'/>
        case "SupportAgentOutlinedIcon":
            return <SupportAgentOutlinedIcon 
                fontSize='large'
                color='info'/>
    
        default:
            break;
    }
}
const CardWhyShop = ({iconName, title, info}) => {
    const icon=getIconFromName(iconName)
  return (
    <CardWhySopContainer>
        {icon}
        <div>
            <h3>{title}</h3>
            <h5>{info}</h5>
        </div>
    </CardWhySopContainer>
  )
}

export default CardWhyShop