import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const brands=createApi({
    reducerPath:'brands',
    baseQuery:fetchBaseQuery({baseUrl:'https://reacte-commerceserver-production.up.railway.app/api/manufacturer'}),
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
                body,
                credentials:"include",
                mode:'cors'
            }),
            invalidatesTags:["Brands"]
        }),
        deleteBrand:builder.mutation({
            query:(id)=>({
                url:`/${id}`,
                method:"DELETE",
                credentials:"include",
            }),
            invalidatesTags:["Brands"]
        }),
        updateBrand:builder.mutation({
            query:(formData)=>({
                url:`/${formData.get("id")}`,
                method:"PUT",
                body:formData,
                credentials:"include",
                // body:{
                //     name:formData.get("name"),
                //     imgBrand:formData.get("imgBrand")
                // }
            }),
            invalidatesTags:["Brands"]
        })
    })
})


export const {
    useGetAllBrandsQuery,
    useCreateBrandMutation,
    useDeleteBrandMutation,
    useUpdateBrandMutation
    
}=brands