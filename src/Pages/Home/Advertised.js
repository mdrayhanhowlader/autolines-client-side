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
      <div className="w-4/5 mx-auto my-20">
        <h2 className="text-center text-3xl md:text-5xl text-cyan-300 pb-12 font-semibold">
          Our Top's Collections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
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
