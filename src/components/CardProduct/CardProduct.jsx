import React, { useContext } from 'react'
import { CardProductContainer,
  CardProductImg,
  CardProductInfo, 
  PriceProd, 
  TitleProd} from './CardProduct.style'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { NavBarLink } from '../Navbar/NavBar.style';
import { ButtonForm } from '../Form/Form.style';
import CartContext from '../../state/context/CartContext';

const CardProduct = ({product}) => {
  const {addProduct}=useContext(CartContext)

  return (
      
        <CardProductContainer>
          <NavBarLink to={`/product/${product?.id}`}>
            <CardProductImg src={product?.ImgProducts[0]?.LinkImg} 
              alt={product?.name}/>
            </NavBarLink>
          <CardProductInfo>
            <TitleProd>{product?.name}</TitleProd>
            <PriceProd>{product?.price}</PriceProd>
            <ButtonForm onClick={()=>addProduct(product)}>
              <ShoppingCartOutlinedIcon/>
              Add to cart
            </ButtonForm>
          </CardProductInfo>
        </CardProductContainer>
     
  )
}

export default CardProduct