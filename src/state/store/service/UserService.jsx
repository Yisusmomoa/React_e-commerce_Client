import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const users=createApi({
    reducerPath:'user',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:8080/api/user'}),
    tagTypes:["me", "users"],
    endpoints:(builder)=>({
        getAllUsers:builder.query({
            query:()=>({
                url:'/',
                credentials:"include",
                headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
            }),
            providesTags:["users"],
            
        }),
        createUser:builder.mutation({
            query:(body)=>({
                url:'/',
                method:"POST",
                body
            }),
            invalidatesTags:["users"]
        }),
        //https://es.stackoverflow.com/questions/560449/express-js-no-recibo-la-cookie-en-el-navegador
        login:builder.mutation({
            query:(body)=>({
                url:'/login',
                method:"POST",
                body,
                credentials:"include",
                headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
                
            }),
        }),
        me:builder.query({
            query:()=>({
                url:'/me',
                method:'GET',
                credentials:"include",
                headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
                
            }),
            providesTags:["me"],
        }),
        logout:builder.mutation({
            query:()=>({
                url:'/logout',
                method:"POST",
                credentials:"include",
                headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
            }),
            invalidatesTags:["me"],
        }),
        updateUser:builder.mutation({
            query:({id, ...body})=>({
                url:`/${id}`,
                method:"PUT",
                body,
                credentials:"include",
                headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
            }),
            invalidatesTags:["me"],
        }),
        updateUserImg:builder.mutation({
            query:(formData)=>({
                url:`/${formData.get("id")}`,
                method:"PUT",
                body: formData,
                credentials:"include",
            }),
            invalidatesTags:["me"]
        }),
        desactivateUser:builder.mutation({
            query:(id)=>({
                url:`/${id}`,
                method:"DELETE",
                credentials:"include",
                headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
            }),
            invalidatesTags:["me"]
        }),
        desactivateUserAdmin:builder.mutation({
            query:(id)=>({
                url:`/${id}`,
                method:"DELETE",
                credentials:"include",
                headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
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
                body,
                credentials:"include",
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