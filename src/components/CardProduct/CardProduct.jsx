import React from 'react'
import { CardProductContainer,
  CardProductImg,
  CardProductInfo } from './CardProduct.style'
import Monitor from '../../assets/Monitor.jpg'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { NavBarLink } from '../Navbar/NavBar.style';
import { ButtonForm } from '../Form/Form.style';

const CardProduct = () => {
  return (
    <NavBarLink to={'/product/1'}>
      <CardProductContainer>
        <CardProductImg src={Monitor} 
          alt='MonitorImage'/>
          
        <CardProductInfo>
          <h2>Name product</h2>
          
          <h3>$219</h3>
          <ButtonForm>
            <ShoppingCartOutlinedIcon/>
            Add to cart
          </ButtonForm>
        </CardProductInfo>

      </CardProductContainer>
    </NavBarLink>
  )
}

export default CardProduct