import { useQuery } from "@tanstack/react-query";
import React from "react";

const ManageProducts = () => {
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
  const handleDelete = (id) => {
    fetch(`https://autolines-server.vercel.app/products/admin/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("do you want to delete? if you want please press ok!");
          refetch();
        }
        console.log(data);
      });
  };
  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-primary pt-4 pb-8">
        Products: {products.length}
      </h2>
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Q</th>
                <th>Name</th>
                <th>Details</th>
                <th>Price</th>
                <th>Report</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products?.map((product, i) => (
                <tr key={product._id}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={product.img}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{product.name}</div>
                        <div className="text-sm opacity-50">
                          {product?.location}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-error text-xs">
                    <span className="badge badge-ghost badge-sm">
                      {product?._id}
                    </span>
                  </td>
                  <td>{product?.price}</td>
                  <td>
                    <span>{product?.report}</span>
                  </td>
                  <th>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="btn btn-error btn-xs"
                    >
                      delete
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;
