import React from "react";
import { AiFillApple } from "react-icons/ai";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import Mobile from "../../../assets/redmobile2.png";
import { AiFillCheckCircle } from "react-icons/ai";

const MobileApp = () => {
  return (
    <div>
      <div className="my-32 w-11/12 mx-auto flex flex-col md:flex-row items-center gap-6">
        {/* download app */}

        <div className="bg-[#F84837] h-80 w-full rounded-xl">
          <div className="grid grid-cols-2">
            <div className="flex flex-col items-center">
              <h2 className="text-3xl font-semibold text-white mt-14 pb-2">
                Download <br /> our app
              </h2>
              <button className="w-4/6 py-2 rounded-3xl bg-white text-gray-800 flex items-center gap-2 text-xl my-2">
                <AiFillApple className="text-red-600 ml-4" />{" "}
                <span>For iOS</span>
              </button>
              <button className="w-4/6 py-2 rounded-3xl bg-white text-gray-800 flex items-center gap-2 text-xl my-2">
                <IoLogoGooglePlaystore className="text-red-600 ml-4" />{" "}
                <span>For Android</span>
              </button>
            </div>

            {/* mobile */}
            <div className="relative">
              <img className="absolute top-4" src={Mobile} alt="" />
            </div>
          </div>
        </div>
        {/* buy car */}
        <div className="bg-[#222732] h-80 w-full rounded-xl">
          <div className="flex justify-center items-center gap-4 mt-20">
            {/* left side */}
            <div>
              <h2 className="text-white text-5xl font-semibold pb-6">
                How to buy <br /> a car?
              </h2>
              <button className="bg-transparent py-2 px-6 border border-red-600 rounded-md text-white text-lg text-semibold">
                Read More
              </button>
            </div>
            {/* right side */}
            <div>
              <ul className="text-slate-300 text-xl ml-4">
                <li className="flex justify-start items-center">
                  <AiFillCheckCircle className="text-red-700 mr-4" /> best deals
                </li>
                <li className="flex justify-start items-center">
                  <AiFillCheckCircle className="text-red-700 mr-4" /> sell your
                  car
                </li>
                <li className="flex justify-start items-center">
                  <AiFillCheckCircle className="text-red-700 mr-4" /> car book
                  values
                </li>
                <li className="flex justify-start items-center">
                  <AiFillCheckCircle className="text-red-700 mr-4" /> car
                  dealers
                </li>
                <li className="flex justify-start items-center">
                  <AiFillCheckCircle className="text-red-700 mr-4" /> compare
                  prices
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
