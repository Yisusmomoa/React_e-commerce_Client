import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const products=createApi({
    reducerPath:'products',
    baseQuery:fetchBaseQuery({baseUrl:'/api/product'}),
    tagTypes:["Products", "Product"],
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
            // invalidatesTags:["Products", "Product"] //este jala si se mandan las imagenes y toda la información de golpe
            //para mostrar el cambio en el modal de update product
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
                url:`/${id}`,
            }),
            providesTags:["Product"],
        }),
        deleteImgProduct:builder.mutation({
            query:(body)=>({
                url:'/deletImg',
                method:'POST',
                body
            }),
            invalidatesTags:["Product"]
        }),
        // update one image product
        updateImgProduct:builder.mutation({
            query:(formData)=>({
                url:`/updateImg`,
                method:'PUT',
                body:formData
            }),
            invalidatesTags:["Product"]
        }),
        addMoreImgsProduct:builder.mutation({
            query:(formData)=>({
                url:`/${formData.get('id')}`,
                method:'PUT',
                body:formData
            }),
            invalidatesTags:["Product", "Products"]
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
    useDeleteImgProductMutation,
    useUpdateImgProductMutation,
    useAddMoreImgsProductMutation
}=products