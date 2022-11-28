import { createBrowserRouter } from "react-router-dom";
import Buyer from "../../DashboardPages/Buyer";
import MyOrders from "../../DashboardPages/BuyerPages/MyOrders";
import Dashboard from "../../DashboardPages/Dashboard/Dashboard";
import ManageBookings from "../../DashboardPages/ManageBookings/ManageBookings";
import Seller from "../../DashboardPages/Seller";
import AddProduct from "../../DashboardPages/SellerPages/AddProduct";
import DashboardLayout from "../../layout/DashboardLayout";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import ProductsCategory from "../../Pages/ProductsCategory/ProductsCategory";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "./../../DashboardPages/AllUsers/AllUsers";
import ManageProducts from "../../DashboardPages/ManageProducts/ManageProducts";
import MyProducts from "../../DashboardPages/SellerPages/MyProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/categories/:id",
        element: <ProductsCategory></ProductsCategory>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/manageallproducts",
        element: <ManageProducts></ManageProducts>,
      },
      {
        path: "/dashboard/managebookings",
        element: <ManageBookings></ManageBookings>,
      },
      {
        path: "/dashboard/admin",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "/dashboard/seller",
        element: <Seller></Seller>,
      },
      {
        path: "/dashboard/buyer",
        element: <Buyer></Buyer>,
      },
      {
        path: "/dashboard/addproduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/dashboard/myorders",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/myproducts",
        element: <MyProducts></MyProducts>,
      },
    ],
  },
]);

export default router;
