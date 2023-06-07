import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const RentCar = () => {
  return (
    <div
      className="h-96 flex justify-end"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1075947/pexels-photo-1075947.jpeg?auto=compress&cs=tinysrgb&w=600')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="mt-20 mr-8">
        <h2 className="text-3xl font-semibold text-slate-100">
          Do You Need To Rent A Car?
        </h2>
        <h2 className="text-3xl font-semibold text-slate-100">
          See Our Offers
        </h2>
        <button
          to="#"
          className="flex items-center gap-2 px-8 py-4 border border-orange-400 my-4"
        >
          <AiOutlinePlus className="fill-orange-400" />{" "}
          <span className=" text-slate-100">VIEW MORE</span>
        </button>
      </div>
    </div>
  );
};

export default RentCar;
