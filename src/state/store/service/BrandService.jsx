import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const brands=createApi({
    reducerPath:'brands',
    baseQuery:fetchBaseQuery({baseUrl:'/api/manufacturer'}),
    tagTypes:["Brands"],
    endpoints:(builder)=>({
        getAllBrands:builder.query({
            query:()=>"",
            providesTags:["Brands"]
        }),
        createBrand:builder.mutation({
            query:(body)=>({
                url:'/',
                method:'POST',
                body
            }),
            invalidatesTags:["Brands"]
        }),
        deleteBrand:builder.mutation({
            query:(id)=>({
                url:`/${id}`,
                method:"DELETE"
            }),
            invalidatesTags:["Brands"]
        })
    })
})


export const {
    useGetAllBrandsQuery,
    useCreateBrandMutation,
    useDeleteBrandMutation,
    
}=brands