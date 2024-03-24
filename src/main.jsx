import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layout/Root';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Home from './Pages/Home/Home';
import DonationDetails from './Pages/DonationDetails/DonationDetails';
import Donation from './Pages/Donation/Donation';
import Statistics from './components/Statistics/Statistics';

import { ToastContainer } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:'/',
        element: <Home></Home>,

      },
      {
        path:'/donation',
        element: <Donation></Donation>

      },
      {
        path:'/donation-details/:id',
        element: <DonationDetails></DonationDetails>

      },
      {
        path:'/statistic',
        element: <Statistics></Statistics>

      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
        <ToastContainer />
  </React.StrictMode>,
)
