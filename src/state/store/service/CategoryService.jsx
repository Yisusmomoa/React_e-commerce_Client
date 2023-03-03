import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const categories=createApi({
    reducerPath:'categories',
    baseQuery:fetchBaseQuery({baseUrl:'api/category'}),
    tagTypes:["Categories"],
    endpoints:(builder)=>({
        getAllCategories:builder.query({
            query:()=>"",
            providesTags:["Categories"]
        }),
        
    })

})

export const {
    useGetAllCategoriesQuery
}=categories
