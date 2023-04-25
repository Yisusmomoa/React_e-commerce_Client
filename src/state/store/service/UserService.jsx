import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const users=createApi({
    reducerPath:'user',
    baseQuery:fetchBaseQuery({baseUrl:'/api/user'}),
    tagTypes:["me", "users"],
    endpoints:(builder)=>({
        getAllUsers:builder.query({
            query:()=>"",
            providesTags:["users"]
        }),
        createUser:builder.mutation({
            query:(body)=>({
                url:'/',
                method:"POST",
                body
            }),
            invalidatesTags:["users"]
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
            invalidatesTags:["me"],
        }),
        updateUserImg:builder.mutation({
            query:(formData)=>({
                url:`/${formData.get("id")}`,
                method:"PUT",
                body: formData
            }),
            invalidatesTags:["me"]
        }),
        desactivateUser:builder.mutation({
            query:(id)=>({
                url:`/${id}`,
                method:"DELETE"
            }),
            invalidatesTags:["me"]
        }),
        desactivateUserAdmin:builder.mutation({
            query:(id)=>({
                url:`/${id}`,
                method:"DELETE"
            }),
            invalidatesTags:["users"]
        }),
        getUserById:builder.query({
            query:(id)=>`${id}`
        }),
        updateUserAdmin:builder.mutation({
            query:({id, ...body})=>({
                url:`/admin/users/${id}`,
                method:"PUT",
                body
            }),
            invalidatesTags:["users"],
        })

    })

})

export const {
    useCreateUserMutation,
    useGetAllUsersQuery,
    useLoginMutation,
    useMeQuery,
    useLogoutMutation,
    useUpdateUserMutation,
    useUpdateUserImgMutation,
    useDesactivateUserMutation,
    useDesactivateUserAdminMutation,
    useGetUserByIdQuery,
    useUpdateUserAdminMutation,
    useLazyMeQuery,
    
}=users