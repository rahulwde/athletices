 import {
  createBrowserRouter,
 
} from "react-router";
import MainLayout from "../Layoute/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Auth/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        index:true, Component:Home
      },
      {
        path:"/login",
        element:<Login></Login>
      }
    ]
  },
]);