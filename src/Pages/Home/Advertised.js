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
        <h2 className="text-2xl md:text-3xl pb-4 font-semibold">
          The Best offers from Autoline's
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
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
