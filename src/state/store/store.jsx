import {
    configureStore, getDefaultMiddleware
} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/dist/query';
import { categories } from './service/CategoryService';
import { users } from './service/UserService';
import { brands } from './service/BrandService';
import { products } from './service/ProductService';

export const store=configureStore({
    reducer:{
        [categories.reducerPath]:categories.reducer,
        [users.reducerPath]:users.reducer,
        [brands.reducerPath]:brands.reducer,
        [products.reducerPath]:products.reducer,


    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware()
        .concat(categories.middleware)
        .concat(users.middleware)
        .concat(brands.middleware)
        .concat(products.middleware)
})


setupListeners(store.dispatch)