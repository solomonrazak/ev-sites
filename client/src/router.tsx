import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "./layout";
import Dashboard from "./pages/dashboard";
import Customers from "./pages/customers";
import ChargingPoints from "./pages/chargingPoints";
import Wallet from "./pages/wallet";
import ChargingSite from "./pages/chargingSite";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />, // to render dashboard as default first page
      },
      {
        
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/customers",
        element: <Customers />,
      },
      {
        path: "/charging-points",
        element: <ChargingPoints />,
        children: [
          {
            path: "charging-site",
            element: <ChargingSite />
          },
        ]
      },
      {
        path: "/wallet",
        element: <Wallet />,
      },
    ],
  },
]);

export default router;
