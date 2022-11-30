import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import useAdmin from "./../../hooks/useAdmin";
import useBuyer from "./../../hooks/useBuyer";
import useSeller from "./../../hooks/useSeller";
import useTitle from "./../../hooks/useTitle";

const Dashboard = () => {
  useTitle("My Bookings");
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isBuyer] = useBuyer(user?.email);
  const [isSeller] = useSeller(user?.email);

  ///// admin area

  const { data: products = [], refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("https://autolines-server.vercel.app/products", {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  // admin area end

  // buyer area
  const { data: buyerbookings = [] } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await fetch(
        `https://autolines-server.vercel.app/allbookings?email=${user.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });

  // buyer area end

  // seller area start

  const { data: sproducts = [] } = useQuery({
    queryKey: ["sellerproducts"],
    queryFn: async () => {
      const res = await fetch(
        `https://autolines-server.vercel.app/sellerproducts?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  // seller area end
  return (
    <div>
      <div>
        {isAdmin && (
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-figure text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Total Products</div>
              <div className="stat-value text-primary">{products?.length}</div>
              <div className="stat-desc">
                {(products?.length * 2) / 100}% more than last month
              </div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <div className="avatar online">
                  <div className="w-16 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </div>
              </div>
              <div className="stat-value"></div>
              <div className="stat-title">Name: {user?.displayName}</div>
              <div className="stat-desc text-secondary"></div>
            </div>
          </div>
        )}
      </div>

      <div>
        {isBuyer && (
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-figure text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Total Bookings</div>
              <div className="stat-value text-primary">
                {buyerbookings?.length}
              </div>
              <div className="stat-desc">
                {(buyerbookings?.length * 2) / 100}% more than last month
              </div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <div className="avatar online">
                  <div className="w-16 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </div>
              </div>
              <div className="stat-value"></div>
              <div className="stat-title">Name: {user?.displayName}</div>
              <div className="stat-desc text-secondary"></div>
            </div>
          </div>
        )}
      </div>

      <div>
        {isSeller && (
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-figure text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">My Total Products</div>
              <div className="stat-value text-primary">{sproducts?.length}</div>
              <div className="stat-desc">
                {(sproducts?.length * 2) / 100}% more than last month
              </div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <div className="avatar online">
                  <div className="w-16 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </div>
              </div>
              <div className="stat-value"></div>
              <div className="stat-title">Name: {user?.displayName}</div>
              <div className="stat-desc text-secondary"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
