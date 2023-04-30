import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const sales=createApi({
    reducerPath:'sales',
    baseQuery:fetchBaseQuery({baseUrl:'https://reacte-commerceserver-production.up.railway.app/api/sale'}),
    tagTypes:["Sales"],
    endpoints:(builder)=>({
        getAllSales:builder.query({
            query:()=>'',
            providesTags:["Sales"]
        }),
        getOneSale:builder.query({
            query:(id)=>({
                url:`/${id}`
            })
        }),
        createSale:builder.mutation({
            query:(body)=>({
                url:'/',
                method:'POST',
                body
            }),
            invalidatesTags:["Sales"]
        }),
        deleteSale:builder.mutation({
            query:(id)=>({
                url:`/${id}`,
                method:'DELETE'
            }),
            invalidatesTags:["Sales"]
        }),
        updateSale:builder.mutation({
            query:({id, ...body})=>({
                url:`/${id}`,
                method:'PUT',
                body
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