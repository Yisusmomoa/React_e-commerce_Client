import React from 'react'
import { CardProductContainer,
  CardProductImg,
  CardProductInfo, 
  PriceProd, 
  TitleProd} from './CardProduct.style'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { NavBarLink } from '../Navbar/NavBar.style';
import { ButtonForm } from '../Form/Form.style';

const CardProduct = ({product}) => {
  return (
    <NavBarLink to={`/product/${product?.id}`}>
      <CardProductContainer>
        <CardProductImg src={product?.ImgProducts[0]?.LinkImg} 
          alt={product?.name}/>
          
        <CardProductInfo>
          <TitleProd>{product?.name}</TitleProd>
          
          <PriceProd>{product?.price}</PriceProd>
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