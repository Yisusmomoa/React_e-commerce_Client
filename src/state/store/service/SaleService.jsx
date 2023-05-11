import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const sales=createApi({
    reducerPath:'sales',
    baseQuery:fetchBaseQuery({baseUrl:'https://reacte-commerceserver-production.up.railway.app/api/sale'}),
    tagTypes:["Sales"],
    endpoints:(builder)=>({
        getAllSales:builder.query({
            query:()=>({
                url:'/',
                credentials:"include",
             }),
            providesTags:["Sales"]
        }),
        getOneSale:builder.query({
            query:(id)=>({
                url:`/${id}`,
                credentials:"include",
            })
        }),
        createSale:builder.mutation({
            query:(body)=>({
                url:'/',
                method:'POST',
                body,
                credentials:"include",
                headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
                
            }),
            invalidatesTags:["Sales"]
        }),
        deleteSale:builder.mutation({
            query:(id)=>({
                url:`/${id}`,
                method:'DELETE',
                credentials:"include",
                headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
            }),
            invalidatesTags:["Sales"]
        }),
        updateSale:builder.mutation({
            query:({id, ...body})=>({
                url:`/${id}`,
                method:'PUT',
                body,
                credentials:"include",
                headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
            }),
            invalidatesTags:["Sales"]
        })
    })
})


export const {
    useGetAllSalesQuery,
    useGetOneSaleQuery,
    useCreateSaleMutation,
    useDeleteSaleMutation,
    useUpdateSaleMutation
}=sales