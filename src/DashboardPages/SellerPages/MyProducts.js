import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const { data: products = [], refetch } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await fetch(
        `https://autolines-server.vercel.app/sellerproducts?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });
  console.log(products);

  const handlePromote = (id) => {
    console.log(id);
    fetch(`https://autolines-server.vercel.app/promoteproducts/${id}`, {
      method: "PUT",
    }).then((res) =>
      res.json().then((data) => {
        console.log(data);
        refetch();
      })
    );
  };
  const handleDelete = (id) => {
    console.log(id);
  };

  const handlePromoteDelete = (id) => {
    fetch(`https://autolines-server.vercel.app/removepromoteproducts/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        console.log(data);
      });
  };
  return (
    <div>
      <h2 className="text-3xl">{products.length}</h2>
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Q</th>
                <th>Name</th>
                <th>Details</th>
                <th>Price</th>
                <th>Promote</th>
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
                    {product?.ad !== "yes" ? (
                      <button
                        onClick={() => handlePromote(product._id)}
                        className="btn btn-primary btn-xs"
                      >
                        Promote
                      </button>
                    ) : (
                      <button
                        onClick={() => handlePromoteDelete(product._id)}
                        className="btn btn-error btn-xs"
                      >
                        Remove
                      </button>
                    )}
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

export default MyProducts;
