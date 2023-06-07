import { useQuery } from "@tanstack/react-query";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("https://autolines-server.vercel.app/categories");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return "hello";
  }

  return (
    <div className="w-full my-12">
      <div className="w-4/5 mx-auto">
        <h2 className="text-3xl text-[#571F22] font-semibold pb-4">
          Explore Cars by Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((category) => (
            <CategoryCard key={category._id} category={category}></CategoryCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
