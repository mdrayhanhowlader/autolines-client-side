import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./../../contexts/AuthProvider";

const MyWishlist = () => {
  const { user } = useContext(AuthContext);
  const [wishlists, setWishlists] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/wishlist?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setWishlists(data);
      });
  }, [wishlists]);

  const handleRemove = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/deleteWishlist/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <h2 className="text-3xl text-center text-primary">
        Favourites: {wishlists.length}
      </h2>
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {wishlists.map((wishlist, i) => (
                <tr>
                  <th>{i + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        {/* <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={wishlist.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div> */}
                      </div>
                      <div>
                        <div className="font-bold">{wishlist.name}</div>
                        <div className="text-sm opacity-50"></div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {wishlist.resale_price}
                    </span>
                  </td>
                  <td>
                    <button className="btn btn-primary btn-xs">Pay Now</button>
                  </td>
                  <th>
                    <button
                      onClick={() => handleRemove(wishlist._id)}
                      className="btn btn-error btn-xs"
                    >
                      Remove
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

export default MyWishlist;
