import React, { createContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2'

/*
createContext se utiliza para crear un contexto, que es una especie de "almacén" de datos 
que se puede compartir entre componentes. 
El contexto contiene un valor predeterminado, que se utiliza 
si no se proporciona un valor específico a través de Provider.
*/
const CartContext=createContext()
/*
createContext devuelve un objeto que contiene dos propiedades: Provider y Consumer. 
Provider es un componente que se utiliza para proporcionar un valor específico al contexto. 
Consumer es un componente que se utiliza para consumir ese valor.
*/

/*
En resumen, createContext se utiliza para crear un contexto y Provider para proporcionar 
un valor específico al contexto y useContext se utiliza para consumir ese valor en un componente funcional.
*/

const CartProvider = ({children}) => {
  const [cart, setCart]=useState([]);
 
  const [total, setTotal]=useState({})

  const addProduct=(product, amount=1)=>{
    const isProductExists=cart.find(element=>element.id===product.id)

    const productToAdd={...product}
    if (isProductExists!==undefined) {
      updateAmountProductExists(productToAdd.id, amount)
      const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 500,
      })
      
      Toast.fire({
          icon: 'success',
          title: 'Product added to your cart'
      })
    }
    else{
      productToAdd.amount=amount
        setCart([...cart, productToAdd])
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 500,
        })
        
        Toast.fire({
            icon: 'success',
            title: 'Product added to your cart'
        })
    }
  }

  const removeProduct=(id)=>{
      Swal.fire({
          title: 'Do you want to remove this product?',
          showDenyButton: true,
          confirmButtonText: 'Yes',
          denyButtonText: `No`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
              setCart([...cart].filter(element=>element.id!==id))
          } 
        })
  }

  const updateAmountProductExists=(id, amount)=>{
    const tempCart=[...cart]
    const product=tempCart.find(element=>element.id===id)
    product["amount"]+=amount;
    setCart(tempCart)
  }
  
  const getLengthShopCart=()=>{
    return cart.length
  }

  const updateAmount=(id, amount)=>{
    // que se actualice la cantidad del proudcto si ya esta en el carrito
    //update amount only if the product exists in the cart

    const tempCart=[...cart]
    const product=tempCart.find(element=>element.id===id)
    product["amount"]=amount;
    setCart(tempCart)
  }
  
  const getTotal=()=>{
    // aquí estaba el error xd
    const subTotal=cart.reduce((acc, element)=>acc+(element.price*element.amount), 0)
    setTotal({
        subTotal,
        Total:subTotal+subTotal*0.16
    })
  }
  useEffect(() => {
    if(cart.length>0){
      localStorage.setItem("cart", JSON.stringify(cart))
    }
    getTotal()
  }, [cart]);

  useEffect(() => {
    if(localStorage.getItem('cart')){
      setCart(JSON.parse(localStorage.getItem('cart')))
    }
  }, []);

  const data={
    cart,
    total,
    addProduct,
    removeProduct,
    getLengthShopCart,
    updateAmount,
    getTotal
  }
  return (
    <CartContext.Provider value={data}>
      {children}
    </CartContext.Provider>
  )
}

export {CartProvider}

export default CartContext

/*
useContext se utiliza para consumir un valor de un contexto en un componente funcional. 
useContext es una forma más sencilla de utilizar Consumer que no requiere pasar una función como hijo. 
useContext toma como argumento el objeto de contexto que se creó con createContext y devuelve el valor actual del contexto.
*/