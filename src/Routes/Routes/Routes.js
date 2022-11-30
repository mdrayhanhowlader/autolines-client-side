import { createBrowserRouter } from "react-router-dom";
import Buyer from "../../DashboardPages/Buyer";
import MyBookings from "../../DashboardPages/BuyerPages/MyBookings";
import MyOrders from "../../DashboardPages/BuyerPages/MyOrders";
import MyWishlist from "../../DashboardPages/BuyerPages/MyWishlist";
import Payment from "../../DashboardPages/BuyerPages/Payment";
import Dashboard from "../../DashboardPages/Dashboard/Dashboard";
import ManageBookings from "../../DashboardPages/ManageBookings/ManageBookings";
import ManageProducts from "../../DashboardPages/ManageProducts/ManageProducts";
import Seller from "../../DashboardPages/Seller";
import AddProduct from "../../DashboardPages/SellerPages/AddProduct";
import MyProducts from "../../DashboardPages/SellerPages/MyProducts";
import DashboardLayout from "../../layout/DashboardLayout";
import Main from "../../layout/Main";
import Error from "../../Pages/Error/Error";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import ProductsCategory from "../../Pages/ProductsCategory/ProductsCategory";
import AllUsers from "./../../DashboardPages/AllUsers/AllUsers";
import PrivateRoute from "./PrivateRoute";

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
          fetch(`https://autolines-server.vercel.app/categories/${params.id}`),
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
      {
        path: "/dashboard/mywishlist",
        element: <MyWishlist></MyWishlist>,
      },
      {
        path: "/dashboard/mybookings",
        element: <MyBookings></MyBookings>,
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) => {
          return fetch(
            `https://autolines-server.vercel.app/bookings/${params.id}`
          );
        },
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default router;
