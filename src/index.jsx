import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Bedroom from './pages/Bedroom';
import ProductPage from './pages/ProductPage';
import './index.css';
import './screens.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  }, {
    path: "bedroom",
    element: <Bedroom />
  }, {
    path: "bedroom/:id",
    element: <ProductPage />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
