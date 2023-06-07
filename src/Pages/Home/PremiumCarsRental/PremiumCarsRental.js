import React from "react";

const PremiumCarsRental = () => {
  return (
    <div className="py-20">
      <div className="grid grid-cols-2 gap-8">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <img
              src="https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/01/h1-img-6.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/01/h1-img-7.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col justify-center mx-20">
          <h2 className="text-5xl font-semibold mb-2">Premium Cars Rental</h2>
          <h6 className="text-orange-400">ONLY THE BEST</h6>
          <p className="text-gray-600 text-justify my-8">
            Praesent elementum facilisis leo vel fringilla est. Vest bulum
            lectus a urise ultrices eros in cursus turpi uto.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="">
                <span className="text-5xl font-semibold text-gray-700 mb-2">
                  12
                  <sup>+</sup>
                </span>
              </p>
              <p className="text-md text-slate-500 mt-2 text-lg">
                Years of experience
              </p>
            </div>
            <div>
              <p className="">
                <span className="text-5xl font-semibold text-gray-700 mb-2">
                  163
                  <sub>k</sub>
                </span>
              </p>
              <p className="text-md text-slate-500 mt-2 text-lg">
                Satisfied clients
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumCarsRental;
