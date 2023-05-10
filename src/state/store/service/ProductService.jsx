import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const products=createApi({
    reducerPath:'products',
    baseQuery:fetchBaseQuery({baseUrl:'https://reacte-commerceserver-production.up.railway.app/api/product'}),
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
                body,
                credentials:"include",
                headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
            }),
            invalidatesTags:["Products"]
        }),
        deleteProduct:builder.mutation({
            query:(id)=>({
                url:`/${id}`,
                method:'DELETE',
                credentials:"include",
                headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
            }),
            invalidatesTags:["Products"]
        }),
        updateProduct:builder.mutation({
            query:(formData)=>({
                url:`/${formData.get('id')}`,
                method:'PUT',
                body:formData,
                credentials:"include",
                headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
            }),
            // invalidatesTags:["Products", "Product"] //este jala si se mandan las imagenes y toda la información de golpe
            //para mostrar el cambio en el modal de update product
            invalidatesTags:["Products"]
        }),
        getPaginationProducts:builder.query({
            query:({size, page, categoryId, brandId, priceMin, priceMax})=>({
                url:`/filter?size=${size}&page=${page}&categoryId=${categoryId}&brandId=${brandId}&priceMin=${priceMin}&priceMax=${priceMax}`,
                method:'GET',
                credentials:"include",
                headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
            })
        }),
        getProductById:builder.query({
            query:(id)=>({
                url:`/${id}`,
                credentials:"include",
                headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
            }),
            providesTags:["Product"],
        }),
        deleteImgProduct:builder.mutation({
            query:(body)=>({
                url:'/deletImg',
                method:'POST',
                body,
                credentials:"include",
                headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
            }),
            invalidatesTags:["Product"]
        }),
        // update one image product
        updateImgProduct:builder.mutation({
            query:(formData)=>({
                url:`/updateImg`,
                method:'PUT',
                body:formData,
                credentials:"include",
                headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
            }),
            invalidatesTags:["Product"]
        }),
        addMoreImgsProduct:builder.mutation({
            query:(formData)=>({
                url:`/${formData.get('id')}`,
                method:'PUT',
                body:formData,
                credentials:"include",
                headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
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