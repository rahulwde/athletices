 import {
  createBrowserRouter,
 
} from "react-router";
import MainLayout from "../Layoute/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import CreateEvent from "../Dashbord/CreateEvent";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        index:true, Component:Home
      },
      {
        path:"createEvent",
       element:<CreateEvent></CreateEvent>
      },
      {
        path:"login",
        element:<Login></Login>
      },
      {
        path:"register",
        element:<Register></Register>
      }
    ]
  },
]);