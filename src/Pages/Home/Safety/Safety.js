import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const Safety = () => {
  return (
    <div className="grid grid-cols-12 items-center gap-6 my-16">
      <div></div>
      <div className="col-span-4">
        <h2 className="text-3xl font-semibold">
          We Care Of Your Safety <br /> And Convenience
        </h2>
        <h6 className="text-orange-400 mb-4 mt-2">PREMIUM DRIVERS</h6>
        <p className="text-gray-600 text-justify">
          Facilisi cras fermentum odio eu feugiat. In fermentum et sollicitudin
          ac ori accumsan sit amet nulla facilisi morbi tempus iaculis urna id.
          Aenean euismod elementum nisi quis eleifend quam adipiscing vitae
          dipiscing.
        </p>
        <button
          to="#"
          className="flex items-center gap-2 px-8 py-4 border border-orange-400 my-4"
        >
          <AiOutlinePlus className="fill-orange-400" /> <span>Book Now</span>
        </button>
      </div>
      <div className="col-span-3">
        <img
          src="https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/01/h1-img-3.jpg"
          alt=""
        />
      </div>
      <div className="col-span-3">
        <img
          src="https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/01/h1-img-4.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Safety;
