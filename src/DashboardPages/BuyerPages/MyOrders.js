import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../contexts/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const { data: payments = [] } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await fetch(
        `https://autolines-server.vercel.app/payments?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <h2 className="text-3xl text-cyan-300 font-semibold">
        Orders: {payments.length}
      </h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Booking Id</th>
                <th>Price</th>
                <th>Transaction Id</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {payments?.map((payment, i) => (
                <tr key={payment._id}>
                  <th>{i + 1}</th>
                  <td>{payment.bookingId}</td>
                  <td>{payment.price}</td>
                  <td>{payment.transactionId}</td>
                  <td>
                    <span className="badge badge-accent">Paid</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
