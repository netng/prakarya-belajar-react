import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { 
  createBrowserRouter,
  RouterProvider 
} from 'react-router-dom';
import LoginPage from './pages/Login.jsx';
import RegisterPage from './pages/Register.jsx';
import ErrorPage from './pages/404.jsx';
import ProductPage from './pages/Products.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world</div>,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/products",
    element: <ProductPage />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
