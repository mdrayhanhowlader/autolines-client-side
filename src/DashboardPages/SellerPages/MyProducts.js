import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/sellerproducts/email/${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });
  console.log(products);
  return (
    <div>
      <h2 className="text-3xl">{products.length}</h2>
    </div>
  );
};

export default MyProducts;
