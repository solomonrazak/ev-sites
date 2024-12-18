import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import Dashboard from "./pages/dashboard";
import Customers from "./pages/customers";
import ChargingPoints from "./pages/chargingPoints";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
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
      },
    ],
  },
]);

export default router;
