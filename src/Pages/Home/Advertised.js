import { useQuery } from "@tanstack/react-query";
import React from "react";
import AdvertisedCard from "./AdvertisedCard";

const Advertised = () => {
  const { data: promotes = [] } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await fetch(
        "https://autolines-server.vercel.app/promoteditem"
      );
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <div>
        <h2 className="text-center text-3xl text-primary my-8 font-semibold">
          Best Deal
        </h2>
        <div className=" w-4/5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {promotes.map((promote) => (
            <AdvertisedCard
              key={promote?.key}
              promote={promote}
            ></AdvertisedCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advertised;
