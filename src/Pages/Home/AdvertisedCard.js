import React from "react";

const AdvertisedCard = ({ promote }) => {
  const { img, name, resale_price } = promote;
  return (
    <div>
      <div>
        <div>
          <img className="h-44 w-full rounded" src={img} alt="" />
        </div>
        <div>
          <h2 className="capitalize text-center py-4">{name}</h2>
          <button className="px-6 py-1 text-white bg-orange-500 font-semibold rounded-md">
            ${resale_price}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvertisedCard;
