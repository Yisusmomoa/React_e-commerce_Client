import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const products=createApi({
    reducerPath:'products',
    baseQuery:fetchBaseQuery({baseUrl:'/api/product'}),
    tagTypes:["Products"],
    endpoints:(builder)=>({
        getAllProducts:builder.query({
            query:()=>'',
            providesTags:["Products"]
        }),
        createProduct:builder.mutation({
            query:(body)=>({
                url:'/',
                method:'POST',
                body
            }),
            invalidatesTags:["Products"]
        }),
        deleteProduct:builder.mutation({
            query:(id)=>({
                url:`/${id}`,
                method:'DELETE'
            }),
            invalidatesTags:["Products"]
        }),
        updateProduct:builder.mutation({
            query:(formData)=>({
                url:`/${formData.get('id')}`,
                method:'PUT',
                body:formData
            }),
            invalidatesTags:["Products"]
        }),
        getPaginationProducts:builder.query({
            query:({size, page})=>({
                url:`/pagination/?size=${size}&page=${page}`,
                method:'GET',
            })
        }),
        getProductById:builder.query({
            query:(id)=>({
                url:`/${id}`
            })
        }),
        deleteImgProduct:builder.mutation({
            query:(body)=>({
                url:'/deletImg',
                method:'POST',
                body
            })
        })
    })
})

export const {
    useGetAllProductsQuery,
    useCreateProductMutation,
    useDeleteProductMutation,
    useUpdateProductMutation,
    useGetPaginationProductsQuery,
    useGetProductByIdQuery,
    useDeleteImgProductMutation
}=products