import { createBrowserRouter } from "react-router";
import MainLayout from "../Layoute/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import CreateEvent from "../Dashbord/CreateEvent";
import PrivateRoute from "../components/PrivateRoute";
import TestimonialSlider from "../components/Testimonial";
import ErrorElement from "../components/ErrorElement";
import EventDetails from "../Event/EventDetails";
import Loader from "../components/Loader";
import MyBooking from "../Dashbord/MyBooking";
import Events from "../Event/Event";
import ManageEvent from "../Dashbord/ManageEvent";
import UpdateEvent from "../Dashbord/UpdateEvent";
import About from "../Pages/About";
import BookEvent from "../Event/BookEvent";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        index: true,
        Component: Home,
      },

      {
        path: "createEvent",
        element: (
          <PrivateRoute>
            <CreateEvent></CreateEvent>
          </PrivateRoute>
        ),
      },
      {
        path: "manageEvent",
        element: (
          <PrivateRoute>
            <ManageEvent></ManageEvent>
          </PrivateRoute>
        ),
      },
      {
        path: "updateEvent/:id",
        loader: ({ params }) =>
          fetch(`https://athletics-server.vercel.app/athletics/${params.id}`),
        hydrateFallbackElement: <Loader></Loader>,
        element: (
          <PrivateRoute>
            <UpdateEvent></UpdateEvent>
          </PrivateRoute>
        ),
      },
      {
        path: "bookEvent",
        element: (
          <PrivateRoute>
            <BookEvent></BookEvent>
          </PrivateRoute>
        ),
      },
      {
        path: "athletics/:id",
        element: (
          <PrivateRoute>
            <EventDetails></EventDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://athletics-server.vercel.app/athletics/${params.id}`),
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "event",
        element: <Events></Events>,
      },
      {
        path: "myBooking",
        element: (
          <PrivateRoute>
            <MyBooking></MyBooking>
          </PrivateRoute>
        ),
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);
