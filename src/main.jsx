import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Components/Header/Home';
import Shop from './Components/Header/Shop';
import Order from './Components/Header/Order';
import Inventory from './Components/Header/Inventory';
import Login from './Components/Header/Login';
import cartProductLoader from './Components/Header/CartProductLoader';
import SignUp from './Components/Header/SignUp';
import AuthProvider from './Provider/AuthProvider';
import CheckOut from './Components/Header/CheckOut';
import PrivateRoute from './Components/PrivateRoute';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
      },
      {
        path: "/order",
        element: <Order></Order>,
        loader: cartProductLoader
      },
      {
        path: "/inventory",
        element: <Inventory></Inventory>,
      },
      {
        path: "/cheakout",
        element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
