import { createBrowserRouter } from "react-router-dom";
import MainComponent from "../Components/MainComponent/MainComponent";
import Error from "../Components/Pages/Error/Error";
import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register/Register";
import SingleToys from "../Components/Pages/SingleToys/SingleToys";
import PrivateRoute from "../Components/Pages/PrivateRoute/PrivateRoute";
import Blog from "../Components/Pages/Blog/Blog";
import Toys from "../Components/Pages/Toys/Toys";
import AllToys from "../Components/Pages/AllToys/AllToys";
import AddToys from "../Components/Pages/AddToys/AddToys";




export const router = createBrowserRouter([

    {
        path: "/",
        element: <MainComponent />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/singleToys/:id",
                element: <PrivateRoute><SingleToys></SingleToys></PrivateRoute>,
                loader: ({params}) => fetch(``)
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/toys/:id",
                element: <Toys></Toys>,
            },
            {
                path: "/allToys",
                element: <AllToys></AllToys>,
                loader: () => fetch("http://localhost:5000/userCollection")
            },
            {
                path: "/addToys",
                element: <AddToys></AddToys>
            }
        ]
    }
]);