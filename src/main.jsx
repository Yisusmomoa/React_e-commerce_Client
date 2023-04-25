import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { store } from './state/store/store'
import { Provider } from 'react-redux'
import { CartProvider } from './state/context/CartContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Provider store={store}>
        <CartProvider>
          <RouterProvider router={router}/>
        </CartProvider>
    </Provider>
  </React.StrictMode>,
)
