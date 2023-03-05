import {
    configureStore, getDefaultMiddleware
} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/dist/query';
import { categories } from './service/CategoryService';
import { users } from './service/UserService';
import { brands } from './service/BrandService';

export const store=configureStore({
    reducer:{
        [categories.reducerPath]:categories.reducer,
        [users.reducerPath]:users.reducer,
        [brands.reducerPath]:brands.reducer,

    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware()
        .concat(categories.middleware)
        .concat(users.middleware)
        .concat(brands.middleware)
})


setupListeners(store.dispatch)