import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import IsAdmin from "./components/IsAdmin.jsx/IsAdmin";
import Admin from "./routes/Admin";
import Home from "./routes/Home";
import SignUp from "./routes/SignUp";
import SignIn from "./routes/SignIn";
import Products from "./routes/Products";
import ShopCart from "./routes/ShopCart";
import Product from "./routes/Product";
import Profile from './routes/Profile'
import WishList from "./routes/WishList";
import MyOrders from "./routes/MyOrders";
import ProfileDetails from "./routes/ProfileDetails";

const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:"/home",
                element:<Home/>
            },
            {
                path:"/signUp",
                element:<SignUp/>
            },
            {
                path:"/signIn",
                element:<SignIn/>
            },
            {
                path:"/products",
                element:<Products/>
            },
            {
                path:"product/:id",
                element:<Product/>
            },
            {
                path:"/shopCart",
                element:<ShopCart/>
            },
            {
                path:"/profile",
                element:<Profile/>,
                children:[
                    {
                        index:true,
                        element:<ProfileDetails/>
                    },
                    {
                        path:"/profile/wishlist",
                        element:<WishList/>
                    },
                    {
                        path:"/profile/myorders",
                        element:<MyOrders/>
                    }
                ]
            },
            {
                path:"/admin",
                element:<IsAdmin/>,
                children:[
                    {
                        index:true,
                        element:<Admin/>
                    },
                    {
                        path: "createproduct",
                        element: <h1>Create product</h1>,
                    },
                    {
                        path: "deleteproduct",
                        element: <h1>deleteProduct</h1>,
                    },
                ]
            }
        ]
    }
])

export default router