import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { RouterProvider } from 'react-router'
import { router } from './Route/Route.jsx'
import AuthProvider from './Context/AuthProvider.jsx';
import { HelmetProvider } from "react-helmet-async";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
  <HelmetProvider>

    <RouterProvider router={router} />
  </HelmetProvider>

    </AuthProvider>
  </StrictMode>,
)
