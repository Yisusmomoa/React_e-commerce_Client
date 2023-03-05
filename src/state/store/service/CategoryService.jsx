import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const categories=createApi({
    reducerPath:'categories',
    baseQuery:fetchBaseQuery({baseUrl:'/api/category'}),
    tagTypes:["Categories"],
    endpoints:(builder)=>({
        getAllCategories:builder.query({
            query:()=>"",
            providesTags:["Categories"]
        }),
        createCategory:builder.mutation({
            query:(body)=>({
                url:'/',
                method:'POST',
                body
            }),
            invalidatesTags:["Categories"]
        }),
        deleteCategory:builder.mutation({
            query:(id)=>({
                url:`/${id}`,
                method:"DELETE"
            }),
            invalidatesTags:["Categories"]
        })
        
    })

})

export const {
    useGetAllCategoriesQuery,
    useCreateCategoryMutation,
    useDeleteCategoryMutation
}=categories
