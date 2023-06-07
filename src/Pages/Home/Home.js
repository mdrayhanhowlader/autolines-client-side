import React from "react";
import Advertised from "./Advertised";
import Banner from "./Banner";
import Categories from "./Categories/Categories";
import useTitle from "./../../hooks/useTitle";
import Exclusive from "./Exclusive";
import BannerSlider from "./BannerSlider";
import NewBanner from "./NewBanner";
import MobileApp from "./MobileApp/MobileApp";
import TopRated from "./TopRated/TopRated";
import Comfort from "./Comfort/Comfort";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      {/* <Banner></Banner> */}
      {/* <BannerSlider></BannerSlider> */}
      <NewBanner />
      <Advertised></Advertised>
      <Categories></Categories>
      <MobileApp />
      {/* <Exclusive></Exclusive> */}
      <TopRated />
      <Comfort />
    </div>
  );
};

export default Home;
