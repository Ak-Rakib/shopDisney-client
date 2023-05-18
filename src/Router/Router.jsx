import { createBrowserRouter } from "react-router-dom";
import MainComponent from "../Components/MainComponent/MainComponent";
import Error from "../Components/Pages/Error/Error";
import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Pages/Login/Login";


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
            }
        ]
    }
]);