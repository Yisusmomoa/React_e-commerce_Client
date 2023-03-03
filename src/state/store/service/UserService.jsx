import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const users=createApi({
    reducerPath:'user',
    baseQuery:fetchBaseQuery({baseUrl:'/api/user'}),
    tagTypes:["Users"],
    endpoints:(builder)=>({
        getAllUsers:builder.query({
            query:()=>"",
            providesTags:["Users"]
        }),
        createUser:builder.mutation({
            query:(body)=>({
                url:'/',
                method:"POST",
                body
            }),
        }),

    })

})

export const {
    useCreateUserMutation,
    useGetAllUsersQuery
}=users