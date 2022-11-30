import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";

const Seller = () => {
  const { data: sellers = [], refetch } = useQuery({
    queryKey: ["sellers"],
    queryFn: async () => {
      const res = await fetch("https://autolines-server.vercel.app/sellers");
      const data = await res.json();
      return data;
    },
  });

  const handleAdmin = (id) => {
    fetch(`https://autolines-server.vercel.app/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Successfully added");
          refetch();
        }
        console.log(data);
      });
  };
  const handleDelete = (id) => {
    fetch(`https://autolines-server.vercel.app/users/delete/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("do you want to delete");
          refetch();
        }

        console.log(data);
      });
  };

  const handleVerify = (email) => {
    fetch(`https://autolines-server.vercel.app/verifiedseller?email=${email}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.custom();
        }
        refetch();
        console.log(data);
      });
  };

  return (
    <div>
      <h2>Seller {sellers?.length}</h2>
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Make Admin</th>
                <th>Verify</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {sellers?.map((seller, i) => (
                <tr key={seller._id}>
                  <th>{i + 1}</th>
                  <td>{seller.name}</td>
                  <td>{seller.email}</td>
                  <td>
                    {seller.role !== "admin" && (
                      <button
                        onClick={() => handleAdmin(seller._id)}
                        className="btn btn-xs btn-primary"
                      >
                        Make Admin
                      </button>
                    )}
                  </td>
                  <td>
                    {seller.status !== "verified" ? (
                      <button
                        onClick={() => handleVerify(seller.email)}
                        className="btn btn-xs btn-primary"
                      >
                        Verify
                      </button>
                    ) : (
                      <p className="badge badge-outline text-green-500">
                        Verified
                      </p>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(seller._id)}
                      className="btn btn-xs btn-error"
                    >
                      Delete
                    </button>
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

export default Seller;
