import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-hot-toast";

const ManageBookings = () => {
  const { user } = useContext(AuthContext);
  const url = `https://autolines-server.vercel.app/bookings`;
  const { data: bookings = [], refetch } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    fetch(`https://autolines-server.vercel.app/deletebookings/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.error("Deleted Successfully");
          refetch();
        }
        console.log(data);
      });
  };
  return (
    <div>
      <h2 className="text-3xl text-primary text-center font-semibold mb-8 mt-4">
        Products Booked: {bookings?.length}
      </h2>
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr className="bg-cyan-700">
                <th>q</th>
                <th>Name</th>
                <th>Location</th>
                <th>Price</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {bookings?.map((booking, i) => (
                <tr key={booking?._id}>
                  <th>{i + 1}</th>
                  <td>{booking.item}</td>
                  <td>{booking.location}</td>
                  <td>{booking.price}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(booking._id)}
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

export default ManageBookings;
