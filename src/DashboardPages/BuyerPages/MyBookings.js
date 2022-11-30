import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useTitle from "./../../hooks/useTitle";

const MyBookings = () => {
  useTitle("My Bookings");
  const { user } = useContext(AuthContext);
  const { data: bookings = [], refetch } = useQuery({
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

  const handleDelete = (id) => {};
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
                <th>Price</th>
                <th>Pay Now</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {bookings?.map((booking, i) => (
                <tr key={booking?._id}>
                  <th>{i + 1}</th>
                  <td>{booking.item}</td>
                  <td>{booking.price}</td>
                  <td>
                    {booking.price && !booking.paid && (
                      <Link to={`/dashboard/payment/${booking?._id}`}>
                        <button className="btn btn-xs btn-primary">
                          Pay Now
                        </button>
                      </Link>
                    )}
                    {booking.price && booking.paid && (
                      <span className="text-green-500">Paid</span>
                    )}
                  </td>
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

export default MyBookings;
