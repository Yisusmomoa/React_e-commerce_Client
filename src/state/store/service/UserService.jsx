import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const users=createApi({
    reducerPath:'user',
    baseQuery:fetchBaseQuery({baseUrl:'/api/user'}),
    tagTypes:["me"],
    endpoints:(builder)=>({
        getAllUsers:builder.query({
            query:()=>""
        }),
        createUser:builder.mutation({
            query:(body)=>({
                url:'/',
                method:"POST",
                body
            }),
        }),
        login:builder.mutation({
            query:(body)=>({
                url:'/login',
                method:"POST",
                body
            }),
        }),
        me:builder.query({
            query:()=>'/me',
            providesTags:["me"]
        }),
        logout:builder.mutation({
            query:()=>({
                url:'/logout',
                method:"POST"
            }),
            invalidatesTags:["me"]
        }),
        updateUser:builder.mutation({
            query:({id, ...body})=>({
                url:`/${id}`,
                method:"PUT",
                body
            }),
            invalidatesTags:["me"]
        }),

    })

})

export const {
    useCreateUserMutation,
    useGetAllUsersQuery,
    useLoginMutation,
    useMeQuery,
    useLogoutMutation,
    useUpdateUserMutation
}=users