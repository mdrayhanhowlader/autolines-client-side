import React, { useContext } from "react";
import { GoVerified } from "react-icons/go";
import { AuthContext } from "../../contexts/AuthProvider";
import { BiTime } from "react-icons/bi";
import { AiFillCar, AiOutlineUser } from "react-icons/ai";
import { GiPriceTag } from "react-icons/gi";
import { MdOutlineFavoriteBorder } from "react-icons/md";

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
    <div className="card w-full mx-auto bg-base-100 shadow-xl">
      <figure>
        <img className="w-full h-52 mx-auto" src={img} alt="img" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="card-title capitalize">
            {name}
            <div className="badge badge-secondary">Used</div>
          </h2>
          <span
            className="card-title"
            title="add to wishlist"
            onClick={() => handleWishlist(user?.email, product)}
          >
            <MdOutlineFavoriteBorder />
          </span>
        </div>
        <span className="flex items-center">
          <BiTime className="fill-cyan-500" />
          <span className="ml-2">{posted_time}</span>
        </span>
        {/* <p>{details}</p> */}
        <p className="flex items-center">
          <AiFillCar className="fill-cyan-500" />
          <span className="ml-2">OLD: {old} Year</span>
        </p>
        <p className="flex justify-between">
          {/* <span>
            <strong>Price: ${price}</strong>
          </span> */}
          <span className="flex items-center">
            <GiPriceTag className="fill-cyan-500" />
            <strong className="ml-2">${resale_price}</strong>
          </span>
        </p>
        <p className="">
          <>
            {status === "verified" ? (
              <span className="flex items-center">
                <span>
                  <AiOutlineUser className="fill-cyan-500" />
                </span>{" "}
                <span className="ml-2 flex items-center">
                  {/* <GoVerified className="fill-green-500" /> */}
                  <span className="ml-2 mr-2 capitalize">{seller}</span>
                  <GoVerified className="fill-green-500" />
                </span>
              </span>
            ) : (
              <span className="flex items-center">
                <AiOutlineUser className="fill-cyan-500" />{" "}
                <span className="ml-2">{seller}</span>
              </span>
            )}
          </>
          <span>{/* <strong>Location: {location}</strong> */}</span>
        </p>
        <div className="card-actions mt-2">
          {/* <div className="badge badge-outline">
            <label onClick={() => handleWishlist(user?.email, product)}>
              Wishlist
            </label>
          </div> */}
          <div className="badge badge-secondary p-4">
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
