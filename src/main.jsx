import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './pages/Homepage';
import AllProducts from './pages/AllProducts';
import Bedroom from './pages/Bedroom';
import LivingRoom from './pages/LivingRoom';
import Kitchen from './pages/Kitchen';
import DiningRoom from './pages/DiningRoom';
import ProductPage from './pages/ProductPage';
import Checkout from './pages/Checkout';
import Purchases from './pages/Purchases';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';
import './index.css';
import './screens.css';
import {CartContextProvider} from './context/CartContext';

const router = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/evergreen-interiors",
        element: <Homepage />
      }, {
        path: "/evergreen-interiors/all",
        element: <AllProducts />
      }, {
        path: "/evergreen-interiors/all/:id",
        element: <ProductPage />
      }, {
        path: "/evergreen-interiors/bedroom",
        element: <Bedroom />
      }, {
        path: "/evergreen-interiors/bedroom/:id",
        element: <ProductPage />
      }, {
        path: "evergreen-interiors/livingroom",
        element: <LivingRoom />
      }, {
        path: "/evergreen-interiors/livingroom/:id",
        element: <ProductPage />
      } ,{
        path: "evergreen-interiors/kitchen",
        element: <Kitchen />
      }, {
        path: "/evergreen-interiors/kitchen/:id",
        element: <ProductPage />
      }, {
        path: "evergreen-interiors/diningroom",
        element: <DiningRoom />
      }, {
        path: "/evergreen-interiors/diningroom/:id",
        element: <ProductPage />
      }, {
        path: "evergreen-interiors/checkout",
        element: <Checkout />
      }, {
        path: "evergreen-interiors/purchases",
        element: <Purchases />
      }, {
        path: "evergreen-interiors/about",
        element: <AboutPage />
      }
    ]
  }, 
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </StrictMode>,
)
