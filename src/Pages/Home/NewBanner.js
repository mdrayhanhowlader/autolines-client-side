import React from "react";
import CarBanner from "../../assets/car-banner.png";

const NewBanner = () => {
  return (
    <div className="bg-gray-800 h-full py-8 md:h-96 text-white">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <div>
          <h2 className="capitalize font-bold text-xl md:text-5xl md:ml-12 pb-2 ">
            Find your <br /> perfect match
          </h2>
          {/* <h2 className="capitalize font-semibold text-2xl md:text-5xl md:ml-12 pb-2 md:hidden mx-2">
            Find your perfect match
          </h2> */}
          <h6 className="md:ml-12 text-md ">
            Say goodbye to your old car and hello to a new adventure. Browse
            <br /> our selection of vehicles and find your perfect match.!
          </h6>
          {/* <h6 className="md:ml-12 text-md md:invisible mx-2">
            Say goodbye to your old car and hello to a new adventure. Browse our
            selection of vehicles and find your perfect match.!
          </h6> */}
        </div>
        <div>
          <img src={CarBanner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NewBanner;
