import React, { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import BookingModal from "./BookingModal";
import { AuthContext } from "../../contexts/AuthProvider";
import useBuyer from "./../../hooks/useBuyer";
import useTitle from "./../../hooks/useTitle";

const ProductsCategory = () => {
  useTitle("Category");
  const { user } = useContext(AuthContext);
  const [isBuyer] = useBuyer(user?.email);
  const [modal, setModal] = useState([]);
  const products = useLoaderData([]);
  const handleClick = (product) => {
    setModal(product);
  };
  return (
    <div className="w-full mx-auto">
      <div className="w-4/5 mx-auto my-16 grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product) => (
          <SingleProduct
            key={product._id}
            product={product}
            handleClick={handleClick}
          ></SingleProduct>
        ))}
      </div>
      <div>
        {!isBuyer ? (
          <>
            <input
              type="checkbox"
              id="booking-modal"
              className="modal-toggle"
            />
            <label htmlFor="booking-modal" className="modal cursor-pointer">
              <label className="modal-box relative" htmlFor="">
                <p className="py-4">
                  <Link className="text-cyan-500" to="/register">
                    For Book This Product Please Create Buyer Account!
                  </Link>
                </p>
              </label>
            </label>
          </>
        ) : (
          <BookingModal modal={modal}></BookingModal>
        )}
      </div>
    </div>
  );
};

export default ProductsCategory;
