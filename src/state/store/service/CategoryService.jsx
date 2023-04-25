import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const categories=createApi({
    reducerPath:'categories',
    baseQuery:fetchBaseQuery({baseUrl:'https://reacte-commerceserver-production.up.railway.app/api/category'}),
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
        }),
        updateCategory:builder.mutation({
            query:({id, ...body})=>({
                url:`/${id}`,
                method:'PUT',
                body
            }),
            invalidatesTags:["Categories"]
        })
        
    })

})

// este es mi mayordomo, el repartidor del rappi
// como el useCotnext
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useGetAllCategoriesQuery,
    useCreateCategoryMutation,
    useDeleteCategoryMutation,
    useUpdateCategoryMutation
}=categories
