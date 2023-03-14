import React from "react";
import Advertised from "./Advertised";
import Banner from "./Banner";
import Categories from "./Categories/Categories";
import useTitle from "./../../hooks/useTitle";
import Exclusive from "./Exclusive";
import BannerSlider from "./BannerSlider";
import NewBanner from "./NewBanner";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      {/* <Banner></Banner> */}
      {/* <BannerSlider></BannerSlider> */}
      <NewBanner />
      <Advertised></Advertised>
      <Categories></Categories>
      <Exclusive></Exclusive>
    </div>
  );
};

export default Home;
