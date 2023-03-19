import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const buys=createApi({
    reducerPath:'buys',
    baseQuery:fetchBaseQuery({baseUrl:'/api/buy'}),
    endpoints:(builder)=>({
        makeBuy:builder.mutation({
            query:(body)=>({
                url:'/',
                method:'POST',
                body
            })
        }),
        getAllBuysFromUser:builder.query({
            query:()=>"",
        }),
        
    })
})

export const {
    useMakeBuyMutation,
    useGetAllBuysFromUserQuery,
    useLazyGetAllBuysFromUserQuery
}=buys