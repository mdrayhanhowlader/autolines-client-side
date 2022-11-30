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
    </div>
  );
};

export default MyOrders;
