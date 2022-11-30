import React from "react";
import Advertised from "./Advertised";
import Banner from "./Banner";
import Categories from "./Categories/Categories";
import useTitle from "./../../hooks/useTitle";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <Advertised></Advertised>
      <Categories></Categories>
    </div>
  );
};

export default Home;
