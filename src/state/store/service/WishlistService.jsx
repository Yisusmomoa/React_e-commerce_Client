import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const wishList=createApi({
    reducerPath:'wishlist',
    baseQuery:fetchBaseQuery({baseUrl:'https://reacte-commerceserver-production.up.railway.app/api//wishList'}),
    tagTypes:["wishlist"],
    endpoints:(builder)=>({
        addProductToWishList:builder.mutation({
            query:(body)=>({
                url:'/',
                method:'POST',
                body,
                credentials:"include",
            }),
            invalidatesTags:["wishlist"]
        }),
        showProductsWishList:builder.query({
            query:()=>({
                url:'/',
                credentials:'include'
            }),
            providesTags:["wishlist"]
        }),
        removeProductWishList:builder.mutation({
            query:(id)=>({
                url:`/${id}`,
                method:'DELETE',
                credentials:"include",
            }),
            invalidatesTags:["wishlist"]
        })
    })
})

export const {
    useAddProductToWishListMutation,
    useShowProductsWishListQuery,
    useRemoveProductWishListMutation
}=wishList