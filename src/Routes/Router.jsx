import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Checkout from "../Components/Checkout";
import MyBooking from "../Pages/MyBooking";
import PrivateRoute from "../Components/PrivateRoute";



const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/checkout/:id',
                element:<Checkout></Checkout>,
                loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'/mybookings',
                element:<PrivateRoute><MyBooking></MyBooking></PrivateRoute>
            }
        ]
    }
])


export default router;