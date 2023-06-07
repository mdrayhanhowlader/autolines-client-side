import React from "react";

const Comfort = () => {
  return (
    <div className="w-10/12 mx-auto py-10">
      <div>
        <h2 className="text-4xl font-semibold mt-12 mb-2">
          Ride To Destinations <br /> With Maximum Comfort
        </h2>
        <h6 className="text-md mb-6 text-orange-400">FINEST TRANSPORT</h6>
        <hr />
        <div className="mt-10">
          <div className="mt-12 grid grid-cols-7 gap-8">
            <div></div>
            <div className="col-span-3">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                No Delays
              </h4>
              <p className="font-semibold text-gray-500 text-justify">
                Tortor condimentum lacinia quis vel eros donec odio. Feugiat
                fermentum in posuere urna. Faucibus turpis in eun mi bibendum.
              </p>
            </div>
            <div className="col-span-3">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                High Quality
              </h4>
              <p className="font-semibold text-gray-500 text-justify">
                Tortor condimentum lacinia quis vel eros donec odio. Feugiat
                fermentum in posuere urna. Faucibus turpis in eun mi bibendum.
              </p>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-7 gap-8">
            <div></div>
            <div className="col-span-3">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Premium Support
              </h4>
              <p className="font-semibold text-gray-500 text-justify">
                Tortor condimentum lacinia quis vel eros donec odio. Feugiat
                fermentum in posuere urna. Faucibus turpis in eun mi bibendum.
              </p>
            </div>
            <div className="col-span-3">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                A Diverse Selection
              </h4>
              <p className="font-semibold text-gray-500 text-justify">
                Tortor condimentum lacinia quis vel eros donec odio. Feugiat
                fermentum in posuere urna. Faucibus turpis in eun mi bibendum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <img
          src="https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/01/h1-img-2.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Comfort;
