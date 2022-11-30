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
import AdminRoute from "./AdminRoute";
import SellerRoute from "./SellerRoute";
import BuyerRoute from "./BuyerRoute";

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
        element: (
          <AdminRoute>
            <ManageProducts></ManageProducts>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/managebookings",
        element: (
          <AdminRoute>
            <ManageBookings></ManageBookings>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/admin",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/seller",
        element: (
          <AdminRoute>
            <Seller></Seller>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/buyer",
        element: (
          <AdminRoute>
            <Buyer></Buyer>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addproduct",
        element: (
          <SellerRoute>
            <AddProduct></AddProduct>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/myproducts",
        element: (
          <SellerRoute>
            <MyProducts></MyProducts>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/myorders",
        element: (
          <BuyerRoute>
            <MyOrders></MyOrders>
          </BuyerRoute>
        ),
      },

      {
        path: "/dashboard/mywishlist",
        element: (
          <BuyerRoute>
            <MyWishlist></MyWishlist>
          </BuyerRoute>
        ),
      },
      {
        path: "/dashboard/mybookings",
        element: (
          <BuyerRoute>
            <MyBookings></MyBookings>
          </BuyerRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: (
          <BuyerRoute>
            <Payment></Payment>
          </BuyerRoute>
        ),
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
