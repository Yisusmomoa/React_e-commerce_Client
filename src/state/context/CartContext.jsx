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

  const addProduct=(product, amount)=>{
    const isProductExists=cart.find(element=>element.id===product.id)
    if (isProductExists!==undefined) {
        updateAmountProductExists(product.id, amount)
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
        product.amount=amount
        setCart([...cart, product])
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

  const data={
    cart,
    total,
    addProduct,
    removeProduct
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