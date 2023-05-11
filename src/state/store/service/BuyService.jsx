import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const buys=createApi({
    reducerPath:'buys',
    baseQuery:fetchBaseQuery({baseUrl:'https://reacte-commerceserver-production.up.railway.app/api/buy'}),
    endpoints:(builder)=>({
        makeBuy:builder.mutation({
            query:(body)=>({
                url:'/',
                method:'POST',
                body,
                credentials:"include",
                headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
            })
        }),
        getAllBuysFromUser:builder.query({
            query:()=>({
                url:'/',
                credentials:"include",
            })
        }),
        getBuyByIdFromUser:builder.query({
            query:(id)=>({
                url:`/${id}`,
                credentials:"include",
            }),
        })
    })
})

export const {
    useMakeBuyMutation,
    useGetAllBuysFromUserQuery,
    useLazyGetAllBuysFromUserQuery,
    useGetBuyByIdFromUserQuery,
    useLazyGetBuyByIdFromUserQuery
}=buys