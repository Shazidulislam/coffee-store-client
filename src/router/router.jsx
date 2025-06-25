import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Component/Home";
import AddCoffee from "../Component/AddCoffee";
import UpdateCoffee from "../Component/UpdateCoffee";
import View from "../Component/View";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import User from "../Component/User";

const router = createBrowserRouter([
    {
        path:"/",
        Component:Root,
        children:[
            {
                index:true,
                hydrateFallbackElement:<span>Loading....</span>,
                loader:()=>fetch("http://localhost:4000/coffees"),
                Component:Home,
            },
            {
                path:"/addcoffee",
                Component:AddCoffee,
            },
            {
                path:"/updatecoffee/:id",
                  hydrateFallbackElement:<span>Loading....</span>,
                loader:({params})=>fetch(`http://localhost:4000/coffees/${params.id}`),
                Component:UpdateCoffee,
            },
            {
                path:"/view/:id",
                hydrateFallbackElement:<span>Loading....</span>,
                loader:({params})=>fetch(`http://localhost:4000/coffees/${params.id}`),
                Component:View,
            },
            {
                path:"/signup",
                Component:SignUp,
            },
            {
                path:"/signin",
                Component:SignIn
            },
            {
                path:"/users",
                hydrateFallbackElement:<span>Loading...</span>,
                loader:()=>fetch("http://localhost:4000/users"),
                Component:User,
            }
        ]
    }
])

export default router