import React, { useContext } from "react";
import { HiCheck } from "react-icons/hi";
import { AuthContext } from "../../contexts/AuthProvider";
const SingleProduct = ({ product, handleClick }) => {
  const { user } = useContext(AuthContext);
  const {
    name,
    price,
    img,
    resale_price,
    seller,
    location,
    old,
    posted_time,
    status,
  } = product;

  const handleWishlist = (em, pd) => {
    const email = em;
    const name = pd.name;
    const resale_price = pd.resale_price;
    const productInfo = { email, name, resale_price };
    fetch("https://autolines-server.vercel.app/wishlist", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">Used</div>
        </h2>
        <span>Posted: {posted_time}</span>
        {/* <p>{details}</p> */}
        <p>
          <strong>Used: {old}</strong>
        </p>
        <p className="flex justify-between">
          <span>
            <strong>Price: ${price}</strong>
          </span>
          <span>
            <strong>Sale Price: ${resale_price}</strong>
          </span>
        </p>
        <p className="flex justify-between text-secondary">
          <>
            {status === "verified" ? (
              <span className="flex">
                <HiCheck /> Seller: {seller}
              </span>
            ) : (
              <strong>Seller: {seller}</strong>
            )}
          </>
          <span>
            <strong>Location: {location}</strong>
          </span>
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">
            <label onClick={() => handleWishlist(user?.email, product)}>
              Wishlist
            </label>
          </div>
          <div className="badge badge-outline">
            <label htmlFor="booking-modal" onClick={() => handleClick(product)}>
              Book Now
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
