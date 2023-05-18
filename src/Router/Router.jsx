import { createBrowserRouter } from "react-router-dom";
import MainComponent from "../Components/MainComponent/MainComponent";
import Error from "../Components/Pages/Error/Error";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainComponent />,
        errorElement: <Error></Error>
    }
]);