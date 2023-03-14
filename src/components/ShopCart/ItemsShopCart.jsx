import React from 'react'
import { HeaderItemsInCart, ItemsInCart, ItemsShopCartContainer } from './ItemsShopCart.style'
import InfoProductCart from './InfoProductCart/InfoProductCart'

const ItemsShopCart = ({cart, removeProduct, updateAmount}) => {

  return (
    <ItemsShopCartContainer >
      <h2>Shopping cart</h2>
      <hr/>
      <HeaderItemsInCart>
          <h3>Product</h3>
          <h3>Quantity</h3>
          <h3>SubTotal</h3>
      </HeaderItemsInCart>
      <ItemsInCart>
        {
          cart.map((prod)=>(
            <InfoProductCart key={prod.id} 
              product={prod} 
              removeProduct={removeProduct} 
              updateAmount={updateAmount} />
          ))
        }
      </ItemsInCart>
    </ItemsShopCartContainer>
  )
}

export default ItemsShopCart