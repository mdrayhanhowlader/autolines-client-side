import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import Header from "../Shared/Header/Header";
import useAdmin from "./../hooks/useAdmin";
import useSeller from "./../hooks/useSeller";
import useBuyer from "./../hooks/useBuyer";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  const [isBuyer] = useBuyer(user?.email);

  return (
    <div>
      <Header></Header>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
          {/* <label
            htmlFor="dashboard-drawer"
            className="btn btn-primary drawer-button"
          >
            Open drawer
          </label> */}
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content">
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/manageallproducts">Manage Products</Link>
                </li>
                <li>
                  <Link to="/dashboard/managebookings">Manage Bookings</Link>
                </li>
                <li>
                  <Link to="/dashboard/admin">Manage Admin</Link>
                </li>
                <li>
                  <Link to="/dashboard/seller">Seller</Link>
                </li>
                <li>
                  <Link to="/dashboard/buyer">Buyer</Link>
                </li>
              </>
            )}

            {isSeller && (
              <>
                <li>
                  <Link to="/dashboard/addproduct">Add Product</Link>
                </li>
                <li>
                  <Link to="/dashboard/myproducts">My Products</Link>
                </li>
              </>
            )}
            {isBuyer && (
              <>
                <li>
                  <Link to="/dashboard/myorders">MyOrders</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
