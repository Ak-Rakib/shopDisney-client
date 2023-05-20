import { createBrowserRouter } from "react-router-dom";
import MainComponent from "../Components/MainComponent/MainComponent";
import Error from "../Components/Pages/Error/Error";
import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register/Register";
import SingleToys from "../Components/Pages/SingleToys/SingleToys";
import PrivateRoute from "../Components/Pages/PrivateRoute/PrivateRoute";




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
                element: <PrivateRoute><SingleToys></SingleToys></PrivateRoute>
            }
        ]
    }
]);